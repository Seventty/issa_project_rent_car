import React, {useState, useEffect} from 'react';
import db from './../firebaseConfig';

import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore/lite';

import {Button, Row, Container, Col, Form, Navbar, Table } from 'react-bootstrap';

const Crud = ({title, context}) => {
    console.log(db.collection);
    const [tasks, setTasks] = useState([]);
    const [newtask, setNewTask] = useState('');
    const [updateTask, setUpdateTask] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const exampleCol = collection(db, context);
            const exampleSnapshot = await getDocs(exampleCol);
            setTasks(exampleSnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        };
        fetchData();
    }, []);

    const onCreate = () => {
      const exampleCol = collection(db, context).add({ name: newtask});
    }

    const onDelete = (id) => {
        const exampleCol = collection(db, context).doc(id).delete();
    }

    const onUpdate = (id) => {
        const exampleCol = collection(db, context).doc(id).set({name:updateTask})
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Add new {title}</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Control type="text" placeholder="Introduce el campo" value={newtask} onChange={e => setNewTask(e.target.value)}/>
                                <Button variant="primary" onClick={onCreate}>Add new {context}</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Task Name</th>
                                    <th>Delete Task</th>
                                    <th>Update Task</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map(spell => (
                                    <tr key={spell.id}>
                                        <td>{spell.id}</td>
                                        <td>{spell.name}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => onDelete(spell.id)}>Delete {context}</Button>
                                        </td>
                                        <input type="text" placeholder={spell.name} onChange={e => setUpdateTask(e.target.value)}></input>
                                        <Button className="text-white ml-4" variant="warning" onClick={() => onUpdate(spell.id)}>Update{context}</Button>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Crud
