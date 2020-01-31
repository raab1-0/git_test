alert('Welcome');

grabButton = document.getElementById('butt');

grabButton.onclick = function () {
  gettxt = document.getElementById('newTxt');
  console.log(gettxt);
  gettxt.innerHTML = "<h1> Bye </h1>";
}

console.log(grabButton);