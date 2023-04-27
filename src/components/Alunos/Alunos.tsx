import { useEffect, useState } from "react";
import IAluno from "../../types/IAluno";
import Aluno from "../Aluno/Aluno";
import "./Alunos.css";
import { deletarAluno, obterAlunos } from "../../api/alunoService";

const Alunos = (props: {
  ultimaAtualizacao: number;
  setUltimaAtualizacao: (timestamp: number) => void;
}) => {
  const [alunos, setAlunos] = useState<IAluno[]>([]);

  useEffect(() => {
    const carregarAlunos = async () => {
      const { data } = await obterAlunos();
      const alunosTratados: IAluno[] = data.map((dado: any) => ({
        nome: dado.nome,
        id: dado.id,
        idade: dado.idade,
        dataMatricula: new Date(dado.dataMatricula),
      }));
      setAlunos(alunosTratados);
    };
    carregarAlunos();
  }, [props.ultimaAtualizacao]);

  const deletarAlunoExistente = async (id: number) => {
    console.log("A");
    await deletarAluno(id);
    console.log("B");
    props.setUltimaAtualizacao(new Date().getTime());
    console.log("C");
  };

  return (
    <div className="alunosContainer">
      {alunos.map((aluno) => (
        <div key={aluno.id}>
          <Aluno aluno={aluno} deletarAluno={deletarAlunoExistente} />
        </div>
      ))}
    </div>
  );
};

export default Alunos;
