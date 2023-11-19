import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <div className="container mx-auto p-4">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
