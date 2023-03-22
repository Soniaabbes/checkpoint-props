import React from 'react';
import Card from 'react-bootstrap/Card';


function CardPro({experience}) {
  return (
    <div >

<Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title className='cardTitle'>{experience.exp}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{experience.periode}</Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardPro
