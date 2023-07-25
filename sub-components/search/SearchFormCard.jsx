import { Card, Col, Row, Form, Button } from "react-bootstrap";
import Select from "react-select";

const SearchFormCard = () => {
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 31,
      minHeight: 31,
    }),
  };
  // dummy loan type
  const loanType = [
    { value: "SME", label: "SME" },
    { value: "BIZ", label: "Business Card" },
  ];

  // dummy status type
  const statusType = [
    { value: "ACT", label: "Active" },
    { value: "INA", label: "Inactive" },
  ];

  // dummy queue type
  const queueType = [
    { value: "DE", label: "Data Entry" },
    { value: "VE", label: "Verification" },
    { value: "AS", label: "Assessment" },
  ];

  return (
    <Col xl={12} lg={12} md={12} xs={12} className="mb-6">
      <Card>
        <Card.Header as="h4" className="text-white card-header">
          Enquiry
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xl={6} lg={6} md={12} xs={12}>
              <Form.Group row className="mb-1">
                <Form.Label htmlFor="appNo">Application No</Form.Label>
                <Form.Control size="sm" type="text" id="appNo" name="appNo" />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label htmlFor="acctNo">Account No</Form.Label>
                <Form.Control size="sm" type="text" id="acctNo" name="acctNo" />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label htmlFor="acctNo">Loan Type</Form.Label>
                <Select styles={customStyles} options={loanType}></Select>
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label htmlFor="acctNo">Status</Form.Label>
                <Select styles={customStyles} options={statusType}></Select>
              </Form.Group>
            </Col>
            <Col xl={6} lg={6} md={12} xs={12}>
              <Form.Group className="mb-1">
                <Form.Label htmlFor="cifNo">CIF No</Form.Label>
                <Form.Control size="sm" type="text" id="cifNo" name="cifNo" />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label htmlFor="compName">Company Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  id="compName"
                  name="compName"
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label htmlFor="brn">BRN</Form.Label>
                <Form.Control size="sm" type="text" id="brn" name="brn" />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label htmlFor="queue">Queue</Form.Label>
                <Select styles={customStyles} options={queueType}></Select>
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center mt-2">
            <Button variant="primary" className="btn-primary me-1">
              Search
            </Button>
            <Button variant="secondary" className="me-1">
              Clear
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SearchFormCard;
