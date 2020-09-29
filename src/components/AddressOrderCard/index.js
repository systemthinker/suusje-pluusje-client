import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import {
  getCityName,
  getCityNameBilling,
  setDisplayPostalCode,
  setDisplayPostalCodeBilling,
  setPostalCode,
  setPostalCodeBilling,
  setHouseNumber,
  setHouseNumberBilling,
  setClientData,
  setClientAddress,
  setClientAddressBilling,
} from "../../store/orders/actions";

import {
  selectCity,
  selectStreetName,
  selectCityBilling,
  selectStreetNameBilling,
  selectDisplayPostalCode,
  selectDisplayPostalCodeBilling,
  selectHouseNumber,
  selectHouseNumberBilling,
  selectPostalCode,
  selectPostalCodeBilling,
  selectErrorStatus,
  selectErrorStatusBilling,
} from "../../store/orders/selectors";

import { selectAppLoading } from "../../store/appState/selectors";
import { selectClient } from "../../store/clients/selectors";
import { useDispatch, useSelector } from "react-redux";

import { Col } from "react-bootstrap";
import "./index.css";
import Email from "../../components/FormErrorMessages/Email";
import PostalCodeApiStatus from "../FormErrorMessages/PostalCodeApiStatus";
import CityApiStatus from "../../components/FormErrorMessages/CityAPiStatus";
import PostalCodeApiStatusBilling from "../FormErrorMessages/PostalCodeApiStatusBilling";
import CityApiStatusBilling from "../../components/FormErrorMessages/CityAPiStatusBilling";
import NoIdError from "../../components/FormErrorMessages/NoIdError";
import FirstName from "../../components/FormErrorMessages/FirstName";
import LastName from "../../components/FormErrorMessages/LastName";

export default function AddressOrderCard() {
  // also add error handling if postal code is not found
  const client = useSelector(selectClient);
  const history = useHistory();

  const salutationMevr = "Mevr.";
  const salutationDhr = "Dhr.";

  const [checked, setChecked] = useState(true);

  const [salutation, setSalutation] = useState("Mevr/Dhr");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [houseNumberAddition, setHouseNumberAddition] = useState("");
  const [houseNumberAdditionBilling, setHouseNumberAdditionBilling] = useState(
    ""
  );

  const [errorCityApi, setErrorCityApi] = useState(false);
  const [errorCityApiBilling, setErrorCityApiBilling] = useState(false);
  const [errorPostalCode, setErrorPostalCode] = useState(false);
  const [errorPostalCodeBilling, setErrorPostalCodeBilling] = useState(false);

  const [errorID, setErrorId] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);

  const [errorEmail, setErrorEmail] = useState(false);

  const billingAddressText = "Hetzelfde als bezorg adres";

  const dispatch = useDispatch();

  const cityNameFromApi = useSelector(selectCity);
  const cityNameFromApiBilling = useSelector(selectCityBilling);
  const streetNameFromApi = useSelector(selectStreetName);
  const streetNameFromApiBilling = useSelector(selectStreetNameBilling);
  const displayPostalCode = useSelector(selectDisplayPostalCode);
  const displayPostalCodeBilling = useSelector(selectDisplayPostalCodeBilling);
  const postalCode = useSelector(selectPostalCode);
  const postalCodeBilling = useSelector(selectPostalCodeBilling);
  const isLoading = useSelector(selectAppLoading);
  const houseNumber = useSelector(selectHouseNumber);
  const houseNumberBilling = useSelector(selectHouseNumberBilling);
  const errorStatus = useSelector(selectErrorStatus);
  const errorStatusBilling = useSelector(selectErrorStatusBilling);
  let id = client.id;

  useEffect(() => {
    if (client.email) {
      setEmail(client.email);
    }
  }, [client]);

  function submitForm(event) {
    event.preventDefault();

    if (!id) {
      console.log("id error called");
      setErrorId(true);
      return;
    }

    if (!name) {
      setErrorName(true);
      return;
    }

    if (!lastName) {
      setErrorLastName(true);
      return;
    }

    if (!postalCode) {
      setErrorPostalCode(true);
      return;
    }

    if (!cityNameFromApi) {
      setErrorCityApi(true);
      return;
    }

    if (!isRFC822ValidEmail()) {
      setErrorEmail(true);
      return;
    }

    if (
      postalCodeBilling ||
      houseNumberBilling ||
      cityNameFromApiBilling ||
      streetNameFromApiBilling
    ) {
      if (!postalCodeBilling) {
        setErrorPostalCodeBilling(true);
        return;
      }

      if (!cityNameFromApiBilling) {
        setErrorCityApiBilling(true);
        return;
      }

      dispatch(
        setClientAddressBilling({
          id,
          postalCodeBilling,
          houseNumberBilling,
          houseNumberAdditionBilling,
          cityNameFromApiBilling,
          streetNameFromApiBilling,
        })
      );
      console.log("dispatch billing");
    }

    console.log("first check trough");

    dispatch(
      setClientData({
        id,
        salutation,
        name,
        lastName,
        middleName,
        email,
      })
    );

    console.log("after client data dispatch");

    dispatch(
      setClientAddress({
        id,
        postalCode,
        houseNumber,
        houseNumberAddition,
        cityNameFromApi,
        streetNameFromApi,
      })
    );

    console.log("after address client");

    history.push("/order/overview");
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

  //billing
  document.addEventListener("click", (e) => {
    const insideElementConstant = document.getElementById("insideElement");

    let targetElement = e.target;

    do {
      if (targetElement === insideElementConstant) {
        return;
      }

      targetElement = targetElement.parentNode;
    } while (targetElement);

    if (
      postalCode.length === 6 &&
      Number.isInteger(houseNumber) &&
      cityNameFromApi.length < 2
    ) {
      dispatch(getCityName());
    }
  });

  document.addEventListener("click", (e) => {
    const insideElementConstantBilling = document.getElementById(
      "insideElementBilling"
    );
    let targetElement = e.target;

    do {
      if (targetElement === insideElementConstantBilling) {
        return;
      }

      targetElement = targetElement.parentNode;
    } while (targetElement);

    if (
      postalCodeBilling.length === 6 &&
      Number.isInteger(houseNumberBilling)
    ) {
      dispatch(getCityNameBilling());
    }
  });

  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (postalCode.length === 6 && Number.isInteger(houseNumber)) {
        setErrorPostalCode(false);
        dispatch(getCityName());
      }
    }
  });
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (
        postalCodeBilling.length === 6 &&
        Number.isInteger(houseNumberBilling)
      ) {
        dispatch(getCityNameBilling());
      }
    }
  });

  function returnAddressInfo() {
    if (isLoading) {
      return null;
    } else if (
      displayPostalCode &&
      postalCode.length === 6 &&
      Number.isInteger(houseNumber)
    ) {
      return (
        <div className="align-left AddressDiv">
          <p className="bolder deliveryAddresssHide">Bezorg adres</p>
          <p>
            {streetNameFromApi} {houseNumber}{" "}
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
      return false;
    } else {
      return false;
    }
  }

  function onChangePostalCodeHandler(event) {
    dispatch(setPostalCode(event.target.value.toUpperCase()));
    dispatch(setDisplayPostalCode(false));
    if (postalCode.length === 6) {
      setErrorPostalCode(false);
    }
  }

  function onChangePostalCodeHandlerBilling(event) {
    console.log("event target value ");
    dispatch(setPostalCodeBilling(event.target.value.toUpperCase()));
    dispatch(setDisplayPostalCodeBilling(false));
  }

  function onChangeBillingAddressHandler() {
    if (!checked) {
      return (
        <div>
          <h6 className="align-left nameTitle">
            <span>Postcode</span>
          </h6>
          <Form.Group id="insideElementBilling" className="form-inline">
            <Form.Control
              value={postalCodeBilling}
              placeholder="1111BB"
              onChange={(event) => onChangePostalCodeHandlerBilling(event)}
              type="text"
              className={`${borderPostalCode(
                postalCodeBilling
              )}  small firstElement`}
              required
            />

            <Form.Control
              value={houseNumberBilling}
              onChange={(event) =>
                dispatch(setHouseNumberBilling(parseInt(event.target.value)))
              }
              placeholder="20"
              type="number"
              className={`${borderHouseNumber(houseNumberBilling)} smaller`}
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
              )}  smaller`}
              required
            />
            {errorStatusBilling ? <PostalCodeApiStatus /> : null}
          </Form.Group>
          <div>{returnAddressInfoBilling()}</div>
        </div>
      );
    }
  }

  function returnAddressInfoBilling() {
    if (isLoading) {
      return null;
    } else if (
      displayPostalCodeBilling &&
      postalCodeBilling.length === 6 &&
      Number.isInteger(houseNumberBilling)
    ) {
      return (
        <div className="align-left AddressDiv">
          <p className="bolder deliveryAddresssHide">Factuur adres</p>
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
  }
  function onChangeSalutationHandler(event) {
    setSalutation(event.target.value);
  }

  function onChangeCheckHandler(event) {
    setChecked(!checked);
  }

  function setNameHandler(event) {
    setName(event.target.value);
    if (name.length > 1) {
      setErrorName(false);
    }
  }

  function setLastNameHandler(event) {
    setLastName(event.target.value);
    if (lastName.length > 1) {
      setErrorLastName(false);
    }
  }

  function setEmailHandler(event) {
    setEmail(event.target.value);
    if (isRFC822ValidEmail()) {
      setErrorEmail(false);
    }
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
            readOnly
          />

          <Form.Label className="right mevr">Mevr.</Form.Label>
          <Form.Control
            value={salutationMevr}
            checked={salutation === salutationMevr}
            type="radio"
            className="rightControl "
            name="radioAanhef"
            readOnly
          />
          <span className="optional"> &nbsp;&nbsp;optioneel</span>
        </Form.Group>
        <h6 className="align-left nameTitle">Uw Naam</h6>
        <Form.Group className=" form-inline">
          <Form.Control
            value={name}
            onChange={(event) => setNameHandler(event)}
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
            onChange={(event) => setLastNameHandler(event)}
            type="text"
            className={`small ${borderControls(lastName)}`}
            placeholder="achternaam"
            required
          />
        </Form.Group>
        <h6 className="align-left nameTitle">
          <span>Postcode</span>
        </h6>
        <Form.Group id="insideElement" className="form-inline ">
          <Form.Control
            value={postalCode}
            placeholder="0000AA"
            onChange={(event) => onChangePostalCodeHandler(event)}
            type="text"
            className={`${borderPostalCode(postalCode)}  small firstElement`}
            required
          />

          <Form.Control
            value={houseNumber}
            onChange={(event) =>
              dispatch(setHouseNumber(parseInt(event.target.value)))
            }
            placeholder="10"
            type="number"
            className={`${borderHouseNumber(houseNumber)}  smaller`}
            required
          />

          <Form.Control
            value={houseNumberAddition}
            onChange={(event) => setHouseNumberAddition(event.target.value)}
            type="text"
            placeholder="toev"
            text="muted"
            className={`${borderControlsOptional(
              houseNumberAddition
            )}  smaller`}
            required
          />
        </Form.Group>
        {errorStatus ? <PostalCodeApiStatus /> : null}
        <div>{returnAddressInfo()}</div>

        <div className=" align-left AddressDiv">
          <p className="bolder">
            Factuur adres <span className="optional">optioneel</span>
          </p>
          <p className="billingAddressTextField">
            {checked ? billingAddressText : " "}
          </p>
        </div>

        <div>
          <Form.Group id="" className="checkBox">
            <Form.Control
              value={"adjust"}
              type="checkbox"
              className="small"
              checked={checked}
              onChange={(event) => onChangeCheckHandler(event)}
            />
          </Form.Group>
        </div>
        {onChangeBillingAddressHandler()}

        <h6 style={{ marginTop: "10px" }} className="align-left nameTitle">
          Email
        </h6>
        <div>
          <Form.Group id="" className="checkBox">
            <Form.Control
              value={email}
              onChange={(event) => setEmailHandler(event)}
              type="text"
              className={`${isRFC822ValidEmail("id")}`}
              placeholder="uwemail@email.com"
              required
            />
            {isRFC822ValidEmail() || email.length === 0 ? null : <Email />}
            <Form.Text className="text-muted">
              Wij delen uw email nooit.
            </Form.Text>
          </Form.Group>
        </div>

        <Form.Group className="mt-5">
          <div>
            <Button
              variant="success"
              size="block"
              onClick={(event) => submitForm(event)}
            >
              Doorgaan
            </Button>
          </div>
        </Form.Group>
        {errorCityApi && !cityNameFromApi ? <CityApiStatus /> : null}
        {errorCityApiBilling && !cityNameFromApiBilling ? (
          <CityApiStatusBilling />
        ) : null}
        {errorID ? <NoIdError /> : null}
        {errorName ? <FirstName /> : null}
        {errorLastName ? <LastName /> : null}
        {errorPostalCode && !cityNameFromApi ? <PostalCodeApiStatus /> : null}
        {errorPostalCodeBilling && !cityNameFromApiBilling ? (
          <PostalCodeApiStatusBilling />
        ) : null}
        {errorEmail ? <Email /> : null}
      </Form>
    </div>
  );
}
