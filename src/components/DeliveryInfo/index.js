import React from "react";
import { deliveryCosts } from "../../config/constants";

export default function DeliveryInfo() {
  return (
    <div>
      <h3>Bezorging {"&"} ophalen</h3>
      <p style={{ marginTop: "20px" }}>
        {`Bezorging duurt gemiddeld twee tot vier weken. 
                                    De verzendkosten bedragen `}
        &#8364;{" "}
        {` 
                                   ${deliveryCosts}`}
      </p>
    </div>
  );
}
