$('#guessButton').on('click', setMinMax);
$('#clearButton').on('click', clearInputFields);
$('#reset-button').on('click', resetPage)

function setMinMax() {
  event.preventDefault();
  var userInput = $('#userInput').val();
  var minInput = $('#minInput').val() || 1;
  console.log("This is my min " + minInput);
  var maxInput = $('#maxInput').val() || 100;
  console.log("This is my max " + maxInput);
  var generatedNumber = generateRandomNum(minInput, maxInput);
  console.log(generatedNumber);
  displayNum(userInput);
  compareNumber(userInput, generatedNumber);
  clearInputFields();
}

function generateRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearInputFields() {
  console.log("I've been cleared.");
  $('input').val("");
}

function compareNumber(userNum, ranNum) {
  userNum = parseInt(userNum);
  ranNum = parseInt(ranNum);
  console.log("userNum" + typeof(userNum));
  console.log("ranNum" + typeof(ranNum));
  if (userNum > ranNum) {
    $('#bottom-text').text("That is too high!");
  }
  else if (userNum < ranNum) {
    $('#bottom-text').text("That is too low!");
  }
  else if (userNum === ranNum) {
    $('#bottom-text').append("<style> p {color: #ed458b; margin-bottom: 20px; margin-top: -20px; height: 40px;}</style><p>Boom! Winner!</p>");
  }
  else if (isNaN(userNum)) {
    $('#bottom-text').append("<style> p {color: red; margin-bottom: 20px; margin-top: -20px; height: 40px;}</style><p>!!!That is not a number. Try again!!!</p>");
  }
}

function resetPage() {
  window.location.reload();
}

 function displayNum(numToBeDisplayed) {
   $('#number-guessed').text(numToBeDisplayed);
 }
