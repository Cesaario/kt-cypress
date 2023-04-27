import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

let proximoId = 3;

app.use(cors());
app.use(express.json());

let DB_ALUNOS = [
  { id: 1, nome: "João", idade: 10, dataMatricula: new Date("2023-04-20") },
  { id: 2, nome: "Maria", idade: 12, dataMatricula: new Date("2023-04-02") },
];

app.get("/", (req, res) => {
  res.send(DB_ALUNOS);
});

app.post("/", (req, res) => {
  DB_ALUNOS = [...DB_ALUNOS, { ...req.body, id: proximoId++ }];
  res.status(201).send();
});

app.delete("/:id", (req, res) => {
  DB_ALUNOS = DB_ALUNOS.filter((aluno) => aluno.id !== Number(req.params.id));
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
