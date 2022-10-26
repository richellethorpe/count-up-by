// Business Logic

function countNumbers (countTo, countBy) {
//  checkForBlanks(countTo, countBy);
  const resultArray = [];
  for (let i = 0; i <= countTo; i += countBy) {
    resultArray.push(i);
  }
  return resultArray;
}

function checkForBlanks(countTo, countBy) {
  if ((countBy <= 0) || (countTo <= 0)) {
    return null;
  }
  else if ((countBy ===NaN) || (countTo === NaN)) {
    return null;
  }
};

// UI Logic

function getResult(event) {
  event.preventDefault();

  const countToInput = document.getElementById("countToInput").value;
  const countByInput = document.getElementById("countByInput").value; 
  const div =  document.querySelector("div#result");
  const result = countNumbers(parseInt(countToInput), parseInt(countByInput));
  const p1 = document.createElement ("p");
  div.append(p1)
  p1.innerText = result.join(", ");

  
  // document.getElementById("resultOutput").innertext = result;
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);
});
