import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getUserWithStoredToken } from '../../store/clients/actions'
import { selectToken, selectClient } from '../../store/clients/selectors'
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { orderSignUp } from "../../store/clients/actions";
import { appLoading, appDoneLoading } from '../../store/appState/actions'
import Order from '../Order'

export default function OrderSignup() {
    const token = useSelector(selectToken)
    const client = useSelector(selectClient);
    const history = useHistory();
    const clientId = client.id
   
  const [name, setName] = useState("");
  const [email, setEmail] = useState( "");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
    

  function submitForm(event) {
    event.preventDefault();
    if (token === null) {
        history.push("/");
      }
      
    dispatch(orderSignUp(clientId, name, email, password))

    

    setEmail("");
    setPassword("");
    setName("");

  
}
 
    useEffect(()=>{
        if (token === null) {
            history.push("/");
          }
        dispatch(getUserWithStoredToken());
        if(clientId,name,email,password,client.isVerified){
            history.push('/order')
        }
       
    },[dispatch])

    const placeHolderName = client.name ? client.name : "Vul uw naam in"
    const placeHolderEmail = client.email ? client.email : "Vul uw email in"

    if(clientId,name,email,password,client.isVerified){
     history.push('/order')
    
    }

    return (
        <Container>
          <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
            <h1 className="mt-5 mb-5">Uw Gegevens</h1>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={event => setName(event.target.value)}
                type="text"
                placeholder={placeHolderName}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={event => setEmail(event.target.value)}
                type="email"
                placeholder={placeHolderEmail}
                required
              />
              <Form.Text className="text-muted">
                Wij delen uw email nooit.
              </Form.Text>
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={event => setPassword(event.target.value)}
                type="password"
                placeholder="Wachtwoord"
                required
              />
            </Form.Group>
            <Form.Group className="mt-5">
              <Button variant="success" type="submit" onClick={submitForm}>
                Naar bestelling
              </Button>
            </Form.Group>
            <Link to="/login">Klik hier om in te loggen</Link>
          </Form>
        </Container>
      );
    }
