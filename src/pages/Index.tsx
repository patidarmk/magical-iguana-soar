import { useState } from "react";
import { todos as initialTodos, Todo } from "@/data/todos";
import { AddTodoDialog } from "@/components/AddTodoDialog";
import { TodoItem } from "@/components/TodoItem";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Tasks</h1>
          <p className="text-muted-foreground">
            Here's what you need to get done.
          </p>
        </div>
        <AddTodoDialog />
      </div>

      <Tabs defaultValue="active">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="active">Active ({activeTodos.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedTodos.length})</TabsTrigger>
          <TabsTrigger value="all">All ({todos.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <div className="space-y-4 mt-4">
            {activeTodos.length > 0 ? (
              activeTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
            ) : (
              <Card className="flex flex-col items-center justify-center py-12">
                <CardHeader>
                  <CardTitle>All clear!</CardTitle>
                  <CardDescription>You have no active tasks. Enjoy your day!</CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="space-y-4 mt-4">
            {completedTodos.length > 0 ? (
              completedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
            ) : (
              <Card className="flex flex-col items-center justify-center py-12">
                <CardHeader>
                  <CardTitle>Nothing completed yet</CardTitle>
                  <CardDescription>Get to work and start checking things off!</CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
        </TabsContent>
        <TabsContent value="all">
          <div className="space-y-4 mt-4">
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;