import { ThemeProvider } from "./components/theme-provider"
import TodoInput from "./components/todo-input"

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="todo-theme">
            <div className="flex flex-col items-center justify-center min-h-screen gap-8">
                <div className="flex flex-col items-center justify-center gap-1">
                    <h1 className="text-2xl font-bold">Todo-List Frontend</h1>
                    <p className="text-xl">Glenn Jimenez</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[480px]">
                    <TodoInput />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
