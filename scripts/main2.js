const myHeading = document.querySelector('h1');
myHeading.textContent = 'helloWorld';

let myImage = document.querySelector('img');

myImage.oncliclk = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png'){
    myImage.setAttribute('src', 'images/firefox2.png');
  }
}
