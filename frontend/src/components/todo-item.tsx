import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

interface TodoItemProps { }

const TodoItem = (props: TodoItemProps) => {
    return (
        <div className="flex items-center gap-3">
            <Checkbox />
            <Label>Todo List Item</Label>
        </div>
    )
}

export default TodoItem
