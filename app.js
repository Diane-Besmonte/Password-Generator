
const charArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!', '@', '#', '$', '%', '&', '/', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let charLength = document.getElementById("length");
let generateBtn = document.getElementById("generateBtn");
let passOne = document.getElementById("passOne");
let passTwo = document.getElementById("passTwo");
let passThree = document.getElementById("passThree");
let passFour = document.getElementById("passFour");
let passwordBtn = document.getElementsByClassName("password-btn");
let copiedText = document.getElementById("copied");

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

// Input number value exceeds notification
  charLength.addEventListener('blur', (event) => {
    const number = Math.floor(event.target.value)
  
    if (number >= 8 && number <= 16) {
      passwordLength = number;
    } else {
      alert("Password length must be between 8 and 16 characters.")
    }

    event.target.value = passwordLength
  });

// Passing the random generated passwords to password fields.
generateBtn.addEventListener('click', function() {
    passwordSets();
});

    function passwordSets() {
        passOne.textContent = `${randomPass()}`;
        passTwo.textContent = `${randomPass()}`;
        passThree.textContent = `${randomPass()}`;
        passFour.textContent = `${randomPass()}`;
    }

randomPass();

// Copy text to clipboard
function copyPass(copyText)
  {
    navigator.clipboard.writeText(copyText);

    setTimeout(() => {
        // alert("Password Copied!");
        copiedText.style.display = "block";
    }, "500");

    setTimeout(() => {
        // alert("Password Copied!");
        copiedText.style.display = "none";
    }, "1000");

  }
