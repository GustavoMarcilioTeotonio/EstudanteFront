import React, { useState, useEffect } from 'react';
import EstudanteService from '../EstudanteService';
import { useNavigate, useParams } from 'react-router-dom';

const AtualizarEstudante = () => {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [numero, setNumero] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        EstudanteService.buscarEstudantePorId(id).then((res) => {
            const estudante = res.data;
            setNome(estudante.nome);
            setMatricula(estudante.matricula);
            setNumero(estudante.numero);
        });
    }, [id]);

    const atualizarEstudante = (e) => {
        e.preventDefault();
        const estudante = {id, nome, matricula, numero };
        EstudanteService.atualizarEstudante(estudante).then(() => {
            navigate('/estudantes');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">atualizarEstudante </h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Estudante Nome: </label>
                                    <input placeholder="Nome" name="Nome" className="form-control"
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
                                <button className="btn btn-success" onClick={atualizarEstudante}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtualizarEstudante;