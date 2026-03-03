import { useState } from "react";
import { useTaskDataMutate } from "../../../hooks/useTaskDataMutate";
import type { TaskData } from "../../../interface/TaskData";
import "./modal.css";

interface InputProps {
    label: string;
    value: string | number | boolean;
    updateValue(value: any): void;
}

const Input = ({label, value, updateValue}: InputProps) => {
    if (typeof value === "boolean") {
        return (
            <>
                <label>{label}</label>
                <input checked={value} onChange={event => updateValue(event.target.checked)}></input>
            </>
        )
    }
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [concluido, setConcluido] = useState(false);
    const [project_id, setProjectId] = useState(0);
    const { mutate }= useTaskDataMutate();

    const submit = () => {
        const taskData: TaskData = {
            titulo, 
            descricao,
            concluido, 
            project_id
        }
        mutate(taskData)
    }

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Criar nova tarefa</h2>
                <form>
                    <Input label="titulo" value={titulo} updateValue={setTitulo}></Input>
                    <Input label="descricao" value={descricao} updateValue={setDescricao}></Input>
                    <Input label="concluido" value={concluido} updateValue={setConcluido}></Input>
                    <Input label="project_id" value={project_id} updateValue={setProjectId}></Input>
                    <button onClick={submit} className="btn-secondary">Criar</button>
                </form>
            </div>
        </div>
    )
}