const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*(){}[]><?/=|";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword()
{
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length)
    {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

const generate = document.getElementById('generate');
generate.addEventListener("click", createPassword);

function copyPassword() {
    if (!passwordBox.value) {
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy password. Please try again."));
}

const copy = document.getElementById(copy);
copy.addEventListener("click", copyPassword);

