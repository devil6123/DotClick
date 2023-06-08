import SideBar from "./components/SideBar";
import Main from "./components/main/Main";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <div className="App">

{/* <SideBar/> */}
<Container>
      <Row>
        <Col><SideBar/></Col>
        <Col> <Main/> </Col>
      </Row>
</Container>
    </div>
  );
}

export default App;
