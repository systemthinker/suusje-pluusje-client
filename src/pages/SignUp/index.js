import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/clients/actions";
import { selectToken } from "../../store/clients/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Password from "../../components/FormErrorMessages/Password";
import Email from "../../components/FormErrorMessages/Email";
import FirstName from "../../components/FormErrorMessages/FirstName";
import { showMessageWithTimeout } from "../../store/appState/actions";
import "./index.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    // if (token !== null) {
    //   history.push("/");
    // }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();
    if (name.length > 2 && testPassword() && isRFC822ValidEmail()) {
      dispatch(signUp(name, email, password));

      setEmail("");
      setPassword("");
      setName("");
      history.goBack();
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
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Vul uw naam in"
            id={testFirstName("id")}
            required
          />
          {testFirstName()}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Vul uw email in"
            id={isRFC822ValidEmail("id")}
            required
          />
          {isRFC822ValidEmail()}
          <Form.Text className="text-muted">
            Wij delen uw email nooit.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Vul uw wachtwoord in"
            id={testPassword("id")}
            required
          />
          {testPassword()}
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Maak Account
          </Button>
        </Form.Group>
        <Form.Text>
          <span className="spanErrorMessage hidden">
            Er ging iets fout, controleer de invulvelden en probeer opnieuw
          </span>
        </Form.Text>
        <Link to="/login">Klik hier om in te loggen</Link>
      </Form>
    </Container>
  );
}
