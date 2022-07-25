import "./App.scss";
import AppRouter from "./Router/AppRouter";
function App() {
  return (
    <div className="App bg-gradient-to-r from-cyan-500 to-blue-500 h-screen overflow-y-auto">
      <AppRouter />
    </div>
  );
}

export default App;
