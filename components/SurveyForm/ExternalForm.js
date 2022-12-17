function ExternalForm(props) {
  return (
    <div className=" flex flex-col">
      <iframe
        id={props.id}
        className="flex flex-col "
        src={props.link + "?&embedded=true"}
        height={1000}
      >
        Loading…
      </iframe>
    </div>
  );
}

export default ExternalForm;
