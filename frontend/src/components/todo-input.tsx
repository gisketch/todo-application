import { Separator } from "@radix-ui/react-separator"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from "./ui/input-group"
import { CalendarIcon, PencilIcon } from "lucide-react"

interface TodoInputProps {
    input: string
    onChangeInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onTodoAdd: () => void
}

const TodoInput = ({ input, onChangeInput, onTodoAdd }: TodoInputProps) => {
    return (
        <InputGroup>
            <InputGroupTextarea placeholder="What do you wanna do?" value={input} onChange={onChangeInput} />
            <InputGroupAddon align="block-end">
                <InputGroupButton
                    variant="outline"
                    className="rounded-full"
                    size="icon-xs"
                >
                    <CalendarIcon />
                </InputGroupButton>
                <InputGroupText className="ml-auto">X tasks</InputGroupText>
                <Separator orientation="vertical" className="h-4!" />
                <InputGroupButton
                    variant="default"
                    className="rounded-full"
                    size="icon-xs"
                    onClick={onTodoAdd}
                    disabled={!input}
                >
                    <PencilIcon />
                    <span className="sr-only">Send</span>
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default TodoInput
