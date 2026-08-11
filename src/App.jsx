import Navbar from "./components/navBar/navBar";
import Inicio from "./sections/Inicio/inicio";
import SobreMi from "./sections/sobreMi/sobreMi";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Inicio />
        <SobreMi />
      </main>
    </>
  );
}

export default App;