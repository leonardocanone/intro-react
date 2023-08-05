import "./App.css"

function App() {
  const name = "Leo Cannone"

  const olaMundo = () => {
    alert("Olá, React!")
  }

  return (
    <>
    <button className="meu-nome" onClick={olaMundo}>Clique em min, {name}</button>
    </>
  );
}

export default App;


