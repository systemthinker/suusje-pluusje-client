import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { getCityName } from "../../store/orders/actions";
import { selectToken } from "../../store/clients/selectors";
import { selectCity, selectStreetName } from "../../store/orders/selectors";

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
  const [postalCode, setPostalCode] = useState("1487Mc".toUpperCase());
  const [houseNumber, setHouseNumber] = useState(1);
  const [returnAdres, setReturnAdres] = useState(false);
  const [houseNumberAddition, setHouseNumberAddition] = useState("a");
  const [postalCodeFilled, setPostalCodeFilled] = useState(false);

  const [statusPostalCodeApi, setTogglePostalCodeApi] = useState(true);
  const togglePostalCodeApi = () =>
    setTogglePostalCodeApi(!statusPostalCodeApi);
  // create selector for City.

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const cityNameFromApi = useSelector(selectCity);
  const streetNameFromApi = useSelector(selectStreetName);
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

  function fetchCity(postalCodeValue, houseNumberValue) {
    dispatch(getCityName(postalCodeValue, houseNumberValue));
    console.log("fetchCity() called");
  }

  function borderHouseNumber(value) {
    // add better validation later
    if (Number.isInteger(value)) {
      return "borderGreen";
    } else {
      return "borderOrangeRed";
    }
  }

  document.addEventListener("click", (evt) => {
    const flyoutElement = document.getElementById("flyout-example");
    let targetElement = evt.target;

    do {
      if (targetElement == flyoutElement) {
        console.log("clicked inside");
        return;
      }

      targetElement = targetElement.parentNode;
    } while (targetElement);
    console.log("Clicked outside!");

    if (postalCode.length === 6 && Number.isInteger(houseNumber)) {
      fetchCity(postalCode, houseNumber);
      setReturnAdres(true);
      console.log("return adres", returnAdres);
    }
  });

  function returnAdresInfo() {
    return (
      <div className="align-left adresDiv">
        <p className="bolder deliveryAdressHide">Bezorgadres</p>
        <p>
          {streetNameFromApi} {houseNumber} {houseNumberAddition}
        </p>
        <p>
          {postalCode} {cityNameFromApi}
        </p>
      </div>
    );
  }
  console.log("city from selector is ", cityNameFromApi);
  console.log("streetname from selector is ", streetNameFromApi);

  return (
    <div>
      <Form as={Col} sm={{ span: 6, offset: 3 }} className="mt-5">
        <h5 className="align-left nameTitle">Type Bestelling</h5>
        <Form.Group id="formBasicName" className="form-inline">
          <Form.Label className="particulier">Particulier</Form.Label>
          <Form.Control
            value={typeOrder}
            onChange={(event) => setTypeOrder(event.target.value)}
            type="radio"
            className="leftControl"
            name="radioTypeBestelling"
            checked
          />
          <Form.Label className="right zakelijk">Zakelijk</Form.Label>
          <Form.Control
            value={typeOrder}
            onChange={(event) => setTypeOrder(event.target.value)}
            type="radio"
            className="rightControl"
            name="radioTypeBestelling"
          />
        </Form.Group>
        <h5 className="align-left nameTitle">Aanhef</h5>
        <Form.Group id="formBasicName" className="form-inline">
          <Form.Label className="Dhr">Dhr.</Form.Label>
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
        <Form.Group className="formBasicEmail" className="form-inline">
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            className={`small firstElement ${borderControls(name)}`}
            input="sm"
            placeholder="voornaam"
            required
          />

          <Form.Control
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
            type="text"
            placeholder="van"
            className={`smaller ${borderControlsOptional(middleName)}`}
          />

          <Form.Control
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            className={`small ${borderControls(lastName)}`}
            placeholder="achternaam"
            required
          />
        </Form.Group>
        <p className="align-left nameTitle">
          <span>Postcode</span>
        </p>
        <Form.Group id="formBasicEmail" className="form-inline">
          <Form.Control
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
            type="text"
            className={`${borderPostalCode(
              postalCode
            )} flyout-example small firstElement`}
            required
          />

          <Form.Control
            value={houseNumber}
            onChange={(event) => setHouseNumber(event.target.value)}
            type="number"
            className={`${borderHouseNumber(
              houseNumber
            )} flyout-example smaller`}
          />

          <Form.Control
            value={houseNumberAddition}
            onChange={(event) => setHouseNumberAddition(event.target.value)}
            type="text"
            placeholder="toev"
            text="muted"
            className={`${borderControlsOptional(
              houseNumberAddition
            )} flyout-example smaller`}
            required
          />
        </Form.Group>
        {returnAdres ? returnAdresInfo() : null}
        <div className=" align-left adresDiv">
          <p className="bolder">
            Factuuradres <span className="optional">optioneel</span>
          </p>
          <p>Hetzelfde als bezorgadres</p>
        </div>
        <div>
          <Form.Group id="formBasicEmail" className="checkBox">
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
              <Button variant="success" size="block">
                Doorgaan
              </Button>
            </Link>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
