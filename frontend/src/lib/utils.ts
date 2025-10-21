import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Todo } from "../services/api"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortTodos(todos: Todo[]): Todo[] {
  return [...todos].sort((a, b) => {
    // incomplete first
    if (a.isCompleted !== b.isCompleted) {
      return a.isCompleted ? 1 : -1
    }

    // in incomplete > ones with deadlines first
    const aHasDeadline = !!a.deadline
    const bHasDeadline = !!b.deadline

    if (aHasDeadline && !bHasDeadline) return -1
    if (!aHasDeadline && bHasDeadline) return 1

    // if3️⃣both have deadlines > soonest first
    if (aHasDeadline && bHasDeadline) {
      const aTime = new Date(a.deadline!).getTime()
      const bTime = new Date(b.deadline!).getTime()
      if (aTime !== bTime) return aTime - bTime
    }

    // if no deadlines > sort by creation
    const aCreated = new Date(a.createdAt).getTime()
    const bCreated = new Date(b.createdAt).getTime()
    return bCreated - aCreated
  })
}
