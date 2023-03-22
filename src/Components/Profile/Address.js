import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Address() {
  return (
    <div>
        <h1> INFORMATIONS PERSONNELLES</h1>
        <div className='InfoPersonnelles'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Nom et Prénom</Form.Label>
        <Form.Control className='info' type="Text" value="Sonia ABBES" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label'> Adresse email</Form.Label>
        <Form.Control className='info' type="email" value=" soniaabbes1997@gmail.com" />
      </Form.Group>
      <Form.Group className="ville actulle " controlId="formBasicPassword">
      <Form.Label className='label'> ville actuelle </Form.Label>
        <Form.Control className='info' type="Text" value ="tunis" />
      </Form.Group>
      
    </Form>
    </div>
    </div>
  );
}

export default Address;