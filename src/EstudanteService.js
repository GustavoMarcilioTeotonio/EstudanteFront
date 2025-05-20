import axios from 'axios';

const ESTUDANTE_API_BASE_URL = "http://localhost:8080/api/estudantes";


class EstudanteService {


    buscarTodosEstudantes() {
        return axios.get(ESTUDANTE_API_BASE_URL);
    }

    salvarEstudante(estudante) {
        return axios.post(ESTUDANTE_API_BASE_URL, estudante);
    }

    buscarEstudantePorId(id) {
        return axios.get(`${ESTUDANTE_API_BASE_URL}/${id}`);
    }

    atualizarEstudante(estudante) {
        return axios.put(ESTUDANTE_API_BASE_URL, estudante); // Use PUT para atualizar
    }

    deletarEstudante(id) {
        return axios.delete(`${ESTUDANTE_API_BASE_URL}/${id}`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EstudanteService();