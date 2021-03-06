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
    <div className="h-screen bg-purple-900 flex justify-center items-center">
      <TaskListContextProvider>
        <div className="bg-purple-500 overflow-y-auto rounded   h-4/6 py-3 px-14 lg:px-7 sm:px-10 md:px-12 shadow-xl">
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
