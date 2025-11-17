let pokemon_nomes = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise']

let pokemon_imgs = [
    'pokemon001.jpg',
    'pokemon002.jpg',
    'pokemon003.jpg',
    'pokemon004.jpg',
    'pokemon005.jpg',
    'pokemon006.jpg',
    'pokemon007.jpg',
    'pokemon008.jpg',
    'pokemon009.jpg'
]

let indice = 0

document.getElementById("pokemon_foto").src = "./img/" + pokemon_imgs[indice]
document.getElementById("pokemon_nome").innerText = pokemon_nomes[indice]
document.getElementById("pokemon_numero").innerText = (indice + 1)