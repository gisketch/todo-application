import { Separator } from "@radix-ui/react-separator"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from "./ui/input-group"
import { CalendarIcon, PencilIcon } from "lucide-react"

type TodoInputProps = {}

const TodoInput = (props: TodoInputProps) => {
    return (
        <InputGroup>
            <InputGroupTextarea placeholder="What do you wanna do?" />
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
                >
                    <PencilIcon />
                    <span className="sr-only">Send</span>
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default TodoInput
