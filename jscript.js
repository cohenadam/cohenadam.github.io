function showGenCode()
{
    // get answers and convert to integers
    let answers = [getAnswerValue("q1")];
    answers.push(getAnswerValue("q2")); 
    answers.push(getAnswerValue("q3")); 
    answers.push(getAnswerValue("q4")); 
    answers.push(getAnswerValue("q5")); 
    answers.push(getAnswerValue("q6")); 
    answers.push(getAnswerValue("q7")); 
    answers.push(getAnswerValue("q8")); 
    answers.push(getAnswerValue("q9")); 

    answers = answers.map((i) => Number(i));
    
    // code generator

    let i;
    let coderesult = [];
    for (i = 0; i < answers.length; i++) {
        if (i == answers.length-1) {
            coderesult.push(answers[i]);
        }
        else {
        currentanswer = answers[i];
        nextanswer = answers[i+1];
        currentanswer = currentanswer << 3;
        resultanswer = currentanswer | nextanswer;
        coderesult.push(resultanswer);
        i++;
        }
    }
    coderesult = coderesult.map((i) => Number(i));

    // create a base64 lookup table
    let base64values = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2';
    base64values = base64values.split(" ");
    let coderesultbase64 = [];
    //create base64 code
    for(i = 0; i < coderesult.length; i++) {
       coderesultbase64[i] = base64values[coderesult[i]];
   }
    document.getElementById("generatedcode").innerHTML = coderesultbase64;
}

function getAnswerValue(questionname)
{
    let question = document.getElementsByName(questionname);
    
    for(i = 0; i < question.length; i++) {
                 if(question[i].checked)
                return question[i].value;
            }
}