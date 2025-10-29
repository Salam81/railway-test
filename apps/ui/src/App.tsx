import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { CheckIcon, XIcon } from "lucide-react";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { api } from "./lib/api";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-svh flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Railway Test</h1>
        <Todos />
      </div>
    </QueryClientProvider>
  );
}

function Todos() {
  const { data, error } = useQuery({
    queryKey: ["todos"],
    retry: false,
    queryFn: async () => {
      const { data, error } = await api.todos.get();
      return error ? Promise.reject(error.value) : data;
    },
  });

  return (
    <div className="flex flex-col gap-2">
      {error && <div className="text-red-500">{error.message}</div>}
      {data?.map((todo) => (
        <Item key={todo.id} variant="outline" size="sm">
          <ItemMedia>
            {todo.completed ? <CheckIcon className="size-5" /> : <XIcon className="size-5" />}
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{todo.title}</ItemTitle>
          </ItemContent>
        </Item>
      ))}
    </div>
  );
}
export default App;
