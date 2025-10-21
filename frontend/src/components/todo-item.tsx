import { TrashIcon } from "lucide-react"
import type { Todo } from "../services/api"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { format } from "date-fns"
import { cn } from "../lib/utils"

interface TodoItemProps {
    todo: Todo
    onToggleComplete: (id: string) => void
    onDelete: (id: string) => void
}

const TodoItem = ({ todo, onToggleComplete, onDelete }: TodoItemProps) => {
    const isPastDue =
        todo.deadline && new Date(todo.deadline) < new Date() && !todo.isCompleted

    const formattedDeadline = todo.deadline
        ? format(new Date(todo.deadline), "MMM d, yyyy")
        : null

    return (
        <div className="flex flex-row justify-between">
            <div className="flex items-center gap-3">
                <Checkbox onCheckedChange={() => onToggleComplete(todo.id)} checked={todo.isCompleted} />
                <Label className={todo.isCompleted ? "line-through text-muted-foreground" : ""}>{todo.task}</Label>
                {formattedDeadline && (
                    <Label
                        className={cn(
                            "font-normal",
                            "text-sm",
                            isPastDue
                                ? "text-red-400 font-normal"
                                : "text-muted-foreground"
                        )}
                    >
                        {isPastDue ? `Due ${formattedDeadline}` : formattedDeadline}
                    </Label>
                )}
            </div>
            <Button variant="destructive" onClick={() => onDelete(todo.id)} size="icon-sm"><TrashIcon /></Button>
        </div>
    )
}

export default TodoItem
