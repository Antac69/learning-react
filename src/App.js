import Comentarios from './components/Comentarios'

function App() {
  const sujeto={
    nombre:'Juanito',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
  return (
    <div className="container mt-5">
      <h1>Componentes</h1>
      <Comentarios sujeto={sujeto}></Comentarios>
    </div>
  );
}

export default App;