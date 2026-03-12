import "./projCard.css";

interface ProjCardProps {
  nome: string;
  descricao: string;
  created_at: string;
}

export function ProjCard({ nome, descricao, created_at }: ProjCardProps) {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>
        <b>Descrição da task: </b>
      </p>
      <p className="description">{descricao}</p>
      <p>{created_at}</p>
    </div>
  );
}
