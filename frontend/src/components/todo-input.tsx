import { Separator } from "@radix-ui/react-separator"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from "./ui/input-group"
import { CalendarIcon, PencilIcon } from "lucide-react"
import { DatePicker } from "./date-picker"
import { format } from "date-fns"

interface TodoInputProps {
    input: string
    onChangeInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onTodoAdd: () => void
    deadline?: Date
    onDeadlineChange: (date: Date | undefined) => void
    isLoading?: boolean
}

const TodoInput = ({ input, onChangeInput, onTodoAdd, deadline, onDeadlineChange, isLoading }: TodoInputProps) => {
    return (
        <InputGroup>
            <InputGroupTextarea placeholder="What do you wanna do?" value={input} onChange={onChangeInput} />
            <InputGroupAddon align="block-end">
                <DatePicker date={deadline} onDateChange={onDeadlineChange}>
                    <InputGroupButton variant="outline" className="rounded-full" size="icon-xs">
                        <CalendarIcon />
                    </InputGroupButton>
                </DatePicker>
                <InputGroupText className="ml-auto">{deadline ? format(deadline, "MMM d, yyyy") : "No deadline"}</InputGroupText>
                <Separator orientation="vertical" className="h-4!" />
                <InputGroupButton
                    variant="default"
                    className="rounded-full"
                    size="icon-xs"
                    onClick={onTodoAdd}
                    disabled={!input || isLoading}
                >
                    <PencilIcon />
                    <span className="sr-only">Send</span>
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default TodoInput
