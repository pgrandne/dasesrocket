import './App.css';
import { Alert, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useState } from 'react';

const App = () => {
  const [show, setShow] = useState(true);

  const handleCard = () => {
    console.log('ok')
  }


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">DASES Rocket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Aucune idée</Nav.Link>
              <Nav.Link href="#link">Non plus</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col md={2}/>
          <Col md={8}>
            <h1>Acteurs de l'écosystème de l'éducation et des compétences</h1>
          </Col>
          <Col md={2}/>
        </Row>
        <Row>
          <Col />
          <Col sm>
            <Card
              bg="secondary"
              key="secondary"
              text="white"
              className="mb-2"
              onClick={handleCard}
            >
              <Card.Body>
                <Card.Title>Partagez un besoin</Card.Title>
                <Card.Text>
                  Besoin de données ? De services ? D'outils pour interagir avec des données ?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card
              bg="dark"
              key="dark"
              text="white"
              // style={{ width: '18rem' }}
              className="mb-2"
              onClick={handleCard}
            >
              <Card.Body>
                <Card.Title>Parcourir les opportunités</Card.Title>
                <Card.Text>
                  Des acteurs partagent déjà des services, données et outils, consultez-les
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm />
        </Row>
      </Container>

      {show &&
        <Alert key="warning" variant="warning" onClose={() => setShow(false)} dismissible >
          Gagnez un droit de vote en vous inscrivant avant le 30 juin
        </Alert>}
    </div>
  );
}

export default App;
