import { Todo } from "@/data/todos";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { MoreHorizontal } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
}

const priorityStyles = {
  low: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
};

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <Card className={cn("transition-all", todo.completed && "bg-muted/50")}>
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="flex items-start gap-4">
          <Checkbox
            id={`todo-${todo.id}`}
            checked={todo.completed}
            className="mt-1"
          />
          <div className="grid gap-1.5">
            <CardTitle className={cn("text-lg", todo.completed && "line-through text-muted-foreground")}>
              {todo.text}
            </CardTitle>
            <CardDescription className={cn(todo.completed && "line-through text-muted-foreground/80")}>
              {todo.description}
            </CardDescription>
          </div>
        </div>
        <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={cn(priorityStyles[todo.priority])}>
            {todo.priority}
          </Badge>
          {todo.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Due: {format(todo.dueDate, "MMM d, yyyy")}
        </p>
      </CardFooter>
    </Card>
  );
}