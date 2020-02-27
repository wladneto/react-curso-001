import React from 'react'

export default class ConsultaProdutos extends React.Component{
    state={
        produtos:[]
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Lista de Produtos
                </div>
                <div className="card-body">
                    <table className = "table table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>SKU</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map( produto => {
                                    return(
                                        <tr>
                                            <th>{produto.nome}</th>
                                            <th>{produto.sku}</th>
                                            <th>{produto.preco}</th>
                                            <th>{produto.fornecedor}</th>
                                            <th></th>
                                        </tr>
                                    )
                                })
                            
                            }
                        </tbody>
                    </table>
                </div> 
            </div>
        )
    }

}
