import { Alert } from "react-bootstrap";
import {
  CheckCircleFill,
  ExclamationCircle,
  ExclamationTriangleFill,
} from "react-bootstrap-icons";

function getIcon(variant) {
  if (variant == "primary")
    return <ExclamationCircle size={25} className="me-1" />;
  else if (variant == "success")
    return <CheckCircleFill size={25} className="me-1" />;
  else return <ExclamationTriangleFill size={25} className="me-1" />;
}

const CustomAlert = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        left: 300,
        right: 50,
        zIndex: 999,
      }}
    >
      <Alert
        variant={props.variant}
        show={props.show}
        className="w-100 mt-3 ml-3"
      >
        {getIcon(props.variant)} &nbsp;
        {props.message}
      </Alert>
    </div>
  );
};

export default CustomAlert;
