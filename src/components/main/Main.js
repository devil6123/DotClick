import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Main = () => {
  return (
    <div className='main'>
you currently have Three Requests
<Container>
      <Row>
        <Col>
        <h4>St judges hospital</h4>
        <p>sacroisa FL 33178</p>
        </Col>
        <Col> <h3>10-17</h3>
        <p>October  December</p>
         </Col>
        <Col>
        <h1>
          20 Rooms
        </h1>
        <p>
          10 singles,10 double
        </p>
        </Col>
      </Row>
      <Row>

        <Col>RECIEVED</Col>
        <Col>NEGOTIATING</Col>
        <Col>COMPLETED</Col>
      </Row>
    </Container>

    </div>
  )
}

export default Main