import { Alert } from "react-bootstrap";

const AlertCustom = (props) => {
  return (
    <div
      style={{ position: "absolute", top: 10, left: 300, right: 50, zIndex: 999 }}
    >
      <Alert
        variant={props.variant}
        show={props.show}
        className="w-100 mt-3 ml-3"
      >
        {props.message}
      </Alert>
    </div>
  );
};

export default AlertCustom;
