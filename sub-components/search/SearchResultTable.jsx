import { Card, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";

const SearchResultTable = (props) => {
  // dummy columns
  const columns = [
    {
      name: "Application Number",
      selector: (row) => row.appNo,
    },
    {
      name: "Account Number",
      selector: (row) => row.acctNo,
    },
    {
      name: "Loan Type",
      selector: (row) => row.loanType,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Queue",
      selector: (row) => row.queue,
    },
    {
      name: "Assign To",
      selector: (row) => row.assignTo,
    },
    {
      name: "CIF No",
      selector: (row) => row.cifNo,
    },
    {
      name: "Company Name",
      selector: (row) => row.compName,
    },
    {
      name: "New BRN",
      selector: (row) => row.brn,
    },
  ];

  return (
    <Col xl={12} lg={12} md={12} xs={12}>
      <Card>
        <Card.Body>
          <Col>
            <DataTable columns={columns} data={props.data} pagination />
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SearchResultTable;
