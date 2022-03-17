import React, {useState} from 'react';
import Axios from 'axios';

export default function Usuario() {
    const url = "http://localhost:8080/usuario";
    const [formValue, setformValue] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        nascimento: ""
    });

    function submit(event) {
        event.preventDefault();
        Axios.post(url, {
            nome: formValue.nome,
            sobrenome: formValue.sobrenome,
            email: formValue.email,
            senha: formValue.senha,
            nascimento: formValue.nascimento
        })
        .then(response =>{
            console.log(response.formValue)
            setformValue({
                nome: "",
                sobrenome: "",
                email: "",
                senha: "",
                nascimento: ""
            });
        })
    }

    function handleChange(event) {
        const newdata = { ...formValue };
        newdata[event.target.id] = event.target.value;
        setformValue(newdata);
        console.log(newdata);
    }

    return (
        <form onSubmit={(event) => submit(event)}>
            <div className='form-group'>
                <label>Nome</label>
                <input onChange={(event) => handleChange(event)}
                id='nome' name='nome' type='text' className='form-control' 
                value={formValue.nome} placeholder='Nome do usuário' />
            </div>

            <div className='form-group'>
                <label>Sobrenome</label>
                <input onChange={(event) => handleChange(event)}
                id='sobrenome' name='sobrenome' type='text' className='form-control' 
                value={formValue.sobrenome} placeholder='Sobrenome' />
            </div>

            <div className='form-group'>
                <label>E-mail</label>
                <input onChange={(event) => handleChange(event)}
                id='email' name='email' type='email' className='form-control' 
                value={formValue.email} placeholder='E-mail' />
            </div>

            <div className='form-group'>
                <label>Senha</label>
                <input onChange={(event) => handleChange(event)}
                id='senha' name='senha' type='password' className='form-control' 
                value={formValue.senha} placeholder='Digite sua senha' />
            </div>

            <div className='form-group'>
                <label>Data de nascimento</label>
                <input onChange={(event) => handleChange(event)}
                id='nascimento' name='nascimento' type='date' className='form-control'
                value={formValue.nascimento}  />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Cadastrar</button>
        </form>
    )
}