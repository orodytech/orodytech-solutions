import React from "react";
import clientOne from "../../assets/clients/client1.png";
import clientTwo from "../../assets/clients/client2.png";
import clientThree from "../../assets/clients/client3.png";
import clientFour from "../../assets/clients/client4.png";
import clientFive from "../../assets/clients/client5.png";

function Clients() {
  return (
    <>
      <div className="client__images">
        <img src={clientOne} className="client__one" alt="client ratings" />
        <img src={clientTwo} className="client__two" alt="client ratings" />
        <img src={clientThree} className="client__three" alt="client ratings" />
        <img src={clientFour} className="client__four" alt="client ratings" />
        <img src={clientFive} className="client__five" alt="client ratings" />
      </div>
    </>
  );
}

export default Clients;
