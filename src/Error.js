const Error = (props) => {
    if (props.data === "") {
      return <></>;
    } else {
      return <div> {props.data} </div>;
    }
  };
  
  export default Error;
  