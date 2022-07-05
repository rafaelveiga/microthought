import Header from "./components/Header";
import MicroList from "./components/MicroList";

function App() {
  return (
    <div className="App bg-gray-100">
      <Header />
      <div className="container px-6 py-6 mx-auto">
        <h2 className="text-2xl font-extrabold text-gray-800">My Micros</h2>

        <MicroList />
      </div>
    </div>
  );
}

export default App;
