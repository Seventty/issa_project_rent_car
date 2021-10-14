import React, {useState, useEffect} from 'react';
import db from './../firebaseConfig';

import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore/lite';

import {Button, Row, Container, Col, Form, Navbar, Table } from 'react-bootstrap';

import './Crud.css';

import Items from './Items/Items';

const Crud = ({title, context}) => {
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState([]);
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

    const onCreate = async () => {
      const collec = await collection(db, context).set({ name: newtask});
    }

    const onDelete = (id) => {
        const exampleCol = collection(db, context).doc(id).delete();
    }

    const onUpdate = (id) => {
        const exampleCol = collection(db, context).doc(id).set({name:updateTask})
    }

    return (
        <div>
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
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default Crud

    {/*
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
                                        <Button className="text-white ml-4" variant="warning" onClick={() => onUpdate(spell.id)}>Update {context}</Button>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container> */}