import Body from "./assets/styles/Body";
import Header from "./assets/styles/Header";
import Introducao from "./components/Introducao/Introducao";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos/Projetos";
import Servicos from "./components/Servicos/Servicos";
import MinhasSkills from "./components/Skills/MinhasSkills";
import SobreMim from "./components/SobreMim/SobreMim";

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
        <Servicos></Servicos>
        <MinhasSkills></MinhasSkills>
      </Body>
    </>
  );
}

export default App;
