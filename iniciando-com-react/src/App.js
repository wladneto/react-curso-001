import React from 'react';


class App extends React.Component{
  
  state = {
    nome : 'Wlad Neto'
  }

  render(){
    return(
    <h1> Hello {this.state.nome} Class </h1>
    )
  }
}


export default App;
