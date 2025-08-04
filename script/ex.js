// Grade point values for each letter grade
const gradePoints = {
    'A': 4.0,
    'A-': 3.75,
    'B+': 3.5,
    'B': 3.0,
    "B-": 2.75,
    "C+": 2.5,
    'C': 2.0,
    'C-': 1.75,
    'D+': 1.5,
    'D': 1.0,
    'D-': .75,
    'F': 0.0
};

// Weight percentages for each year
const yearWeights = {
    'First': 0.15,
    'Second': 0.20,
    'Third': 0.20,
    'Fourth': 0.20,
    'Fifth': 0.25
};

function calculateGrades() {
    let totalWeightedGPA = 0;
    let totalCredits = 0;

    // Process each year
    for (let year in yearWeights) {
        let yearSection = document.querySelector(`.years h2.${year} + .year-section`);
        let terms = yearSection.querySelectorAll('.term-decorater');

        let yearGPA = 0;
        let yearCredits = 0;

        terms.forEach(term => {
            let subjects = term.querySelectorAll('label');
            subjects.forEach(subject => {
                let credit = parseInt(subject.querySelector('.credit')?.textContent || '3'); // Default to 3 if no credit
                let gradeSelect = subject.querySelector('select');
                let grade = gradeSelect.value;

                if (gradePoints[grade]) {
                    yearGPA += gradePoints[grade] * credit;
                    yearCredits += credit;
                }
            });
        });

        // Calculate year GPA if there are credits
        if (yearCredits > 0) {
            let yearAverage = yearGPA / yearCredits;
            totalWeightedGPA += yearAverage * yearWeights[year];
            totalCredits += yearCredits;
        }
    }

    // Calculate overall GPA
    let overallGPA = totalWeightedGPA / (Object.values(yearWeights).reduce((a, b) => a + b, 0));
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Overall GPA: ${overallGPA.toFixed(2)}`;
}

// Assuming goTo function for navigation (you can adjust based on your needs)
let currentElement = 0;
function goTo(index) {
    let years = document.querySelectorAll('.years');
    if (index >= 0 && index < years.length) {
        years.forEach(year => year.classList.add('dn'));
        years[index].classList.remove('dn');
        currentElement = index;
    }
}



// Initial setup
document.addEventListener("DOMContentLoaded", function() {
    goTo(0); // Start with the first year
    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', () => goTo(currentElement + 1));
    });
    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', () => goTo(currentElement - 1));
    });
    document.querySelector('button').addEventListener('click', calculateGrades);
});