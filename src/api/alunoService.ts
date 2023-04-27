import axios from "axios";

const API_URL = "http://localhost:3000";

export const obterAlunos = async () => {
  return await axios.get(API_URL);
};

export const criarAluno = async (nome: string, idade: number) => {
  return await axios.post(API_URL, { nome, idade, dataMatricula: new Date() });
};

export const deletarAluno = async (id: number) => {
  return await axios.delete(`${API_URL}/${id}`);
};
