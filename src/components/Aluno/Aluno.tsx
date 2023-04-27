import IAluno from "../../types/IAluno";
import "./Aluno.css";

const Aluno = (props: {
  aluno: IAluno;
  deletarAluno: (id: number) => void;
}) => {
  const { aluno } = props;

  return (
    <div className="card alunoContainer">
      <h6>{aluno.nome}</h6>
      <div>
        <p>Idade: {aluno.idade}</p>
        <p>Matrícula: {aluno.dataMatricula.toLocaleDateString()}</p>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => props.deletarAluno(aluno.id)}
      >
        Excluir
      </button>
    </div>
  );
};

export default Aluno;
