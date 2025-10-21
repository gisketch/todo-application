import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

interface DatePickerProps {
  date?: Date
  onDateChange: (date: Date | undefined) => void
  children?: React.ReactNode
}

export function DatePicker({ date, onDateChange, children }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children ? (
          children
        ) : (
          <button
            type="button"
            className="flex w-[280px] justify-start text-left font-normal border rounded-md px-3 py-2"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={onDateChange} />
      </PopoverContent>
    </Popover>
  )
}
