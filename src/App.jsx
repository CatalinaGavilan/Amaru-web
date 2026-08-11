import Navbar from "./sections/navBar/navBar";
import Inicio from "./sections/Inicio/inicio";
import SobreMi from "./sections/sobreMi/sobreMi";
import Experiencias from "./sections/Experiencias/experiencias"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Inicio />
        <SobreMi />
        <Experiencias />
      </main>
    </>
  );
}

export default App;