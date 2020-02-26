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

  criaComboBox = () => {
    const opcoes = ["Fulano", "Cicrano", "Beltrano"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>) //percorre as opções e retorna uma option p/ cada
    
    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render(){
    const MeuComboBox = () => this.criaComboBox()

    return(
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} /> 

        <h1> Hello {this.state.nome}</h1>
        <h2>{this.props.nome} - {this.props.versao}</h2>
        <MeuComboBox />

      </React.Fragment>
    )
  }
}


export default App;
