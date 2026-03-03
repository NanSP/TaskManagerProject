import './App.css'
import { useTaskData } from './hooks/useTaskData';
import { Card } from './components/card/card';
import { useState } from 'react';
import { CreateModal } from './components/card/create-modal/create-modal';

function App() {

  const {data} = useTaskData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <>
      <div className="container">
        <h1>Task Manager</h1>
        <div className="task-grid">
            {data?.map(taskData => 
              <Card
                titulo={taskData.titulo}
                descricao={taskData.descricao}
                concluido={taskData.concluido}
              />
            )}
        </div>
        {isModalOpen && <CreateModal/>}
        <button onClick={handleOpenModal}>Criar nova tarefa</button>
      </div>
    </>
  )
}

export default App
