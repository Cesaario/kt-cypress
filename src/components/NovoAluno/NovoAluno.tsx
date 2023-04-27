import { useState } from "react";
import "./NovoAluno.css";
import { criarAluno } from "../../api/alunoService";

const NovoAluno = (props: {
  setUltimaAtualizacao: (timestamp: number) => void;
}) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState<number | undefined>();

  const criarNovoAluno = async () => {
    await criarAluno(nome, idade || 0);
    props.setUltimaAtualizacao(new Date().getTime());
  };

  return (
    <div className="novoAlunoContainer">
      <input
        type="text"
        className="form-control"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        className="form-control"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(Number(e.target.value))}
      />
      <button
        disabled={!nome || !idade}
        onClick={criarNovoAluno}
        className="btn btn-success btn-block w-50"
      >
        Novo aluno
      </button>
    </div>
  );
};

export default NovoAluno;
