import TaskListContextProvider from "../context/TaskListContext";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Header from "./Header";
const App = () => {
  return (
    <div className='h-screen bg-blue-200 flex justify-center items-center'>
      <TaskListContextProvider>
        <div className="bg-purple-500 rounded max-w-lg h-4/6 py-3 px-7 shadow-xl">
          <Header />
          <TaskForm />
          <TaskList />
        </div>
      </TaskListContextProvider>
    </div>
  );
};

export default App;
