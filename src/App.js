import Main from "./components/Main"

const tasks = [];

function App() {
  return (
    <div>
      <h1>Personal Todo List</h1>
      <Main data={tasks} />
    </div>
  );
}

export default App;
