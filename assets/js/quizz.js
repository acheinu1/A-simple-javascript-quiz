function submitAnswers() {
  // users inputs or answers
  var total = 5;
  var score = 0;

  var question1 = document.forms['JSquiz']['Q1'].value;
  var question2 = document.forms['JSquiz']['Q2'].value;
  var question3 = document.forms['JSquiz']['Q3'].value;
  var question4 = document.forms['JSquiz']['Q4'].value;
  var question5 = document.forms['JSquiz']['Q5'].value;

// validation     
// used for loop for validation to reduce lines of code
 for(var i=1; i <= total; i++){
     //used eval to concat question and number
    if (eval("question" + i).length == null || eval("question" + i).length == ' ') {
        alert('please answer question' +" "+ i);
        return false;
    }
 }

// scoring
var quizAnswers = ["b","a","d","b","d"];

for(var i=1; i <= total; i++){
    if(eval("question" + i) == quizAnswers[i-1]){
        score++
       }  
}

// if(question1 == quizAnswers[0]){
//  score++
// }
// if(question2 == quizAnswers[1]){
//     score++
// }
// if(question3 == quizAnswers[2]){
//     score++
// }
// if(question4 == quizAnswers[3]){
//     score++
// }
// if(question5 == quizAnswers[4]){
//     score++
// }
// alert("you scored" + " " +score +" "+"out of" +" "+ total)

// display result
var theResult = document.getElementById("result");
theResult.innerHTML = "<h3> you scored"+" " + score + " " +"out of"+ " " +total+ "</h3> "
  return false;
}
