import TaskListContextProvider from "../context/TaskListContext";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Header from "./Header";
const App = () => {
  return (
    <TaskListContextProvider>
      <Header />
      <TaskForm />
      <TaskList />
    </TaskListContextProvider>
  );
};

export default App;
