import { useEffect, useState, useCallback } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { API_URL } from "./../index";

function TasksList() {
    
    const [usersState, setUsersState] = useState([])
    const [tasksState, setTasksState] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [userSelect, setUserSelect] = useState('')

    useEffect(() => { 
        fetch(`${API_URL}/api/users`)
        .then(res => res.json())
        .then(data => setUsersState(data))

        
        
    }, [])

    const handleChange = (e) => {
        const userId = e.target.value
        setUserSelect(userId)
        fetch(`${API_URL}/api/tasks/user/${userId}`)
        .then(res => res.json())
        .then(data => setTasksState(data))
        // cambiar tasks de acuerdo al usuario seleccionado
    }

    const createTask = useCallback((e) => {
        e.preventDefault()
        if(userSelect === ""){
            return
        }
        fetch(`${API_URL}/api/tasks/user/${userSelect}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                description,
            })
        })
    })

    const deleteCard = useCallback(id => {
        fetch(`${API_URL}/api/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    })

    return (
        <div>
            <Row>
                <Col>
                    {
                        tasksState.length && tasksState.map(task =>
                            <Card key={task.id} style={{ width: '18rem', minWidth: '100%', marginBottom: 15 }}>
                                <Card.Body>
                                    <Card.Title>{task.name}</Card.Title>
                                    <Card.Text>{task.description}</Card.Text>
                                    <Card.Link onClick={()=>deleteCard(task.id)}>eliminar</Card.Link>
                                </Card.Body>
                            </Card>
                            
                        )
                    }
                </Col>

                <Col>   
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control 
                            type="text" 
                            onChange={e => setName(e.target.value)}
                            placeholder="Titulo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control 
                            as="textarea" 
                            rows={3}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Descripcion" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control
                            as="select"
                            onChange={handleChange}
                            value={userSelect}
                        >   
                            <option value={""}>Seleccione un usuario</option>
                            {
                                usersState.map(user => 
                                    <option key={user.id} value={user.id}>
                                        {user.first_name} {user.last_name}
                                    </option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" onClick={createTask} type="submit">
                        Crear tarea
                    </Button>
                </Form>
                </Col>

            </Row>
        </div>
    );

    
  }
  
  export default TasksList;
  