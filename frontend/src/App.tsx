import { useState } from "react"
import { ThemeProvider } from "./components/theme-provider"
import TodoInput from "./components/todo-input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import TodoItem from "./components/todo-item"

const App = () => {
    const [todoInput, setTodoInput] = useState("");

    const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTodoInput(e.target.value);
    }

    const handleAddTodo = () => {
        // call API
    }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="todo-theme">
            <div className="flex flex-col items-center justify-center min-h-screen gap-8">
                <div className="flex flex-col items-center justify-center gap-1">
                    <h1 className="text-2xl font-bold">Todo-List Frontend</h1>
                    <p className="text-xl">Glenn Jimenez</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[480px] gap-4">
                    <TodoInput onChangeInput={handleChangeInput} input={todoInput} onTodoAdd={handleAddTodo} />
                    <Card className="w-[480px]">
                        <CardHeader>
                            <CardTitle>Tasks</CardTitle>
                            <CardDescription>X tasks</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                            <TodoItem />
                            <TodoItem />
                            <TodoItem />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
