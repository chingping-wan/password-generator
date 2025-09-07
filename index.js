const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

console.log(characters[3])


// when  the "generate passwords" button is clicked, we call the function to generate two sets of passwords
// each password has 15 characters randomly selected from the "characters" array
// we then display the generated passwords in the output fields, one in the left, and 
// one in the right
// when click the "generate passwords" button again, the generated passwords will be
// replaced by two new passwords


// button id="generatePassword"
// input id="pass-1"
// input id="pass-2"

// Grab DOM elements
const generateBtn = document.getElementById("generatePassword");
const pass1Field = document.getElementById("pass-1");
const pass2Field = document.getElementById("pass-2");

// Function to generate a random password
function generatePassword(length = 15) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Click event listener
generateBtn.addEventListener("click", () => {
  pass1Field.value = generatePassword();
  pass2Field.value = generatePassword();
});


// ---------- COPY FEATURE WITH BUTTONS ----------

// NEW: helper function for copy
function copyPassword(inputEl, btnEl) { // NEW
  inputEl.select();                     // NEW
  inputEl.setSelectionRange(0, inputEl.value.length); // NEW
  document.execCommand("copy");         // NEW
  inputEl.blur();                       // NEW

  // visual feedback
  const originalLabel = btnEl.textContent; // NEW
  btnEl.textContent = "Copied!";  // NEW
  btnEl.classList.add("copied");        // NEW
  
  setTimeout(() => {
    btnEl.classList.remove("copied");
    btnEl.textContent = originalLabel; // NEW
  }, 1200); // NEW
} // NEW

// NEW: attach to copy buttons (assumes you add <button> with ids below)
const copyBtn1 = document.getElementById("copy-1"); // NEW
const copyBtn2 = document.getElementById("copy-2"); // NEW

copyBtn1.addEventListener("click", () => copyPassword(pass1Field, copyBtn1)); // NEW
copyBtn2.addEventListener("click", () => copyPassword(pass2Field, copyBtn2)); // NEW
