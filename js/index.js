$(document).ready(function () {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
        "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
        "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
        "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
        "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
        "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

  const defaultPasswordLength = 15;

  function generatePasswordElements() {
    const isLowerCase = $("#inlineCheckbox1").is(":checked");
    const isUpperCase = $("#inlineCheckbox2").is(":checked");
    const isNumbers = $("#inlineCheckbox3").is(":checked");
    const isSymbols = $("#inlineCheckbox4").is(":checked");

    const passwordElements = [];

    for (let i = 0; i < characters.length; i++) {
        if (!isUpperCase && i >= 0 && i <= 25)
            continue;
        if (!isLowerCase && i >= 26 && i <= 51)
            continue;
        if (!isNumbers && i >= 52 && i <= 61)
            continue;
        if (!isSymbols && i >= 62 && i <= 90)
            continue;

        passwordElements.push(characters[i]);
    }

    return passwordElements;
  }

  function generatePassword(passwordLength) {
    const passwordArray = [];
    const passwordElements = generatePasswordElements();

    for (let i = 0; i < passwordLength; i++) {
      passwordArray.push(
        passwordElements[Math.floor(Math.random() * passwordElements.length)]
      );
    }

    return passwordArray.join("");
  }

  function controlLength(passwordLength) {
    if (passwordLength > 30) {
      alert("Your password can contain 30 characters at maximum!");
      return false;
    } else if (passwordLength < 8) {
        alert("Your password can contain at least 8 characters!");
        return false;
    }
    else if (isNaN(passwordLength)) {
      return "default";
    } else {
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

    const controlResult = controlLength(passwordLength);

    if (!controlResult) {
      return;
    }

    if (controlResult == "default") {
      passwordLength = defaultPasswordLength;
    }

    renderPassword(passwordLength);
    clearResult();
  });

  $("#btn-cont").find("button").css("transition", "transform 0.3s ease-in-out");
  $("#btn-cont").hover(
    function () {
      $(this).find("button").css("transform", "scale(1.2)");
    },
    function () {
      $(this).find("button").css("transform", "scale(1)");
    }
  );

  $(".pwd").hover(function () {
    $(this).css("cursor", "pointer");
  });

  $(".pwd").click(function () {
    const copyTextAttr = $(this).attr("id");

    const copyText = $(`#${copyTextAttr}`);

    copyText.select();

    navigator.clipboard.writeText($(copyText).text());

    renderResult();
  });

  function renderResult() {
    if ($(".pwd").text() == "") {
      return;
    }

    const resultEl = $("#result");

    resultEl.text("Copied!");
  }

  function clearResult() {
    const resultEl = $("#result");

    resultEl.text("");
  }
});
