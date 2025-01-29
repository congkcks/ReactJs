
import './App.css'
import './index.css'
import TodoApp from './Todo/ToDoApp';
function App() {

  const items = ["Học JavaScript", "Học React", "Xây dựng ứng dụng"];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Danh sách công việc</h1>
      <TodoApp></TodoApp>
    </div>
  );
}

export default App
