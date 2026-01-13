import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>Package Manager</h1>
      <p>Frontend by kik3.h base (React + Vite) listo para desarrollo soberinc :D</p>
    </main>
  );
}

export default App;
