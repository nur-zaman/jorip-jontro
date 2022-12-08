import React from "react";

function ExternalForm(props) {
  return (
    <div className="flex-grow">
      <iframe
        id={props.id}
        className="w-full  "
        src={props.link + "?&embedded=true"}
        height={1000}
      >
        Loading…
      </iframe>
    </div>
  );
}

export default ExternalForm;
