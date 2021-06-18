
import React from "react";
import axios from "axios";
import styled from 'styled-components'

const Container=styled.div`
background-color:#bbbb;
color:blueviolet;
  display: grid;
  grid-template-columns: 1 3fr;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin-top: 5%;
  margin-right: 40%;
  margin-left: 40%;

    
`

export default class App extends React.Component {

  state = {
    missions: []
  }
  componentDidMount() {
    this.getMissions();
  }

  getMissions = () => {
    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then((res) => {
        console.log(res.data);
        this.setState({missions: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const missionsList = this.state.missions.map((mission) => {
      return (
        <div key={mission.mission_id}>
        <Container>
          <p>Nome: {mission.mission_name}</p>
          <p>Fabricantes: {mission.manufacturers.map((manufacturer) => <p>{manufacturer}</p>)}
          </p>
          <a href={mission.wikipedia}>Link para Wikipédia</a>
          <hr/>
          </Container>
        </div>
        
      )
    })
    return (
      <div className="App">
        <h1>Missões da SpaceX</h1>
        {missionsList}
      </div>
    );
  }
}
