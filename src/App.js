

function App() {
  const name = 'Leinad';
  const x = false;

  return (
    <div className="container">
      <h1>Hello from React!</h1>
      <h2>Hello {name}</h2>
      <h2>x is {(x)?'true':'false'}</h2>
    </div>
  );
}

export default App;
