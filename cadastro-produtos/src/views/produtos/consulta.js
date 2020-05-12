import React from 'react'
import ProdutoService from '../../app/produtoService'
import {withRouter} from 'react-router-dom'

class ConsultaProdutos extends React.Component{
    state={
        produtos:[]
    }

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({produtos:produtos})
    }

    preparaEditar = (sku) =>{
        console.log('SKU para edição: ', sku)
        this.props.history.push(`/cadastro-produtos/${sku}`)
    }

    deletar = (sku) => {
        const produtos = this.service.deletar(sku)
        this.setState({produtos})
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
                                this.state.produtos.map( (produto, index) => {
                                    return(
                                        <tr key={index}>
                                            <th>{produto.nome}</th>
                                            <th>{produto.sku}</th>
                                            <th>{produto.preco}</th>
                                            <th>{produto.fornecedor}</th>
                                            <th> 
                                                <button className="btn btn-primary"
                                                        onClick={()=>this.preparaEditar(produto.sku)}>Editar</button>
                                                <button className="btn btn-danger"
                                                        onClick={()=>this.deletar(produto.sku)}>Excluir</button>
                                            </th>
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

export default withRouter(ConsultaProdutos)
