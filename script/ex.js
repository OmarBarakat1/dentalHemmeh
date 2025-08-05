// Grade point values for each letter grade
const gradePoints = {
    'A': 4.0,
    'A-': 3.75,
    'B+': 3.5,
    'B': 3.0,
    'B-': 2.75,
    'C+': 2.5,
    'C': 2.0,
    'C-': 1.75,
    'D+': 1.5,
    'D': 1.0,
    'D-': 0.75,
    'F': 0.0
};

// Weight percentages for each year
const yearWeights = {
    'First Year': 0.15,
    'Second Year': 0.20,
    'Third Year': 0.20,
    'Fourth Year': 0.20,
    'Fifth Year': 0.25
};

function calculateYearGPA(yearSection) {
    let yearGPA = 0;
    let yearCredits = 0;
    let terms = yearSection.querySelectorAll('.term-decorater');

    terms.forEach(term => {
        let subjects = term.querySelectorAll('label');
        subjects.forEach(subject => {
            let credit = parseInt(subject.querySelector('.credit')?.textContent || '3');
            let gradeSelect = subject.querySelector('select');
            let grade = gradeSelect.value;

            if (gradePoints[grade]) {
                yearGPA += gradePoints[grade] * credit;
                yearCredits += credit;
            }
        });
    });

    return yearCredits > 0 ? (yearGPA / yearCredits).toFixed(2) : '0.00';
}

function calculateOverallGPA() {
    let totalWeightedGPA = 0;
    let years = document.querySelectorAll('.years');

    years.forEach(year => {
        let yearSection = year.querySelector('.year-section');
        let yearName = year.querySelector('h2').textContent.split('(')[0].trim();
        let yearGPA = parseFloat(calculateYearGPA(yearSection));
        let weight = yearWeights[yearName];
        totalWeightedGPA += yearGPA * weight;
    });

    return (totalWeightedGPA / (Object.values(yearWeights).reduce((a, b) => a + b, 0))).toFixed(2);
}

let currentElement = 0;
let years = document.querySelectorAll(".years");
function goTo(index) {
    years[currentElement].classList.add("dn");
    currentElement = (index + years.length) % years.length;
    years[currentElement].classList.remove("dn");

    let yearSection = years[currentElement].querySelector('.year-section');
    let yearGPA = calculateYearGPA(yearSection);
    let yearName = years[currentElement].querySelector('h2').textContent.split('(')[0].trim();
    document.querySelector('.yearGpa').textContent = `${yearName} GPA: ${yearGPA}`;
}

document.querySelector(".number").addEventListener("click", function(event) {
    let target = event.target;
    if (target.classList.contains("num1")) goTo(0);
    else if (target.classList.contains("num2")) goTo(1);
    else if (target.classList.contains("num3")) goTo(2);
    else if (target.classList.contains("num4")) goTo(3);
    else if (target.classList.contains("num5")) goTo(4);
});

document.addEventListener("DOMContentLoaded", function() {
    goTo(0);
    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', () => goTo(currentElement + 1));
    });
    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', () => goTo(currentElement - 1));
    });
    document.querySelector('span.Calculate').addEventListener('click', function() {
        let yearGPA = calculateYearGPA(years[currentElement].querySelector('.year-section'));
        let yearName = years[currentElement].querySelector('h2').textContent.split('(')[0].trim();
        let totalGPA = calculateOverallGPA();
        this.parentElement.querySelector('.yearGpa').textContent = `${yearName} GPA: ${yearGPA}`;
        this.parentElement.querySelector('.totalGpa').textContent = `Total GPA: ${totalGPA}`;
    });
});