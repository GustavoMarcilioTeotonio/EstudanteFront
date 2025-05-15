import React, { useState, useEffect } from 'react';
import EstudanteService from '../EstudanteService';
import { useNavigate, useParams } from 'react-router-dom';

const atualizarEstudante = () => {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [numero, setNumero] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        ProductService.buscarEstudantePorId(id).then((res) => {
            const estudante = res.data;
            setNome(estudante.nome);
            setMatricula(estudante.matricula);
            setNumero(estudante.numero);
        });
    }, [id]);

    const updateEstudante = (e) => {
        e.preventDefault();
        const estudante = { nome, matricula, numero };
        EstudanteService.updateEstudante(estudante, id).then(() => {
            navigate('/estudantes');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update estudante</h3>
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
                                <button className="btn btn-success" onClick={updateEstudante}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default atualizarEstudante;