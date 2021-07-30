import { useEffect, useState, useCallback } from "react";
import { Row, ListGroup, Button } from "react-bootstrap";
import { API_URL } from "./../index";

function UsersList() {
    
    const [state, setState] = useState([])

    useEffect(() => { 
        fetch(`${API_URL}/api/users`)
        .then(res => res.json())
        .then(data => setState(data))
    }, [])

    const deleteUser = useCallback(id => {
        fetch(`${API_URL}/api/users/${id}`, {
            method: 'DELETE',
        })

    }, [])

    return (
        
        <ListGroup>
        {
            state.map(user =>
                <ListGroup.Item key={user.id} style={{display:'flex', justifyContent:'space-between'}}>
                    {user.first_name} {user.last_name}
                    <Button 
                        variant="danger"
                        onClick={()=>deleteUser(user.id)}
                        size="sm"
                    >x</Button>
                </ListGroup.Item>
            )
        }
        </ListGroup>
    );

    
  }
  
  export default UsersList;
  