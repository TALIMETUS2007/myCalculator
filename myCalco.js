//Declaration des variables

const buttons = document.querySelectorAll('.boutonNormaux')
const screen = document.querySelector('input')
const erase = document.querySelector('.erase')
const clearScreen = document.querySelector('.clear-screen')
const solve = document.querySelector('.solve')
const memory = document.querySelector('.memory')
const selectFormula = document.querySelector('.select-formula')


let tab = []
let resultats = []
//Ecouteurs

buttons.forEach((button) => {
    button.addEventListener('click',insertNumber)
})

erase.addEventListener('click',effacer)
clearScreen.addEventListener('click',clearscreen)
solve.addEventListener('click',resoudre)
memory.addEventListener('click',memoire)
selectFormula.addEventListener('input',geometricFormulas)

//Fonctions

function insertNumber(event) {
    tab.push(event.target.value)
    console.log(tab);
    screen.value = tab.join('')

}

function effacer(e) {
   tab.pop()
   screen.value = tab.join('')
   console.log(tab);
}

function clearscreen(e) {
    tab = []
   screen.value = tab
}

function resoudre() {
    try{
        let operations = tab.join('')
        screen.value = eval(operations)
        tab = [eval(operations)]
        resultats.push(eval(operations))
        let resultatJSON = JSON.stringify(resultats)
        sessionStorage.setItem('resultats',resultatJSON)
    } catch(e) {
        alert('Syntax ERROR')
    }
}

function memoire () {
    let previousResponse = JSON.parse(sessionStorage.getItem('resultats'))
    let donneesMemoire = previousResponse[previousResponse.length-1]
    tab = [donneesMemoire]
    screen.value = donneesMemoire
}

function geometricFormulas(e) {
    formule = e.target.value
    switch(formule) {
        case 'cos':
            tab = [Math.cos(screen.value)]
            screen.value =  Math.cos(screen.value);
            break;
        case 'sin':
            tab = [Math.sin(screen.value)]
            screen.value =  Math.sin(screen.value);
            break;
        case 'tan':
            tab = [Math.tan(screen.value)]
            screen.value =  Math.tan(screen.value);
            break;
        
    }
}
