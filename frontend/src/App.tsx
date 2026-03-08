import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home/home.tsx'; 
import About from './pages/about/about.tsx';
import Task from './pages/tasks/tasks.tsx';
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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tasks' element={<Task />} />
      </Routes>
    </BrowserRouter>
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
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Criar nova tarefa</button>
      </div>
    </>
  )
}

export default App
