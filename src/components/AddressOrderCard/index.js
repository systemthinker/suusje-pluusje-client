import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/clients/actions";
import { selectToken } from "../../store/clients/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./index.css";
import UnderContruction from "../../pages/UnderContruction";

export default function AddressOrderCard() {
  const [typeOrder, setTypeOrder] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [streetNameApi, setStreetNameApi] = useState("Oost-Graftdijk");
  const [houseNumberApi, setHouseNumberApi] = useState(51);
  const [cityApi, setCityApi] = useState("Oost-Graftdijk");
  const [postalCode, setPostalCode] = useState("1487Mc".toUpperCase());
  const [houseNumber, setHouseNumber] = useState(51);
  const [houseNumberAddition, setHouseNumberAddition] = useState("a");

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {}, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    window.location.replace("/construction");

    // dispatch(signUp(name, email, password));

    // setEmail("");
    // setPassword("");
    // setName("");
  }

  function borderControls(value) {
    if (value.length >= 2) {
      return "borderGreen";
    } else {
      return "borderOrangeRed";
    }
  }

  function borderControlsOptional(value) {
    if (value.length >= 1) {
      return "borderGreen";
    } else {
      return "borderGrey";
    }
  }

  function borderPostalCode(value) {
    // add better validation later
    if (value.length === 6) {
      return "borderGreen";
    } else {
      return "borderOrangeRed";
    }
  }

  function borderHouseNumber(value) {
    // add better validation later
    if (Number.isInteger(value)) {
      return "borderGreen";
    } else {
      return "borderOrangeRed";
    }
  }
  return (
    <div>
      <Form as={Col} sm={{ span: 6, offset: 3 }} className="mt-5">
        <h5 className="align-left nameTitle">Type Bestelling</h5>

        <Form.Group controlId="formBasicName" className="form-inline">
          <Form.Label>Particulier</Form.Label>
          <Form.Control
            value={typeOrder}
            onChange={(event) => setTypeOrder(event.target.value)}
            type="radio"
            className="leftControl"
            name="radioTypeBestelling"
            checked
          />
          <Form.Label className="right">Zakelijk</Form.Label>
          <Form.Control
            value={typeOrder}
            onChange={(event) => setTypeOrder(event.target.value)}
            type="radio"
            className="rightControl"
            name="radioTypeBestelling"
          />
        </Form.Group>

        <h5 className="align-left nameTitle">Aanhef</h5>
        <Form.Group controlId="formBasicName" className="form-inline">
          <Form.Label>Dhr.</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="radio"
            className="leftControl"
            name="radioAanhef"
            checked
          />
          <Form.Label className="right mevr">Mevr.</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="radio"
            className="rightControl "
            name="radioAanhef"
          />
        </Form.Group>
        <p className="align-left nameTitle">Uw Naam</p>
        <Form.Group controlId="formBasicEmail" className="form-inline">
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            id={borderControls(name)}
            input="sm"
            className="small firstElement"
            required
          />

          <Form.Control
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
            type="text"
            className="smaller"
            id={borderControlsOptional(middleName)}
          />

          <Form.Control
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            id={borderControls(lastName)}
            className="small"
            required
          />
        </Form.Group>

        <p className="align-left nameTitle">
          <span>Postcode</span>
          <span className="houseNumber">huisnummer</span>
        </p>

        <Form.Group controlId="formBasicEmail" className="form-inline">
          <Form.Control
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
            type="text"
            className="small firstElement"
            id={borderPostalCode(postalCode)}
            required
          />

          <Form.Control
            value={houseNumber}
            onChange={(event) => setHouseNumber(event.target.value)}
            type="number"
            id={borderHouseNumber(houseNumber)}
            className="smaller"
          />

          <Form.Control
            value={houseNumberAddition}
            onChange={(event) => setHouseNumberAddition(event.target.value)}
            type="text"
            placeholder="toev"
            text="muted"
            className="smaller"
            id={borderControlsOptional(houseNumberAddition)}
            required
          />
        </Form.Group>

        <Col sm={{ span: 6, offset: 1 }}>
          <div className="adresDiv textBlockMargin">
            <p className="bolder">Bezorgadres</p>
            <p>
              {streetNameApi} {houseNumberApi}
            </p>
            <p>
              {postalCode} {cityApi}
            </p>
          </div>
          <div className="adresDiv">
            <p className="bolder">
              Factuuradres <span className="optional">optioneel</span>
            </p>
            <p>Hetzelfde als bezorgadres</p>
          </div>
        </Col>

        <div>
          <Form.Group controlId="formBasicEmail" className="checkBox">
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="checkbox"
              className="small"
              checked
            />
          </Form.Group>
        </div>

        <Form.Group className="mt-5">
          {/* <Button variant="success" type="submit" size="lg" onClick={submitForm}>
              Doorgaan
            </Button> */}

          <div>
            <Link to="/construction">
              <Button variant="success" size="lg">
                Doorgaan
              </Button>
            </Link>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
