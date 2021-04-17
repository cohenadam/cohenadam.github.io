function showGenCode()
{
    answer1 = getAnswerValue("q1");
    answer2 = getAnswerValue("q2");
    answer3 = getAnswerValue("q3");
    answer4 = getAnswerValue("q4");
    answer5 = getAnswerValue("q5");
    answer6 = getAnswerValue("q6");
    answer7 = getAnswerValue("q7");
    answer8 = getAnswerValue("q8");
    answer9 = getAnswerValue("q9");
    document.getElementById("generatedcode").innerHTML = "Generert kode: "+answer1+answer2+answer3+answer4+answer5+answer6+answer7+answer8+answer9;
}

function getAnswerValue(questionname)
{
    let question = document.getElementsByName(questionname);
    
    for(i = 0; i < question.length; i++) {
                 if(question[i].checked)
                return question[i].value;
            }
}
// function showGenCode() {
//     let q1answer = getValue("q1");
//         document.getElementById("generatedcode").innerHTML = "Generert: "+q1answer.value;
//     }

// function getValue(question) {
//     let questions = document.getElementsByName(question);
      
//     for(i = 0; i < question.length; i++) {
//         if(question[i].checked)
//         return question[i].value;
//     }
// }