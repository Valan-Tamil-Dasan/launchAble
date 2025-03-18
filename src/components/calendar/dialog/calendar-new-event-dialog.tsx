import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useCalendarContext } from '../calendar-context'
import { format } from 'date-fns'
import { DateTimePicker } from '@/components/form/date-time-picker'
import { useEffect } from 'react'
import { ColorPicker } from '@/components/form/color-picker'

const formSchema = z
  .object({
    title: z.string().min(1, 'Title is required'),
    start: z.string().datetime(),
    end: z.string().datetime(),
    color: z.string(),
     type: z.enum(["Online Assessment", "Meet", "Other"], {
      errorMap: () => ({ message: "Invalid type selected" }),
    }),
  })
  .refine(
    (data) => {
      const start = new Date(data.start)
      const end = new Date(data.end)
      return end >= start
    },
    {
      message: 'End time must be after start time',
      path: ['end'],
    }
  )

export default function CalendarNewEventDialog() {
  const { newEventDialogOpen, setNewEventDialogOpen, date, events, setEvents } =
    useCalendarContext()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      start: format(date, "yyyy-MM-dd'T'HH:mm"),
      end: format(date, "yyyy-MM-dd'T'HH:mm"),
      color: 'pink',
      type: 'Other', // Default type
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const newEvent = {
      // need to create an ID
      id: crypto.randomUUID(),
      title: values.title,
      start: new Date(values.start),
      end: new Date(values.end),
      color: values.color,
      type: values.type,
    }

    setEvents([...events, newEvent])
    setNewEventDialogOpen(false)
    form.reset()
  }

const type = form.watch("type"); // Watch the type field

useEffect(() => {
  if (type === "Meet") {
    form.setValue("color", "blue");
  } else if (type === "Online Assessment") {
    form.setValue("color", "emerald");
  } else {
    form.setValue("color", "pink");
  }
}, [type, form]);

  return (
    <Dialog open={newEventDialogOpen} onOpenChange={setNewEventDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create event</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Event title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="start"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Start</FormLabel>
                  <FormControl>
                    <DateTimePicker field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="end"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">End</FormLabel>
                  <FormControl>
                    <DateTimePicker field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Online Assessment">Online Assessment</SelectItem>
                        <SelectItem value="Meet">Meet</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*

            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Color</FormLabel>
                  <FormControl>
                    <ColorPicker field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

              */}

            <div className="flex justify-end">
              <Button type="submit">Create event</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
