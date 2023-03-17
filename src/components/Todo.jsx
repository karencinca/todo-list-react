import './Todo.css'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className="todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
            <div>
                <FaPencilAlt onClick={() => editTodo(task.id)} />
                <FaTrash onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}