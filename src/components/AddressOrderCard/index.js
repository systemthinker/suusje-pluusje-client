import React, { useState, useEffect, useRef, createRef } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  getCityName,
  getCityNameBilling,
  signUp,
} from "../../store/orders/actions";

import { selectToken } from "../../store/clients/selectors";
import {
  selectCity,
  selectStreetName,
  selectCityBilling,
  selectStreetNameBilling,
} from "../../store/orders/selectors";
import { selectClient } from "../../store/clients/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./index.css";
import Email from "../../components/FormErrorMessages/Email";

export default function AddressOrderCard() {
  // use REdux --> appstate later to set postalCode state, to insure fetchCity() doesn't get called more then necessary
  // also add error handling if postal code is not found
  const client = useSelector(selectClient);

  const salutationMevr = "Mevr.";
  const salutationDhr = "Dhr.";

  const [checked, setChecked] = useState(true);
  const [typeOrder, setTypeOrder] = useState("");
  const [salutation, setSalutation] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [postalCodeBilling, setPostalCodeBilling] = useState("");
  const [houseNumber, setHouseNumber] = useState();
  const [houseNumberBilling, setHouseNumberBilling] = useState();
  const [returnAdres, setReturnAdres] = useState(false);
  const [returnAddressBilling, setReturnAddressBilling] = useState(false);
  const [houseNumberAddition, setHouseNumberAddition] = useState("");
  const [houseNumberAdditionBilling, setHouseNumberAdditionBilling] = useState(
    ""
  );

  const [postalCodeApi, setPostalCodeApi] = useState(true);
  const [postalCodeApiBilling, setPostalCodeApiBilling] = useState(true);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const cityNameFromApi = useSelector(selectCity);
  const streetNameFromApi = useSelector(selectStreetName);
  const cityNameFromApiBilling = useSelector(selectCityBilling);
  const streetNameFromApiBilling = useSelector(selectStreetNameBilling);
  const history = useHistory();

  useEffect(() => {
    if (client.email) {
      setEmail(client.email);
    }
  }, [client]);

  function submitForm(event) {
    event.preventDefault();

    window.location.replace("/construction");

    dispatch(
      signUp(
        name,
        lastName,
        middleName,
        email,
        postalCode,
        houseNumber,
        houseNumberAddition
      )
    );

    // setEmail("");
    // setPassword("");
    // setName("");
  }

  console.log("salutation is", salutation);

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

  function fetchCityBilling(postalCodeValue, houseNumberValue) {
    dispatch(getCityNameBilling(postalCodeValue, houseNumberValue));
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

  document.addEventListener("click", (e) => {
    const flyoutElement = document.getElementById("flyout-example");
    let targetElement = e.target;

    do {
      if (targetElement == flyoutElement) {
        console.log("clicked inside");
        return;
      }

      targetElement = targetElement.parentNode;
    } while (targetElement);

    if (
      postalCode.length === 6 &&
      Number.isInteger(houseNumber) &&
      postalCodeApi === true
    ) {
      fetchCity(postalCode, houseNumber);
      setPostalCodeApi(false);
      setReturnAdres(true);
    }
  });

  //billing
  document.addEventListener("click", (e) => {
    const flyoutElement = document.getElementById("flyout-example");
    let targetElement = e.target;

    do {
      if (targetElement == flyoutElement) {
        console.log("clicked inside");
        return;
      }

      targetElement = targetElement.parentNode;
    } while (targetElement);

    if (
      postalCodeBilling.length === 6 &&
      Number.isInteger(houseNumberBilling) &&
      postalCodeApiBilling === true
    ) {
      fetchCityBilling(postalCodeBilling, houseNumberBilling);
      setPostalCodeApiBilling(false);
      setReturnAddressBilling(true);
    }
  });

  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const flyoutElement = document.getElementById("flyout-example");
      let targetElement = e.target;

      do {
        if (targetElement == flyoutElement) {
          console.log("clicked inside");
          return;
        }

        targetElement = targetElement.parentNode;
      } while (targetElement);

      if (
        postalCode.length === 6 &&
        Number.isInteger(houseNumber) &&
        postalCodeApi === true
      ) {
        fetchCity(postalCode, houseNumber);
        setPostalCodeApi(false);
        setReturnAdres(true);
      }
    }
  });

  function returnAdresInfo() {
    return (
      <div className="align-left adresDiv">
        <p className="bolder deliveryAdressHide">Bezorgadres</p>
        <p>
          {streetNameFromApi}{" "}
          {houseNumber && Number.isInteger(houseNumber) ? houseNumber : null}{" "}
          {houseNumberAddition && houseNumberAddition.length > 0
            ? houseNumberAddition
            : null}
        </p>
        <p>
          {postalCode} {cityNameFromApi}
        </p>
      </div>
    );
  }

  function returnAdresInfoBilling() {
    return (
      <div className="align-left adresDiv">
        <p className="bolder deliveryAdressHide">Factuuradres</p>
        <p>
          {streetNameFromApiBilling}{" "}
          {houseNumberBilling && Number.isInteger(houseNumberBilling)
            ? houseNumberBilling
            : null}{" "}
          {houseNumberAdditionBilling && houseNumberAdditionBilling.length > 0
            ? houseNumberAdditionBilling
            : null}
        </p>
        <p>
          {postalCodeBilling} {cityNameFromApiBilling}
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

  function onChangePostalCodeHandler(event) {
    setPostalCode(event.target.value.toUpperCase());
    setReturnAdres(false);
    setPostalCodeApi(true);
  }

  function onChangePostalCodeHandlerBilling(event) {
    setPostalCodeBilling(event.target.value.toUpperCase());
    setReturnAdres(false);
    setPostalCodeApi(true);
  }

  function onChangeBillingAddressHandler() {
    if (!checked) {
      return (
        <div>
          <h6 className="align-left nameTitle">
            <span>Postcode</span>
          </h6>
          <Form.Group id="formBasicEmail" className="form-inline">
            <Form.Control
              value={postalCodeBilling}
              placeholder="0000AA"
              onClick={(event) => onChangePostalCodeHandlerBilling(event)}
              type="text"
              className={`${borderPostalCode(
                postalCodeBilling
              )} flyout-example small firstElement`}
              required
            />

            <Form.Control
              value={houseNumberBilling}
              onChange={(event) =>
                setHouseNumberBilling(parseInt(event.target.value))
              }
              placeholder="10"
              type="number"
              className={`${borderHouseNumber(
                houseNumberBilling
              )} flyout-example smaller`}
            />

            <Form.Control
              value={houseNumberAdditionBilling}
              onChange={(event) =>
                setHouseNumberAdditionBilling(event.target.value)
              }
              type="text"
              placeholder="toev"
              text="muted"
              className={`${borderControlsOptional(
                houseNumberAdditionBilling
              )} flyout-example smaller`}
              required
            />
          </Form.Group>
          {returnAddressBilling &&
          postalCodeBilling.length === 6 &&
          Number.isInteger(houseNumberBilling)
            ? returnAdresInfoBilling()
            : null}
        </div>
      );
    }
  }

  function onChangeSalutationHandler(event) {
    setSalutation(event.target.value);
  }

  return (
    <div>
      <Form as={Col} sm={{ span: 6, offset: 3 }} className="mt-5">
        <h6 className="align-left nameTitle">Aanhef</h6>
        <Form.Group
          onChange={(event) => onChangeSalutationHandler(event)}
          id="formBasicName"
          className="form-inline"
        >
          <Form.Label className="Dhr">Dhr.</Form.Label>
          <Form.Control
            value={salutationDhr}
            type="radio"
            className="leftControl"
            name="radioAanhef"
            checked={salutation === salutationDhr}
            defaultChecked
          />

          <Form.Label className="right mevr">Mevr.</Form.Label>
          <Form.Control
            value={salutationMevr}
            checked={salutation === salutationMevr}
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
            onChange={(event) => onChangePostalCodeHandler(event)}
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
        {returnAdres && postalCode.length === 6 && Number.isInteger(houseNumber)
          ? returnAdresInfo()
          : null}

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
              type="checkbox"
              className="small"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </Form.Group>
        </div>
        {onChangeBillingAddressHandler()}

        <h6 style={{ marginTop: "10px" }} className="align-left nameTitle">
          Email
        </h6>
        <div>
          <Form.Group id="formBasicEmail" className="checkBox">
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              className={`${isRFC822ValidEmail("id")}`}
              placeholder="uwemail@email.com"
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
            <Link to="/order/overview">
              <Button
                variant="success"
                size="block"
                // onCLick={(event) => submitForm(event)}
              >
                Doorgaan
              </Button>
            </Link>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
