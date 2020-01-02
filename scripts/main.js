//Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/poule.jpg'){
    myImage.setAttribute('src','images/phoenix.jpg');
  }else{
    myImage.setAttribute('src','images/poule.jpg');
  }
}

// Personalized welcome message

let myButton =document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null){
    setUserName();
  }else{
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

/*Initilisation Code*/
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
