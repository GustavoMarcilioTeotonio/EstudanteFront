import axios from 'axios';

const ESTUDANTE_API_BASE_URL = 'http://localhost:8080/api/estudantes';


class EstudanteService {


    buscarTodosEstudantes() {
        return axios.get(ESTUDANTE_API_BASE_URL);
    }

    salvarEstudante(estudante) {
        return axios.post(ESTUDANTE_API_BASE_URL, estudante);
    }

    buscarEstudantePorId(estudanteId) {
        return axios.get(`${ESTUDANTE_API_BASE_URL}/${estudanteId}`);
    }

    atualizarEstudante(estudante, estudanteId) {
        return axios.put(`${ESTUDANTE_API_BASE_URL}/${estudanteId}`, estudante);
    }

    deletarEstudante(estudanteId) {
        return axios.delete(`${ESTUDANTE_API_BASE_URL}/${estudanteId}`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EstudanteService();