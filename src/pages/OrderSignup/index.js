import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserWithStoredToken } from "../../store/clients/actions";
import { selectToken, selectClient } from "../../store/clients/selectors";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { orderSignUp } from "../../store/clients/actions";
import Email from "../../components/FormErrorMessages/Email";
import FirstName from "../../components/FormErrorMessages/FirstName";
import { showMessageWithTimeout } from "../../store/appState/actions";
import Password from "../../components/FormErrorMessages/Password";

export default function OrderSignup() {
  const token = useSelector(selectToken);
  const client = useSelector(selectClient);
  const history = useHistory();
  const clientId = client.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    if (name.length > 2 && testPassword() && isRFC822ValidEmail()) {
      dispatch(orderSignUp(name, email, password));

      setEmail("");
      setPassword("");
      setName("");
    } else {
      dispatch(
        showMessageWithTimeout(
          "danger",
          true,
          "Er ging iets fout, controleer de invulvelden en probeer opnieuw"
        )
      );
    }
  }

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
    dispatch(getUserWithStoredToken());
    if ((clientId, name, email, password, client.isVerified)) {
      history.push("/order");
    }
  }, [dispatch]);

  const placeHolderName = client.name ? client.name : "Vul uw naam in";
  const placeHolderEmail = client.email ? client.email : "Vul uw email in";

  if ((clientId, name, email, password, client.isVerified)) {
    history.push("/order");
  }

  function testFirstName(value) {
    if (name.length > 2) {
      if (value === "id") return "borderGreen";
    } else if (value === "id") {
      return "borderOrangeRed";
    } else if (name.length > 0) {
      return <FirstName />;
    }
  }

  function testPassword(value) {
    if (
      password.match(/[a-z]/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[0-9]/g) &&
      password.length >= 8
    ) {
      if (value === "id") {
        return "borderGreen";
      }
      return true;
    } else if (value === "id") {
      return "borderOrangeRed";
    } else if (password.length > 0) {
      return <Password />;
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
      return <Email />;
    }
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Uw Gegevens</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            id={testFirstName("id")}
            placeholder={placeHolderName}
            required
          />
          {testFirstName()}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder={placeHolderEmail}
            required
            id={isRFC822ValidEmail("id")}
          />
          {isRFC822ValidEmail()}
          <Form.Text className="text-muted">
            Wij delen uw email nooit.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Wachtwoord"
            required
            id={testPassword("id")}
          />
          {testPassword}
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
