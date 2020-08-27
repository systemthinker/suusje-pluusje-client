import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { selectClient } from "../../store/clients/selectors";
import { useSelector } from "react-redux";

export default function OrderButton({ loading }) {
  const client = useSelector(selectClient);

  return (
    <div>
      <Link to={`/basket/${client.id}`}>
        <Button className="buttonStyleDetailCard" variant="success" size="lg">
          Ik ga bestellen {">>"}
        </Button>
      </Link>
    </div>
  );
}
