$(document).ready(function () {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
        "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
        "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
        "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
        "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
        "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

    const defaultPasswordLength = 15;

    function generatePassword(passwordLength) {

        const passwordArray = [];

        for (let i = 0; i < passwordLength; i++) {
            passwordArray.push(characters[Math.floor(Math.random() * characters.length)]);
        }
        
        return passwordArray.join("");
    }

    function controlLength(passwordLength) {
        if (passwordLength > 30) {
            alert("Your password can contain 30 characters at maximum!");
            return false;
        } else if (passwordLength == NaN) {
            passwordLength = defaultPasswordLength;
            return true;
        }
    }

    function renderPassword(passwordLength) {
        $("#pwd1").text(generatePassword(passwordLength));
        $("#pwd2").text(generatePassword(passwordLength));
    }

    $("#btn").click(function (e) {
        let passwordLength = $("#input").val();
        passwordLength = parseInt(passwordLength);

        const renderCondition = controlLength(passwordLength);

        if (!renderCondition) {
            return;
        }

        renderPassword(passwordLength);
    });
});