import React from "react";
import axios from "axios";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const headers = {
  headers: {
    Authorization: "carlos-azeredo-molina"
  }
};

export default class App extends React.Component {
  state = {
    playlists: [],
    inputPlaylist: ""
  };

  componentDidMount() {
    this.pegarPlaylists();
  }

  mudaInputPlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value });
  };

  pegarPlaylists = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Playlist cadastrada com sucesso!");
        this.setState({ inputPlaylist: "" });
        this.pegarPlaylists();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    const componentesPlaylist = this.state.playlists.map((play) => {
      return <li key={play.id}>{play.name}</li>;
    });

 
    return (
      <div>
        <h1>Lista de Playlists</h1>
        <input
          value={this.state.inputPlaylist}
          onChange={this.mudaInputPlaylist}
        />
        <button onClick={this.criarPlaylist}>Enviar</button>
        {componentesPlaylist}
      </div>
    );
  }
}
