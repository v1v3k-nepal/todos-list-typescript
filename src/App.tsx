import "./App.css";
import TodoList from "./components/TodoList";
import ReduxProvider from "./redux/Provider";

function App() {
  return (
    <ReduxProvider>
      <div className="bg-blue-200">
        <TodoList />
      </div>
    </ReduxProvider>
  );
}

export default App;
