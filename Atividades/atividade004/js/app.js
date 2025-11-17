let filmes = ['filme01.jpg', 'filme02.jpg', 'filme03.jpg', 'filme04.jpg', 'filme05.jpg', 'filme06.jpg']

let contador = 0
while (contador < 6){
    document.write("<img src='./img/" + filmes[contador] + "'>")
    contador = contador + 1
}