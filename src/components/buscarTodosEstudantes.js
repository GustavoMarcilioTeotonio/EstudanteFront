import React, { useState, useEffect } from 'react';
import EstudanteService from '../EstudanteService';
import { Link } from 'react-router-dom';

const BuscarTodosEstudantes = () => {
    const [estudantes, setEstudantes] = useState([]);

    useEffect(() => {
        EstudanteService.buscarTodosEstudantes().then((res) => {
            setEstudantes(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Estudante List</h2>
            <div className="row">
                <Link to="/add-estudante" className="btn btn-primary">Add Estudante</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Estudante Nome</th>
                        <th>Estudante Matricula</th>
                        <th>Estudante Numero</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {estudantes.map(estudante => (
                        <tr key={estudante.id}>
                            <td>{estudante.nome}</td>
                            <td>{estudante.matricula}</td>
                            <td>{estudante.numero}</td>
                            <td>
                                <Link to={`/update-estudante/${estudante.id}`} className="btn btn-info">Update</Link>
                                <button className="btn btn-danger" onClick={() => EstudanteService.deletarEstudante(estudante.id).then(() => setEstudantes(estudantes.filter(p => p.id !== estudante.id)))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BuscarTodosEstudantes;