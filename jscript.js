// CODE GENERATION SCRIPT

function showGenCode()
{
  document.getElementById("gencode").className = "questionbox_hide"; 

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
    let base64values = 'A B C D E F G H @ J K L M N O P Q R S T U V W X Y Z a b c d e f g h ! j k ? m n o p q r s t u v w x y z 0 1 2';
    base64values = base64values.split(" ");
    let coderesultbase64 = [];
    //create base64 code
    for(i = 0; i < coderesult.length; i++) {
       coderesultbase64[i] = base64values[coderesult[i]];
   }


  // hide questionboxes 
  
    document.getElementById("introbox").className = "questionbox_hide"; 
    document.getElementById("questionbox1").className = "questionbox_hide"; 
    document.getElementById("questionbox2").className = "questionbox_hide"; 
    document.getElementById("questionbox3").className = "questionbox_hide"; 
    document.getElementById("questionbox4").className = "questionbox_hide"; 
    document.getElementById("questionbox5").className = "questionbox_hide"; 
    document.getElementById("questionbox6").className = "questionbox_hide"; 
    document.getElementById("questionbox7").className = "questionbox_hide"; 
    document.getElementById("questionbox8").className = "questionbox_hide"; 
    document.getElementById("questionbox9").className = "questionbox_hide"; 
    document.getElementById("submitbutton").className = "questionbox_hide"; 

    // insert code result in div
        // html for the result div
    resultHTML = '<h2>Gi denne koden til din behandler:<br>(Husk å skille mellom små og store bokstaver) </h2><p class = "codebox">' + coderesultbase64.join("") + "</p>" + "</p>";
    document.getElementById("generatedcode").innerHTML = resultHTML;
    // hide the submission div
    document.getElementById("questionbox10").className = "questionbox_hide";
    // show the result div
    document.getElementById("generatedcode").className = "questionbox_show";
    document.getElementById("helpinfobox").className = "helpinfobox";

  }

function getAnswerValue(questionname)
{
    let question = document.getElementsByName(questionname);
    
    for(i = 0; i < question.length; i++) {
                 if(question[i].checked)
                return question[i].value;
            }
}

// show next questionbox when answered
function showQuestionbox(questionbox) { 
  document.getElementById(questionbox).className = "questionbox_show"; 
  document.getElementById(questionbox).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
} 

// show correct pathway if doctor or patient
function showPatientOrDoctor(patientordoctor) {
  document.getElementById('patientordoctorbox').className = "questionbox_hide"; 
  if (patientordoctor == 'patient') {
    document.getElementById('introbox').className = "questionbox_show"; 
  }
  else {
    document.getElementById('doctorbox').className = "questionbox_show"; 
  }

}

// generate the result from code
function reverseCode() {
  document.getElementById("doctorbox").className = "questionbox_hide"; 
  let codeinput = document.getElementById('code').value;
  let answers = [];
  codeinput = codeinput.split("");
  
  // turn the code letter into a base64 index number
  let base64values = 'A B C D E F G H @ J K L M N O P Q R S T U V W X Y Z a b c d e f g h ! j k ? m n o p q r s t u v w x y z 0 1 2';
  base64values = base64values.split(" ");
  for(a = 0; a < codeinput.length; a++) {
    codeinput[a] = base64values.indexOf(codeinput[a]);
}

// split the base64 number into two numbers between 0-6
let coderesult = [];
let currentanswer;
let nextanswer;
    for (i = 0; i < codeinput.length; i++) {
        if (i == codeinput.length-1) {
            coderesult.push(codeinput[i]);
        }
        else {
        currentanswer = codeinput[i] >> 3;
        nextanswer = codeinput[i] & 7; // 7 = 000111
        
        coderesult.push(currentanswer);
        coderesult.push(nextanswer);
        }
    }

    coderesult = coderesult.map((i) => Number(i));
    const sumresult = coderesult.reduce((partialSum, a) => partialSum + a, 0);
    coderesulttext = '<h2  style="text-align:left;">1. Stemningsleie: ' + coderesult[0] + '<br>' + 
    '2. Følelse av indre uro / spenning: ' + coderesult[1] +  '<br>' + 
    '3. Søvn: ' + coderesult[2] +  '<br>' + 
    '4. Matlyst: ' + coderesult[3] +  '<br>' + 
    '5. Konsentrasjonsevne: ' + coderesult[4] +  '<br>' + 
    '6. Initiativ: ' + coderesult[5] +  '<br>' + 
    '7. Følelsesmessig engasjement: ' + coderesult[6] +  '<br>' + 
    '8. Pessimisme: ' + coderesult[7] +  '<br>' + 
    '9. Livslyst: ' + coderesult[8] +  '<br><br>' + 
    'Total skår: ' + sumresult;

    document.getElementById("generatedanswers").innerHTML = coderesulttext;
    document.getElementById("questionbox10").className = "questionbox_show"; 

    return coderesult;
}

function showFinalResult() {
  document.getElementById("questionbox10").className = "questionbox_hide"; 
  coderesult = reverseCode();
  coderesult.push(getAnswerValue("q10")); 
  coderesult = coderesult.map((i) => Number(i));

  const sumresult = coderesult.reduce((partialSum, a) => partialSum + a, 0);
  coderesulttext = '<h2  style="text-align:left;">1. Stemningsleie: ' + coderesult[0] + '<br>' + 
  '2. Følelse av indre uro / spenning: ' + coderesult[1] +  '<br>' + 
  '3. Søvn: ' + coderesult[2] +  '<br>' + 
  '4. Matlyst: ' + coderesult[3] +  '<br>' + 
  '5. Konsentrasjonsevne: ' + coderesult[4] +  '<br>' + 
  '6. Initiativ: ' + coderesult[5] +  '<br>' + 
  '7. Følelsesmessig engasjement: ' + coderesult[6] +  '<br>' + 
  '8. Pessimisme: ' + coderesult[7] +  '<br>' + 
  '9. Livslyst: ' + coderesult[8] +  '<br>' +
  '10. Synlig tristhet – legeobservert:' + coderesult[9] + '<br><br>' + 
  'Total skår: ' + sumresult +  '<br><br>' + 
  '<ul><li>12–20: Pasienten kan ha nytte av antidepressive midler i tillegg til samtaler</li><li>≥20: Mange vil ha nytte av medikamentell antidepressiv behandling, såfremt depresjonen har vart i minst 2 uker og ikke skyldes sorg.</li><li>≥35: Vurder innleggelse, eventuelt henvisning til DPS (distriktspsykiatrisk senter) eller spesialist.<br>Suicidalitetsskår ≥4: Vurder innleggelse uavhengig av sumskår.</li><ul>';
  document.getElementById("generatedanswers").innerHTML = coderesulttext;
  document.getElementById("generatedanswers").className = "questionbox_show";
  document.getElementById("questionbox10").className = "questionbox_hide"; 

}