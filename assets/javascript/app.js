
function lightSideSubmit(){
//create variables for correct and incorrect questions. 
  var questionsCorrect = 0;
  var questionsIncorrect = [];
//question 1 check
  var question1 = document.getElementsByName("q1");
  for(i=0;i<question1.length;i++){
    if(question1[2].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q1');
      break;
    }
  }
//question 2 check
  var question2 = document.getElementsByName("q2");
  for(i=0;i<question2.length;i++){
    if(question2[0].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q2');
      break;
    }
  }
//question 3 check
  var question3 = document.getElementsByName("q3");
  for(i=0;i<question3.length;i++){
    if(question3[1].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q3');
      break;
    }
  }  
//question 4 check
  var question4 = document.getElementsByName("q4");
  for(i=0;i<question4.length;i++){
    if(question4[3].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q4');
      break;
    }
  }
//question 5 check
  var question5 = document.getElementsByName("q5");
  for(i=0;i<question5.length;i++){
    if(question5[3].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q5');
      break;
    }
  }
//question 6 check
  var question6 = document.getElementsByName("q6");
  for(i=0;i<question6.length;i++){
    if(question6[0].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q6');
      break;
    }
  }
//question 7 check
  var question7 = document.getElementsByName("q7");
  for(i=0;i<question7.length;i++){
    if(question7[0].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q7');
      break;
    }
  }
//question 8 check
  var question8 = document.getElementsByName("q8");
  for(i=0;i<question8.length;i++){
    if(question8[0].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q8');
      break;
    }
  }
//question 9 check
    var question9 = document.getElementsByName("q9");
  for(i=0;i<question9.length;i++){
    if(question9[2].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q9');
      break;
    }
  }
//question 10 check
    var question10 = document.getElementsByName("q10");
  for(i=0;i<question10.length;i++){
    if(question10[0].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q10');
      break;
    }
  }

  console.log(questionsIncorrect);
  console.log('questions correct: ' + questionsCorrect + '/10');
  
function result() {
  //grab the empty div where we want to populate results
  var div = document.getElementById('results');
  //set a class to the div to give it CSS properties
  div.setAttribute('class', 'resultPopup');
  //run through an if statement to determine the number of questions correct.
  //add the correct response to the div we have selected.
  if (questionsCorrect == 10){
    div.innerHTML += 'You are a true Jedi prodigy.</br></br><img src="assets/images/anakin.jpeg">'
  } else if (questionsCorrect == 9){
    div.innerHTML += 'You are strong with the force.</br></br><img src="assets/images/oldLuke.jpg">'
  } else if (questionsCorrect == 8){
    div.innerHTML += 'You must work in the Jedi Archives.</br></br><img src="assets/images/librarian.jpg">'
  } else if (questionsCorrect == 7){
    div.innerHTML += 'You are familiar with the ways of the Jedi.</br></br><img src="assets/images/youngLuke.jpg">'
  } else if (questionsCorrect == 6){
    div.innerHTML += 'You have a passing knowledge of the force.</br></br><img src="assets/images/greyJedi.jpg">'
  } else if (questionsCorrect == 5){
    div.innerHTML += 'Do you even remember these guys?</br></br><img src="assets/images/ewok.jpeg">'
  } else if (questionsCorrect == 4) {
    div.innerHTML += 'A refresher is definitely in order.</br></br><img src="assets/images/starkiller.jpg">'
  } else if (questionsCorrect == 3) {
    div.innerHTML += 'You seem in danger of falling to the dark side.</br></br><img src="assets/images/revengeLuke.jpeg">'
  } else if (questionsCorrect == 2) {
    div.innerHTML += 'You have let down Princess Leia.</br></br><img src="assets/images/leia.jpg">'
  } else if (questionsCorrect == 1) {
    div.innerHTML += 'Admit it, you missed a lot of answers on purpose.</br>Or even he is smarter than you.</br><img src="assets/images/jarjar.jpg" style="width: 33%; height: 33%">'
  } else if (questionsCorrect == 0) {
    div.innerHTML += 'I find your lack of faith disturbing.</br></br><img src="assets/images/vader.jpg">'
  }
} 
result();
} 





//DARK SIDE
function darkSideSubmit(){
//create variables for correct and incorrect questions. 
  var questionsCorrect = 0;
  var questionsIncorrect = [];
//question 1 check
  var question1 = document.getElementsByName("q1");
  for(i=0;i<question1.length;i++){
    if(question1[2].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q1');
      break;
    }
  }
//question 2 check
  var question2 = document.getElementsByName("q2");
  for(i=0;i<question2.length;i++){
    if(question2[0].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q2');
      break;
    }
  }
//question 3 check
  var question3 = document.getElementsByName("q3");
  for(i=0;i<question3.length;i++){
    if(question3[1].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q3');
      break;
    }
  }  
//question 4 check
  var question4 = document.getElementsByName("q4");
  for(i=0;i<question4.length;i++){
    if(question4[3].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q4');
      break;
    }
  }
//question 5 check
  var question5 = document.getElementsByName("q5");
  for(i=0;i<question5.length;i++){
    if(question5[3].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q5');
      break;
    }
  }
//question 6 check
  var question6 = document.getElementsByName("q6");
  for(i=0;i<question6.length;i++){
    if(question6[0].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q6');
      break;
    }
  }
//question 7 check
  var question7 = document.getElementsByName("q7");
  for(i=0;i<question7.length;i++){
    if(question7[0].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q7');
      break;
    }
  }
//question 8 check
  var question8 = document.getElementsByName("q8");
  for(i=0;i<question8.length;i++){
    if(question8[0].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q8');
      break;
    }
  }
//question 9 check
    var question9 = document.getElementsByName("q9");
  for(i=0;i<question9.length;i++){
    if(question9[2].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q9');
      break;
    }
  }
//question 10 check
    var question10 = document.getElementsByName("q10");
  for(i=0;i<question10.length;i++){
    if(question10[0].checked){
      questionsCorrect++;
      break;
    } else {
      questionsIncorrect.push('Q10');
      break;
    }
  }

  console.log(questionsIncorrect);
  console.log('questions correct: ' + questionsCorrect + '/10');
  
function result() {
  //grab the empty div where we want to populate results
  var div = document.getElementById('results');
  //set a class to the div to give it CSS properties
  div.setAttribute('class', 'resultPopup');
  //run through an if statement to determine the number of questions correct.
  //add the correct response to the div we have selected.
  if (questionsCorrect == 10){
    div.innerHTML += 'You are a true Jedi prodigy.</br></br><img src="assets/images/anakin.jpeg">'
  } else if (questionsCorrect == 9){
    div.innerHTML += 'You are strong with the force.</br></br><img src="assets/images/oldLuke.jpg">'
  } else if (questionsCorrect == 8){
    div.innerHTML += 'You must work in the Jedi Archives.</br></br><img src="assets/images/librarian.jpg">'
  } else if (questionsCorrect == 7){
    div.innerHTML += 'You are familiar with the ways of the Jedi.</br></br><img src="assets/images/youngLuke.jpg">'
  } else if (questionsCorrect == 6){
    div.innerHTML += 'You have a passing knowledge of the force.</br></br><img src="assets/images/greyJedi.jpg">'
  } else if (questionsCorrect == 5){
    div.innerHTML += 'Do you even remember these guys?</br></br><img src="assets/images/ewok.jpeg">'
  } else if (questionsCorrect == 4) {
    div.innerHTML += 'A refresher is definitely in order.</br></br><img src="assets/images/starkiller.jpg">'
  } else if (questionsCorrect == 3) {
    div.innerHTML += 'You seem in danger of falling to the dark side.</br></br><img src="assets/images/revengeLuke.jpeg">'
  } else if (questionsCorrect == 2) {
    div.innerHTML += 'You have let down Princess Leia.</br></br><img src="assets/images/leia.jpg">'
  } else if (questionsCorrect == 1) {
    div.innerHTML += 'Admit it, you missed a lot of answers on purpose.</br>Or even he is smarter than you.</br><img src="assets/images/jarjar.jpg" style="width: 33%; height: 33%">'
  } else if (questionsCorrect == 0) {
    div.innerHTML += 'I find your lack of faith disturbing.</br></br><img src="assets/images/vader.jpg"><button onClick="test()">test</button>'
  }
} 
result();
} 

function test() {
  console.log('test');
}




