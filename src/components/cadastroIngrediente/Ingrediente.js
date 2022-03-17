import React, {useState, useEffect} from 'react';
import Axios from 'axios';

export default function Ingrediente(){

    const url = "http://localhost:8080/ingrediente";
    const [formValue, setformValue] = useState({
        nome: "",
        grupo_nutricional: ""
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get(url)
        .then(json => setData(json.data))
    }, [])
    console.log(data);

    function submit(event){
        event.preventDefault();
        Axios.post(url, {
            nome: formValue.nome,
            grupo_nutricional: formValue.grupo_nutricional
        })
        .then(response =>{
            console.log(response)
            setformValue({
                nome: "",
                grupo_nutricional: ""
            });
        })
    }

    function handleChange(event) {
        const newdata = { ...formValue };
        newdata[event.target.id] = event.target.value;
        setformValue(newdata);
        console.log(newdata);
    }

    const renderTable = () => {
        return data?.map(infrediente => {
            return (
                <tr key={infrediente.id}>
                    <td>{infrediente.nome}</td>
                    <td>{infrediente.grupo_nutricional}</td>
                </tr>
                )
            }
        )
    }
    
    return (
        <>
        <div>
            <form onSubmit={(event) => submit(event)}> 
                <div className="form-group">
                    <label>Nome</label>
                    <input onChange={(event) => handleChange(event)}
                    id="nome" name="nome" type="text" className="form-control" 
                    value={formValue.nome} placeholder="Nome do alimento"/>
                </div>
                
                <div className="form-group">
                    <label>Grupo nutricional</label>
                    <input onChange={(event) => handleChange(event)}
                    id="grupo_nutricional" name="grupo_nutricional" type="text" className="form-control" 
                    value={formValue.grupo_nutricional} placeholder="Grupo nutricional"/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Cadastrar</button>
            </form>
        </div>

        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="row">Nome</th>
                    <th scope="row">Grupo Nutricional</th>
                    </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
            </table>
        </div>
        </>
    );
}