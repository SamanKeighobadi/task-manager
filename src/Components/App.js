import TaskListContextProvider from "../context/TaskListContext";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const App = () => {
  return (
    <TaskListContextProvider>
      <TaskForm />
      <TaskList />
    </TaskListContextProvider>
  );
};

export default App;
