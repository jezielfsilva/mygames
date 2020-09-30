import React, { Component } from 'react';
import './App.css';

import photo1 from './assets/screens/Forza Horizon.jpeg';
import photo2 from './assets/screens/Rise of the Tomb.jpeg';
import photo3 from './assets/screens/Shadow of the Tomb.jpeg';
import photo4 from './assets/screens/Star Citizen.jpg';
import photo5 from './assets/screens/Hell Let Lose.jpg';
import photo6 from './assets/screens/Post Scriptum.jpg';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      games: [
        {
          title: "Forza Horizon 4",
          developer: "Playground Games",
          published: "Microsoft Studios",
          text: "Estações dinâmicas mudam tudo no maior festival automotivo do mundo. Participe sozinho ou junte os amigos para explorar a linda e histórica Grã-Bretanha num mundo aberto compartilhado. Colete, modifique e pilote mais de 450 carros. Corra, faça proeza, crie e explore. Escolha seu caminho para se tornar um superastro do Horizon.",
          image: photo1
        },
        {
          title: "Rise of the Tomb Raider",
          developer: "Crystal Dynamics",
          published: "Microsoft Studios",
          text: "Rise of the Tomb Raider é um jogo de acção-aventura numa perspectiva de terceira pessoa, com muitos dos elementos encontrados em Tomb Raider (2013). Os jogadores controlam Lara Croft através de vários ambientes, lutando contra inimigos e completando puzzles e secções de plataformas, enquanto usam armas improvisadas e engenhocas para conseguirem progredir na história.",
          image: photo2
        },
        {
          title: "Shadow of the Tomb Raider",
          developer: "Eidos Montréal/Crystal Dynamics",
          published: "Square Enix",
          text: "A história se passa após os eventos de Rise of the Tomb Raider. A protagonista Lara Croft é arqueóloga em uma expedição à América Latina em busca de uma relíquia maia que tenha ligação com seu falecido pai.A Trindade (em inglês: Trinity), uma organização paramilitar dedicada a investigar o sobrenatural, busca a relíquia para remodelar o mundo.Durante a expedição, Lara mergulha mais uma vez em perigo, tentando salvar o mundo contra o apocalipse maia.",
          image: photo3
        },
        {
          title: "Star Citizen",
          developer: " Cloud Imperium Games/Foundry 42",
          published: "Roberts Space Industries",
          text: "Star Citizen pretende combinar vários gêneros de jogos, incluindo comercio espacial, simulador de combate e elementos FPS(first-person shooter, ou tiro em primeira pessoa), em um jogo multi-jogador massivo online.O Combate espacial em Star Citizen utiliza um modelo de física Newtoniana para criar escolhas táticas para o jogador.Jogadores irão completar objetivos para ganhar a moeda usada para comprar, reparar e aprimorar suas naves ou para comprar itens usados no comércio.",
          image: photo4
        },
        {
          title: "Hell Let Loose",
          developer: "Black Matter",
          published: "Team17",
          text: "O jogo se passa durante a Segunda Guerra Mundial e roda no Unreal Engine 4.As partidas acontecem como batalhas de 100 jogadores entre duas equipes, cada uma consistindo em várias unidades menores de até seis jogadores.",
          image: photo5
        },
        {
          title: "Post Scriptum - The Bloody Seventh",
          developer: "Periscope Games",
          published: "Offworld Industries",
          text: "Post Scriptum é um jogo de simulação da 2ª Guerra Mundial, com foco na precisão histórica, batalhas em grande escala, uma curva de aprendizado difícil e uma necessidade intensa de coesão, comunicação e trabalho em equipe.",
          image: photo6
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-title">Games que quero jogar</h1>
        <div className="box-exhibition">
          {this.state.games.map((game) => (
            <div className="box-game">
              <img className="photo-game" src={game.image} alt="" />
              <h2 className="title-photo">{game.title}</h2>
              <p className="text-game">desenvolvido pela {game.developer}</p>
              <p className="text-game2">distribuido por {game.published}</p>
              <p className="text-game3">{game.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
