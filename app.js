
const charArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!', '@', '#', '$', '%', '&', '/', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let charLength = document.getElementById("length");
let generateBtn = document.getElementById("generateBtn");
let passOne = document.getElementById("passOne");
let passTwo = document.getElementById("passTwo");
let passThree = document.getElementById("passThree");
let passFour = document.getElementById("passFour");

// Generates random password based on user input.
function randomPass() {
    let passLength = charLength.value;
    let generateRandom = [];
    for (let i = 0; i < passLength; i++) {
        let num = Math.floor(Math.random() * charArray.length);
        let random = charArray[num];
        // console.log(random); //test if the random generator works
        generateRandom.push(random);
      }

      return generateRandom.toString().replace(/,/g, "");
};

// Passing the random generated passwords to password fields.
generateBtn.addEventListener('click', function() {
    passwordSets();}
    );

    function passwordSets() {
        passOne.textContent = `${randomPass()}`;
        passTwo.textContent = `${randomPass()}`;
        passThree.textContent = `${randomPass()}`;
        passFour.textContent = `${randomPass()}`;
    }

randomPass();
// console.log(randomPass());

function copyPass(copyText)
  {
      navigator.clipboard.writeText(copyText);
  }