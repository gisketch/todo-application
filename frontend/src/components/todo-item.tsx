import { TrashIcon } from "lucide-react"
import type { Todo } from "../services/api"
import { Button } from "./ui/button"
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
            <Button variant="destructive" onClick={() => onDelete(todo.id)} size="icon-sm"><TrashIcon /></Button>
        </div>
    )
}

export default TodoItem
