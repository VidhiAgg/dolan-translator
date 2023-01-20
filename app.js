//handling input fields
var translateButton = document.querySelector('#btn-translate');
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
outputDiv.style.display = "none";
//url to access the API
var translatorUrl = "https://api.funtranslations.com/translate/dolan.json";

function getCompleteURL(inputData) {
    return translatorUrl + "?text=" + inputData;

}
//defining error message
function errorHandler(error) {
    console.log("Error occured: ", error);
    alert("Something wrong with the server. Please try after an hour.")
}
function clickHandler() {
    var inputData = txtInput.value;

    outputDiv.style.display = "block";

    fetch(getCompleteURL(inputData))
        .then(response => response.json())
        .then(translatedText => {
            outputDiv.innerText = translatedText.contents.translated;
        }) .catch(errorHandler);
}

translateButton.addEventListener("click", clickHandler);