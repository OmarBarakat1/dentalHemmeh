//  function calculateGrades() {
//             // حساب متوسط كل فصل وكل سنة
//             const terms = [
//                 ['y1t1', 'y1t2', 'y1t3'], // FIRST YEAR (5 مواد في FIRST TERM، 6 في SECOND TERM)
//                 ['y2t1', 'y2t2', 'y2t3'], // SECOND YEAR (5 مواد في FIRST TERM، 6 في SECOND TERM)
//                 ['y3t1', 'y3t2', 'y3t3'], // THIRD YEAR (7 مواد في FIRST TERM، 9 في SECOND TERM، 4 في SUMMER TERM)
//                 ['y4t1', 'y4t2', 'y4t3'], // FOURTH YEAR (13 مواد في FIRST TERM، 11 في SECOND TERM)
//                 ['y5t1', 'y5t2', 'y5t3']  // FIFTH YEAR
//             ];

//             let yearAverages = [];
//             for (let i = 0; i < 5; i++) {
//                 let yearTotal = 0;
//                 let termCount = 0;
//                 for (let j = 0; j < 3; j++) {
//                     let termAvg = 0;
//                     let subjectCount = 0;
//                     let subjectLimit = [5, 6, 3, 5, 6, 3, 7, 9, 4, 13, 11, 3, 3, 3, 3][(i * 3) + j]; // تعيين عدد المواد بناءً على السنة والفصل
//                     for (let k = 1; k <= subjectLimit; k++) {
//                         let grade = parseFloat(document.getElementById(`${terms[i][j]}s${k}`).value) || 0;
//                         if (grade > 0) {
//                             termAvg += grade;
//                             subjectCount++;
//                         }
//                     }
//                     if (subjectCount > 0) {
//                         termAvg /= subjectCount;
//                         yearTotal += termAvg;
//                         termCount++;
//                     }
//                 }
//                 let yearAvg = termCount > 0 ? yearTotal / termCount : 0;
//                 yearAverages.push(yearAvg);
//             }

//             // حساب المعدل النهائي بناءً على النسب
//             const finalGrade = (yearAverages[0] * 0.15) + (yearAverages[1] * 0.20) +
//                 (yearAverages[2] * 0.20) + (yearAverages[3] * 0.20) +
//                 (yearAverages[4] * 0.25);

//             // عرض النتائج
//             let resultText = `<h3>Averages:</h3>`;
//             resultText += `FIRST YEAR: ${yearAverages[0].toFixed(2)}%<br>`;
//             resultText += `SECOND YEAR: ${yearAverages[1].toFixed(2)}%<br>`;
//             resultText += `THIRD YEAR: ${yearAverages[2].toFixed(2)}%<br>`;
//             resultText += `FOURTH YEAR: ${yearAverages[3].toFixed(2)}%<br>`;
//             resultText += `FIFTH YEAR: ${yearAverages[4].toFixed(2)}%<br>`;
//             resultText += `<h3>Final Average: ${finalGrade.toFixed(2)}%</h3>`;

//             document.getElementById('result').innerHTML = resultText;
//         }

let prev = document.querySelectorAll(".prev");
let next = document.querySelectorAll(".next");
let slides = document.querySelectorAll(".years");

prev.forEach( (button) => {
    button.onclick = function(){
    goTo(currentElement-1);
    
} 

})
next.forEach( (button) => {
    button.onclick = function(){
    goTo(currentElement+1);
    
}
})

currentElement = 0;

function goTo(n){
    slides[currentElement].classList.add("dn");
    currentElement = (n+slides.length) % slides.length; 
    slides[currentElement].classList.remove("dn");
}

document.addEventListener("keydown", function() {
    if(event.key === "ArrowLeft") {
        goTo(currentElement-1);
    } else if(event.key === "ArrowRight") {
        goTo(currentElement+1);
    }
})

