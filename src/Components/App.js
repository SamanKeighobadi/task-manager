// Context
import TaskListContextProvider from "../context/TaskListContext";
// Custom Components
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Header from "./Header";
// Toastify
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="h-screen bg-indigo-900 flex justify-center items-center">
      <TaskListContextProvider>
        <div className="bg-indigo-400 overflow-y-auto rounded max-w-lg h-4/6 py-3 px-7 shadow-xl">
          <Header />
          <TaskForm />
          <TaskList />
          {/* React Toastify */}
          <ToastContainer />
        </div>
      </TaskListContextProvider>
    </div>
  );
};

export default App;
