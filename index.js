let number = [Math.floor(Math.random() * 100)]

let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

const result = document.querySelector(".result");

const resultDiv = document.querySelector(".resultParas");
let count = document.querySelector(".count")
let count2 = 0;
let resultText = "";


btn.addEventListener('click', function () {

  let input = document.getElementById('userInput').value;

  if (count2 < 5) {
    count2++;

    if (input == number) {
      resultText = 'Congratulations! your guess was right';

    }
    else if (input < number) {
      resultText = 'your guess was too low!';

    }

    if (input > number) {
      resultText = 'your guess was too high';

    }

    let answer = "you quessed" + input + " " + resultText;
    const result = document.createElement("p");
    result.innerHTML = answer;
    resultDiv.appendChild(result);

  }

});


