import "./App.css";
const getTitle = (title) => title;


function App() {
  return (
    <div className="App">
      <h1>Greetings Fellow {getTitle('Morons')}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
