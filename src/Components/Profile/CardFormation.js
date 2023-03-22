import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardFormation({formation}) {
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={formation.img} />
      <Card.Body>
        <Card.Title className='cardTitle'>{formation.for1}</Card.Title>
        <Card.Text className='cardText'>
         {formation.lieu} <br/>{formation.periode}<br/>{formation.spécialité}
        </Card.Text>
        
      </Card.Body>
    </Card>



    </div>
  )
}

export default CardFormation