import { useCallback, useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import { API_URL } from "./../index";

function AddUser() {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const createUser = useCallback((e) => {
        e.preventDefault()
        fetch(`${API_URL}/api/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email
            })
        })
    })
    

    return (
      <Row>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control 
                        type="text" 
                        onChange={e => setFirstName(e.target.value)} 
                        placeholder="Primer nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control 
                        type="text" 
                        onChange={e => setLastName(e.target.value)} 
                        placeholder="Segundo nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control 
                        type="email" 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Email" />
                </Form.Group>
                <Button variant="primary" onClick={createUser} type="submit">
                    Crear usuario
                </Button>
            </Form>
      </Row>
    );

    
  }
  
  export default AddUser;
  