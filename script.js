const displayCatFacts = () => {
const baseURL = 'https://cat-fact.herokuapp.com/facts'
console.log('Hello World!')
    fetch(baseURL)
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
    var text = [] 
    for(let i=0; i<text.length; i++){
        console.log(text)
    }
}

    
let onClickButton = document.getElementById('testing-onclick')
onClickButton.onclick = displayCatFacts

// const displayCat = () => {
//     const wrapper = document.getElementById('facts')
//     let fact = res.results[0].text
//     console.log(fact)
// }

// use "map" or forEach 