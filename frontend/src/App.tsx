import './App.css'
import { useTaskData } from './hooks/useTaskData';
import { Card } from './components/card/card';

function App() {

  
  const {data} = useTaskData();
  return (
    <>
      <div className="conteine">
        <h1>Task Manager</h1>
        <div className="task-list">
            {data?.map(taskData => 
              <Card
                titulo={taskData.titulo}
                descricao={taskData.descricao}
                concluido={taskData.concluido}
              />
            )}
        </div>
      </div>
    </>
  )
}

export default App
