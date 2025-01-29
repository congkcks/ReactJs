
import './App.css'
import './index.css'
import ToList from './Todo/TodoNew.JSx';
function App() {

  const items = ["Học JavaScript", "Học React", "Xây dựng ứng dụng"];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Danh sách công việc</h1>
      <ToList items={items} />
    </div>
  );
}

export default App
