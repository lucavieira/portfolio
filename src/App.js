import Body from "./assets/styles/Body";
import Header from "./assets/styles/Header";
import Introducao from "./components/Introducao";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import SobreMim from "./components/SobreMim";

function App() {
  return (
    <>
      <Header>
        <h2>Portfólio</h2>
        <Navbar></Navbar>
      </Header>
      <Body>
        <Introducao></Introducao>
        <SobreMim></SobreMim>
        <Projetos></Projetos>
      </Body>
    </>
  );
}

export default App;
