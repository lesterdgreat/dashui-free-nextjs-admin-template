import { Fragment } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";

const Select2 = (props) => {
  const styles = {
    control: (base) => ({
      ...base,
      height: 31,
      minHeight: 31,
    }),
  };

  return (
    <Fragment>
      <Form.Label htmlFor={props.name}>{props.label}</Form.Label>
      <Select
        styles={styles}
        name={props.name}
        options={props.options}
      ></Select>
    </Fragment>
  );
};

export default Select2;
