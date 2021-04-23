const displayCatFacts = () => {
const baseURL = 'https://cat-fact.herokuapp.com/facts'
    fetch(baseURL)
        .then(res => res.json())
        .then(json => {
            console.log(json)
        displayResults(json)
    })
}
    
let onClickButton = document.getElementById('testing-onclick')
onClickButton.onclick = displayCatFacts
function displayResults(json) {
    document.getElementById("fact1").innerHTML = json[0].text
    document.getElementById("fact2").innerHTML = json[1].text
    document.getElementById("fact3").innerHTML = json[2].text
    document.getElementById("fact4").innerHTML = json[3].text
    document.getElementById("fact5").innerHTML = json[4].text
}
