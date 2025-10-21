import { useEffect, useState } from "react"
import { ThemeProvider } from "./components/theme-provider"
import TodoInput from "./components/todo-input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import TodoItem from "./components/todo-item"
import { todoApi, type Todo } from "./services/api"
import { Toaster } from "./components/ui/sonner"
import { toast } from "sonner"

const App = () => {
    const [todoInput, setTodoInput] = useState("");
    const [deadline, setDeadline] = useState<Date | undefined>(undefined);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch todos on mount
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            setIsFetching(true);
            const data = await todoApi.getAllTodos();
            setTodos(data);
        } catch (error) {
            toast.error(
                "Failed to fetch todos. Please refresh the page.",
            );
            console.error("Error fetching todos:", error);
        } finally {
            setIsFetching(false);
        }
    };

    const handleAddTodo = async () => {
        if (!todoInput.trim()) return;

        try {
            setIsLoading(true);
            const newTodo = await todoApi.createTodo({
                task: todoInput,
                deadline: deadline?.toISOString(),
            });

            //update after successful call
            setTodos([newTodo, ...todos]);
            setTodoInput("");
            setDeadline(undefined);

            toast.success(
                "Todo added successfully"
            );
        } catch (error) {
            toast.error(
                "Failed to add todo. Please try again."
            );
            console.error("Error adding todo:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // optimistic update
    const handleToggleComplete = async (id: string) => {
        const originalTodos = [...todos];
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted, completedAt: !todo.isCompleted ? new Date().toISOString() : null }
                : todo
        ));

        try {
            const updatedTodo = await todoApi.toggleTodoComplete(id);
            // update with data from server
            setTodos(todos.map(todo =>
                todo.id === id ? updatedTodo : todo
            ));
        } catch (error) {
            setTodos(originalTodos);
            toast.error(
                "Failed to update todo. Please try again.",
            );
            console.error("Error toggling todo:", error);
        }
    };

    // optimistic update
    const handleDeleteTodo = async (id: string) => {
        const originalTodos = [...todos];
        setTodos(todos.filter(todo => todo.id !== id));

        try {
            await todoApi.deleteTodo(id);
            toast.success(
                "Todo deleted successfully",
            );
        } catch (error) {
            // Rollback on error
            setTodos(originalTodos);
            toast.error(
                "Failed to delete todo. Please try again."
            );
            console.error("Error deleting todo:", error);
        }
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTodoInput(e.target.value);
    }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="todo-theme">
            <div className="flex flex-col items-center py-12 min-h-screen gap-8">
                <div className="flex flex-col items-center justify-center gap-1">
                    <h1 className="text-2xl font-bold">Todo-List Frontend</h1>
                    <p className="text-xl">Glenn Jimenez</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[480px] gap-4">
                    <TodoInput onChangeInput={handleChangeInput} input={todoInput} onTodoAdd={handleAddTodo} deadline={deadline} onDeadlineChange={setDeadline} />
                    <Card className="w-[480px]">
                        <CardHeader>
                            <CardTitle>Tasks</CardTitle>
                            <CardDescription>{todos.length} task(s)</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            {todos.length > 0 ? todos.map((todo) => (
                                <TodoItem todo={todo} key={todo.id} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTodo} />
                            )) : <p className="text-muted-foreground">No tasks found.</p>}
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Toaster />
        </ThemeProvider>
    )
}

export default App
