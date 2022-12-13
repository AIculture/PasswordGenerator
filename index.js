const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
passwordLength = 8

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random()* characters.length)
    return characters[randomChar]
}

function getRandomPassword() {
let randomPassword = ""
    for (let i=0; i< passwordLength; i++){
        randomPassword += getRandomCharacter()
    }
    return randomPassword
    }

function displayPassword(){
    password1El.textContent = getRandomPassword()
    password2El.textContent = getRandomPassword()
    
}


