let pokemon_nomes = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise']

let pokemon_imgs = [
    'pokemon001.gif',
    'pokemon002.gif',
    'pokemon003.gif',
    'pokemon004.gif',
    'pokemon005.gif',
    'pokemon006.gif',
    'pokemon007.gif',
    'pokemon008.gif',
    'pokemon009.gif'
]

let indice = 0

document.getElementById("pokemon_foto").src = "./img/" + pokemon_imgs[indice]
document.getElementById("pokemon_nome").innerText = pokemon_nomes[indice]
document.getElementById("pokemon_numero").innerText = (indice + 1)

function fnPesquisarNumero(){
    let pokemon_procurado = document.getElementById("pokemon_procurado").value
    document.getElementById("pokemon_foto").src = "./img/" + pokemon_imgs[pokemon_procurado - 1]
    document.getElementById("pokemon_nome").innerText = pokemon_nomes[pokemon_procurado - 1]
    document.getElementById("pokemon_numero").innerText = (pokemon_procurado)
}

function fnPrev(){
        if(indice >= 1){
        indice = indice - 1
        document.getElementById("pokemon_foto").src = "./img/" + pokemon_imgs[indice]
        document.getElementById("pokemon_nome").innerText = pokemon_nomes[indice]
        document.getElementById("pokemon_numero").innerText = (indice + 1)
    }
}

function fnNext(){
        if(indice < pokemon_nomes.length - 1){
        indice = indice + 1
        document.getElementById("pokemon_foto").src = "./img/" + pokemon_imgs[indice]
        document.getElementById("pokemon_nome").innerText = pokemon_nomes[indice]
        document.getElementById("pokemon_numero").innerText = (indice + 1)
    }
}