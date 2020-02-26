import React from 'react';


class App extends React.Component{
  
  state = {
    nome : 'Digite seu nome'
  }

  modificarNome = (event) => {
    let newNome = event.target.value;
    this.setState({
      nome: newNome
    })
  }

  render(){
    return(
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} /> 

        <h1> Hello {this.state.nome} Class </h1>

      </React.Fragment>
    )
  }
}


export default App;
