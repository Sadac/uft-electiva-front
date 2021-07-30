import { Col, Row } from "react-bootstrap";
import UsersList from "./components/UsersList"
import TasksList from "./components/TasksList"
import AddUser from "./components/AddUser"

function App() {

  return (
    <div>
      <Row>
        <h3>Usuarios</h3>
        <Col md={6}>
          <UsersList />
        </Col>
        <Col md={6}>
          <AddUser />
        </Col>
      </Row>

      <Row style={{marginTop:45}}>
        <h3>Tareas</h3>
        <Col md={12}>
          <TasksList />
        </Col>
      </Row>
    </div>

  );
}

export default App;
