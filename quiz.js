function check() {
  let score = 0;
  let q1 = document.quiz.question1.value;
  let q2 = document.quiz.question2.value;
  let q3 = document.quiz.question3.value;
  let q4 = document.quiz.question4.value;
  let q5 = document.quiz.question5.value;
  if (q1 == "Hypertext Markup Language") {
    score++;
    localStorage.setItem("highscore", score);
  }
  if (q2 == "h1") {
    score++;
    localStorage.setItem("highscore", score);
  }
  if (q3 == "/") {
    score++;
    localStorage.setItem("highscore", score);
  }
  if (q4 == "true") {
    score++;
    localStorage.setItem("highscore", score);
  }
  if (q5 == "Script") {
    score++;
    localStorage.setItem("highscore", score);
  }

  if (score == 4 || score == 5) {
    alert(
      "Marks " + " " + score + " " + "Out Of 5" + "     " + "Final Call : Yes"
    );
  }
  if (score == 3) {
    alert(
      "Marks " + " " + score + " " + "Out Of 5" + "     " + "Final Call : Maybe"
    );
    
  } else if(score == 2 || score == 1 || score ==0){
    alert(
      "Marks " + " " + score + " " + "Out Of 5" + "     " + " Final Call : No"
    );  
  }
}
document.getElementById("highscore").innerHTML = localStorage.getItem("highscore");