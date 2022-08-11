let inputText = document.querySelector('#inputText')
let button = document.querySelector('#translateButton')
let outputText = document.querySelector('#outputText')

let url = 'https://api.funtranslations.com/translate/minion.json'

function translationalUrl(text){
    return url + '?' + 'text=' + text
}

button.addEventListener('click', clickHandler)

function errorHandler(error){
    console.log(error)
    alert('something went wrong.please try again after sometimes')
}


function clickHandler(){
    fetch(translationalUrl(inputText.value))
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        var translatedText = json.contents.translated
        outputText.innerHTML = translatedText
    })
    .catch(errorHandler)
}