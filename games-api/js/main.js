import { getAllGames } from "./service";

var URL = "http://localhost:3000/jogos"
http://localhost:3000/jogos
window.onload = () => {
    getAllGames();
    loadGames();
};

const loadGames = () => {
    const dayaContainer = document.getElementById('data-container');
    getAllGames().then(resp => {
        resp.forEach(game =>{
            const gameElement = document.createElement('div');
            gamesElement.innerHTML = `<strong></strong>` 
        })
    })
}


const createGame = () => {
    const jogoTeste = {
        "nome": "The legend of Zelda",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 100
    };
    fetch('http://localhost:3000/jogos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogoTeste)
    })
        .then(response => response.json())
        .then(data => console.log('sucesso: ', data))
        .catch((error) => console.log('Erro: ', error));

};

const deleteGame = () => {
    const game =  {
        nome: "The legend of Zelda",
        img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        preco: 100,
        id: 3
      };
    fetch(URL+`/${game.id}`, { method: 'DELETE'})
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
};



const updateGame = ()=>{
    const game = {
    nome: "The legend of Zelda 2",
      img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
      preco: 300,
      id: 3
    };
    fetch(URL+`/${game.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'Application/json'},
        body: JSON.stringify(game)
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
}
