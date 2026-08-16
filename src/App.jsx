import Navbar from "./sections/navBar/navBar";
import Inicio from "./sections/Inicio/inicio";
import SobreMi from "./sections/sobreMi/sobreMi";
import Experiencias from "./sections/Experiencias/experiencias"
import Recorridos from "./sections/Experiencias/Recorridos/recorridos"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Inicio />
        <SobreMi />
        <Experiencias />
        <Recorridos />
      </main>
    </>
  );
}

export default App;