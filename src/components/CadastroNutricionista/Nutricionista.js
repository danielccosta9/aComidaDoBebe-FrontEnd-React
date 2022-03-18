import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './Nutri.css'

export default function Nutricionista() {
    const url = "http://localhost:8080/nutricionista";
    const [formValue, setformValue] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        nascimento: "",
        crn: ""
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get(url)
        .then(json => setData(json.data))
    }, [])
    console.log(data);

    function submit(event) {
        event.preventDefault();
        Axios.post(url, {
            nome: formValue.nome,
            sobrenome: formValue.sobrenome,
            email: formValue.email,
            senha: formValue.senha,
            nascimento: formValue.nascimento,
            crn: formValue.crn
        })
        .then(response =>{
            console.log(response)
            setformValue({
                nome: "",
                sobrenome: "",
                email: "",
                senha: "",
                nascimento: "",
                crn: ""
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
        return data?.map(nutricionist => {
            return (
                <tr key={nutricionist.id}>
                    <td>{nutricionist.id}</td>
                    <td>{nutricionist.crn}</td>
                </tr>
                )
            }
        )
    }

    return (
        <div>
            <form onSubmit={(event) => submit(event)} >
                <div className='form-group top grid-container grid-item'>
                    <label>Nome</label>
                    <input onChange={(event) => handleChange(event)}
                    id='nome' name='nome' type='text' className='form-control' 
                    value={formValue.nome} placeholder='Nome do usuário' />

                    <label>Sobrenome</label>
                    <input onChange={(event) => handleChange(event)}
                    id='sobrenome' name='sobrenome' type='text' className='form-control' 
                    value={formValue.sobrenome} placeholder='Sobrenome' />      
                </div>

                <div className='form-group top grid-container grid-item'>
                <label>Data de nascimento</label>
                    <input onChange={(event) => handleChange(event)}
                    id='nascimento' name='nascimento' type='date' className='form-control'
                    value={formValue.nascimento}  />


                    <label>CRN</label>
                    <input onChange={(event) => handleChange(event)}
                    id='crn' name='crn' type='text' className='form-control'
                    value={formValue.crn}  />
                </div>

                <div className='form-group top grid-container grid-item'>
                    <label>E-mail</label>
                        <input onChange={(event) => handleChange(event)}
                        id='email' name='email' type='email' className='form-control' 
                        value={formValue.email} placeholder='E-mail' />

                        <label>Senha</label>
                            <input onChange={(event) => handleChange(event)}
                            id='senha' name='senha' type='password' className='form-control' 
                            value={formValue.senha} placeholder='Digite sua senha' />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block top">Cadastrar</button>
            </form>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="row">Id</th>
                        <th scope="row">CRN</th>
                        </tr>
                    </thead>
                    <tbody>{renderTable()}</tbody>
                </table>    
            </div>
        </div>
    )
}