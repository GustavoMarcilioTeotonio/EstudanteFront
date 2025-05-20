import React, { useEffect } from 'react';
import EstudanteService from '../EstudanteService';
import { useNavigate, useParams } from 'react-router-dom';

const DeletarEstudante = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        EstudanteService.deletarEstudante(id).then(() => {
            navigate('/estudantes');
        }).catch((error) => {
            console.error("Erro ao deletar estudante:", error);
        });
    }, [id, navigate]);

    return (
        <div>
            <h3 className="text-center">Deletando estudante...</h3>
        </div>
    );
};

export default DeletarEstudante;
