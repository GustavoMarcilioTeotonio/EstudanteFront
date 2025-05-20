import React, { useState } from 'react';
import EstudanteService from '../EstudanteService';
import { useNavigate } from 'react-router-dom';

const SalvarEstudante = () => {
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [numero, setNumero] = useState('');
    const navigate = useNavigate();

    const saveEstudante = (e) => {
        e.preventDefault();
        const estudante = { nome, matricula, numero };
        EstudanteService.salvarEstudante(estudante).then(() => {
            navigate('/estudantes');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Product</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Estudante Name: </label>
                                    <input placeholder="Nome" name="nome" className="form-control"
                                           value={nome} onChange={(e) => setNome(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Estudante Matricula: </label>
                                    <input placeholder="Matricula" name="Matricula" className="form-control"
                                           value={matricula} onChange={(e) => setMatricula(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Estudante Numero: </label>
                                    <input placeholder="Numero" name="Numero" className="form-control"
                                           value={numero} onChange={(e) => setNumero(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveEstudante}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalvarEstudante;