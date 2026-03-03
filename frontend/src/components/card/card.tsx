import './card.css'

interface CardProps {
    titulo: string,
    descricao: string,
    concluido: boolean
}

export function Card({titulo, descricao, concluido}: CardProps) {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p><b>Descrição da task:</b>{descricao}</p>
        <p>{concluido ? "Concluído" : "Não concluído"}</p>
    </div>
  )
}