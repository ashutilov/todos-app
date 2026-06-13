import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <main className="mx-auto flex min-h-screen max-w-2xl flex-col p-8">
        <Card>
          <CardHeader>
            <CardTitle>Todos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <NewTodo />
            <Todos />
          </CardContent>
        </Card>
      </main>
    </TodosContextProvider>
  );
}

export default App;
