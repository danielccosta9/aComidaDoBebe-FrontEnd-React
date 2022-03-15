import React from "react";
import {Table} from 'react-bootstrap';

class Alimentos extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            alimentos : []
        }
    }


    componentDidMount(){
        fetch("")
            .then(resposta => resposta.json())
            .then(dados =>{
                this.setState({ alimentos : dados})
            })
    }

    // componentWillUnmount(){}


    
    render(){
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descricao</th>
                        <th>Opcoes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.alimentos.map((alimentos)=>
                            <tr>
                                <td>{alimentos.nome}</td>
                                <td>{alimentos.descricao}</td>
                                <td>Atualizar / Excluir</td>
                            </tr>
                        ) 
                    }
                </tbody>

            </Table>
        )
    }
}

export default Alimentos;