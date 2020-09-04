import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { getCityName } from "../../store/orders/actions";
import { selectToken } from "../../store/clients/selectors";
import { selectCity, selectStreetName } from "../../store/orders/selectors";
import { selectClient } from "../../store/clients/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./index.css";
import UnderContruction from "../../pages/UnderContruction";
import Email from "../../components/FormErrorMessages/Email";

export default function AddressOrderCard() {
  const client = useSelector(selectClient);

  const [typeOrder, setTypeOrder] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("uwemail@email.com");
  const [postalCode, setPostalCode] = useState("");
  const [houseNumber, setHouseNumber] = useState();
  const [returnAdres, setReturnAdres] = useState(false);
  const [houseNumberAddition, setHouseNumberAddition] = useState("");
  const [postalCodeFilled, setPostalCodeFilled] = useState(false);
  const [billingAddress, setBillingAddress] = useState();

  const [statusPostalCodeApi, setTogglePostalCodeApi] = useState(true);
  const togglePostalCodeApi = () =>
    setTogglePostalCodeApi(!statusPostalCodeApi);
  // create selector for City.

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const cityNameFromApi = useSelector(selectCity);
  const streetNameFromApi = useSelector(selectStreetName);
  const history = useHistory();

  useEffect(() => {
    if (client.email) {
      setEmail(client.email);
    }
  }, [client]);

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
  function isRFC822ValidEmail(value) {
    var sQtext = "[^\\x0d\\x22\\x5c\\x80-\\xff]";
    var sDtext = "[^\\x0d\\x5b-\\x5d\\x80-\\xff]";
    var sAtom =
      "[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+";
    var sQuotedPair = "\\x5c[\\x00-\\x7f]";
    var sDomainLiteral = "\\x5b(" + sDtext + "|" + sQuotedPair + ")*\\x5d";
    var sQuotedString = "\\x22(" + sQtext + "|" + sQuotedPair + ")*\\x22";
    var sDomain_ref = sAtom;
    var sSubDomain = "(" + sDomain_ref + "|" + sDomainLiteral + ")";
    var sWord = "(" + sAtom + "|" + sQuotedString + ")";
    var sDomain = sSubDomain + "(\\x2e" + sSubDomain + ")*";
    var sLocalPart = sWord + "(\\x2e" + sWord + ")*";
    var sAddrSpec = sLocalPart + "\\x40" + sDomain; // complete RFC822 email address spec
    var sValidEmail = "^" + sAddrSpec + "$"; // as whole string

    var reValidEmail = new RegExp(sValidEmail);

    if (reValidEmail.test(email)) {
      if (value === "id") {
        return "borderGreen";
      }
      return true;
    } else if (value === "id") {
      return "borderOrangeRed";
    } else if (email.length > 0) {
      return <Email />;
    }
  }
  console.log("client is", client);
  console.log("email is", email);
  return (
    <div>
      <Form as={Col} sm={{ span: 6, offset: 3 }} className="mt-5">
        <h6 className="align-left nameTitle">Aanhef</h6>
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
        <h6 className="align-left nameTitle">Uw Naam</h6>
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
        <h6 className="align-left nameTitle">
          <span>Postcode</span>
        </h6>
        <Form.Group id="formBasicEmail" className="form-inline">
          <Form.Control
            value={postalCode}
            placeholder="0000AA"
            onChange={(event) =>
              setPostalCode(event.target.value.toUpperCase())
            }
            type="text"
            className={`${borderPostalCode(
              postalCode
            )} flyout-example small firstElement`}
            required
          />

          <Form.Control
            value={houseNumber}
            onChange={(event) => setHouseNumber(parseInt(event.target.value))}
            placeholder="10"
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
              value={"adjust"}
              onChange={(event) => setBillingAddress(event.target.value)}
              type="checkbox"
              className="small"
              checked
            />
          </Form.Group>
        </div>
        <h6 className="align-left nameTitle">Email</h6>
        <div>
          <Form.Group id="formBasicEmail" className="checkBox">
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              className={`${isRFC822ValidEmail("id")}`}
              required
            />
            {isRFC822ValidEmail()}
            <Form.Text className="text-muted">
              Wij delen uw email nooit.
            </Form.Text>
          </Form.Group>
        </div>

        <Form.Group className="mt-5">
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
