const displayCatFacts = () => {
const baseURL = 'https://cat-fact.herokuapp.com/facts'
    fetch(baseURL)
        .then(res => res.json())
        .then(json => {
            console.log(json)
        var x = json.map(cat => {
            console.log(cat.text)
        }) 
    })
}
    
let onClickButton = document.getElementById('testing-onclick')
onClickButton.onclick = displayCatFacts

// append