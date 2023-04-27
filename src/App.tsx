import { useState } from "react";
import "./App.css";
import Alunos from "./components/Alunos/Alunos";
import NovoAluno from "./components/NovoAluno/NovoAluno";

function App() {
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState(0);

  return (
    <div className="appContainer">
      <h1>Escola :)</h1>
      <NovoAluno setUltimaAtualizacao={setUltimaAtualizacao} />
      <Alunos
        ultimaAtualizacao={ultimaAtualizacao}
        setUltimaAtualizacao={setUltimaAtualizacao}
      />
    </div>
  );
}

export default App;
