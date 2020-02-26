import React from 'react';


function App (props) {

  const modificarNome = event => {
    console.log(event.target.value)

  }

  const criaComboBox = () => {
    const opcoes = ["Fulano", "Cicrano", "Beltrano"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>) //percorre as opções e retorna uma option p/ cada
    
    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  


    const MeuComboBox = () => criaComboBox()

    return(
      <React.Fragment>
        <input type="text" value={props.nome} onChange={modificarNome} /> 

        <h1> Hello {props.nome}</h1>
        <h2>{props.nome} - {props.versao}</h2>
        <MeuComboBox />

      </React.Fragment>
    )
  }



export default App;
