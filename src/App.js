import Body from "./assets/styles/Body";
import Header from "./assets/styles/Header";
import Introducao from "./components/Introducao";
import Navbar from "./components/Navbar";
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
      </Body>
    </>
  );
}

export default App;
