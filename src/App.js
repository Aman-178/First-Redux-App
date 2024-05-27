// App.js
import './App.css'; // Import your CSS file where you will use Tailwind CSS
import Counter from './Component/Counter';

function App() {
  return (
    <div className="container mx-auto">
      <header className="bg-blue-500 text-white text-center p-3">Counter App</header>
      <Counter />
    </div>
  );
}

export default App;
