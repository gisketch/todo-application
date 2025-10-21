import type { Todo } from "../services/api"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

interface TodoItemProps {
    todo: Todo
    onToggleComplete: (id: string) => void
    onDelete: (id: string) => void
}

const TodoItem = ({ todo, onToggleComplete, onDelete }: TodoItemProps) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex items-center gap-3">
                <Checkbox onClick={() => onToggleComplete(todo.id)} checked={todo.isCompleted} />
                <Label>{todo.task}</Label>
            </div>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    )
}

export default TodoItem
