import React, {useState, useEffect} from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/clients/actions";
import { selectToken } from "../../store/clients/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import './index.css'

export default function AddressOrderCard() {

    const [typeOrder, setTypeOrder] = useState("")
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
   
    
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password));

    setEmail("");
    setPassword("");
    setName("");
  }

    return (
        <div>
            <Form as={Col} sm={{ span: 8, offset: 3 }} className="mt-5">
            <h5 className="align-left">Type Bestelling</h5>
        
        <Form.Group controlId="formBasicName" className="form-inline">
            
          <Form.Label>Particulier</Form.Label>
          <Form.Control
            value={typeOrder}
            onChange={event => setTypeOrder(event.target.value)}
            type="radio"
            className="leftControl"
            name="radioTypeBestelling"
            
            checked
          />
              <Form.Label className="right">Zakelijk</Form.Label>
          <Form.Control
            value={typeOrder}
            onChange={event => setTypeOrder(event.target.value)}
            type="radio"
            className="rightControl"
            name="radioTypeBestelling"
            
            
          />
          </Form.Group>

            <h5 className="align-left">Aanhef</h5>
            <Form.Group controlId="formBasicName" className="form-inline">
            <Form.Label>Dhr.</Form.Label>
            <Form.Control
                value={name}
                onChange={event => setName(event.target.value)}
                type="radio"
                className="leftControl"
                name="radioAanhef"
                
                checked
            />
                <Form.Label className="right mevr">Mevr.</Form.Label>
            <Form.Control
                value={name}
                onChange={event => setName(event.target.value)}
                type="radio"
                className="rightControl "
                name="radioAanhef"
                
                
            />
        </Form.Group>
        
        <Form.Group controlId="formBasicEmail" className="form-inline">
          
              <Form.Label>uw naam</Form.Label>
          <Form.Control
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="text"
            
            input="sm"
            className="small firstElement"
            
            
            required
          />
          
          
          <Form.Label>tussenvoegsel</Form.Label>
          <Form.Control
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="text"
            className="smaller"
            
            
            
          />
         
       
         
          <Form.Label>achternaam</Form.Label>
          <Form.Control
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="text"
            
            className="small"
            required
          />
          
          
       
          
         
         
        </Form.Group>

       
        
        <Form.Group controlId="formBasicEmail" className="form-inline">
      
              <Form.Label>postcode</Form.Label>
          <Form.Control
          
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="text"
            className="small firstElement"
            
            
            required
          />

    
       
          <Form.Label >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;huisnummer</Form.Label>
          <Form.Control
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="text"
            
            className="smaller"
            
            
            
          />
          
         
            <Form.Label>toevoeging</Form.Label>
            <Form.Control
                value={email}
                onChange={event => setEmail(event.target.value)}
                type="text"
                placeholder="toev"
                text="muted"
                className="smaller"
                
                required
            />
     
          
          <div>
            <Form.Group controlId="formBasicEmail" >
            <Form.Label>FactuurAdres</Form.Label>
            <Form.Control
                value={email}
                onChange={event => setEmail(event.target.value)}
                type="text"
               
                className="smaller"
                
                required
            />
            </Form.Group>
            </div>
          
         
         
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="success" type="submit" size="lg" onClick={submitForm}>
            Doorgaan
          </Button>
        </Form.Group>
       
      </Form>
        </div>
    )
}
