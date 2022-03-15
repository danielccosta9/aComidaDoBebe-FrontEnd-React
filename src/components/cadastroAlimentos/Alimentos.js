import React, {useState} from 'react';
import Axios from 'axios';

function Alimentos() {
    const url = "http://localhost:8080/ingrediente";
    const [formValue, setData] = useState({
        nome: "",
        grupo_nutricional: ""
    });

    function submit(event){
        event.preventDefault();
        Axios.post(url, {
            nome: formValue.nome,
            grupo_nutricional: formValue.grupo_nutricional
        })
        .then(response =>{
            console.log(response.formValue)
        })
    }

    function handleChange(event) {
        const newdata = { ...formValue };
        newdata[event.target.id] = event.target.value;
        setData(newdata);
        console.log(newdata);
    }
    return (
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
    );
}

export default Alimentos;

// const Alimentos= () => {

//     const [formValue, setformValue] = React.useState({
//         nome: '',
//         grupo_nutricional: ''
//     });
    
//     const handleSubmit = async() => {
//         const ingredienteFormData = new FormData();
//         ingredienteFormData.append("nome", formValue.nome)
//         ingredienteFormData.append("grupo_nutricional", formValue.grupo_nutricional)
      
//         try {
//           const response = await axios({
//             method: "post",
//             url: "localhost:8080/ingrediente",
//             data: ingredienteFormData,
//             headers: { "Content-Type": "multipart/form-data" },
//           });
//         } catch(error) {
//           console.log(error)
//         }
//       }
      
    
//     const handleChange = (event) => {
//         setformValue({
//             ...formValue, 
//             [event.target.name]: event.target.value
//         });
//     }

//     return (
//         <>
//         <form onSubmit={handleSubmit}>

//             <div className="form-group">
//                 <label>Nome</label>
//                 <input id="nome" name="nome" type="text" className="form-control" 
//                 value={formValue.nome} placeholder="Nome do alimento" 
//                 onChange={handleChange}/>
//             </div>

//             <div className="form-group">
//                 <label>Grupo nutricional</label>
//                 <input id="grupo_nutricional" name="grupo_nutricional" type="text" className="form-control" 
//                 value={formValue.grupo_nutricional} placeholder="Grupo nutricional" 
//                 onChange={handleChange}/>
//             </div>

//             <button type="submit" className="btn btn-dark btn-lg btn-block">Cadastrar</button>
//         </form>
//         </>);
// }

// export default Alimentos;