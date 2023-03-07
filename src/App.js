import Entries from "./Entries";
import "./styles.css";
import { TodoProvider } from "./Todo-context";
import AddTodo from "./AddTodo";

export default function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <Entries />
    </TodoProvider>
  );
}
