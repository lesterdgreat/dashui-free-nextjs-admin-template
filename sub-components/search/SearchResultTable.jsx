import { Card, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";

const SearchResultTable = () => {
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

  // Dummy Data
  const data = [
    {
      appNo: "09222209890",
      acctNo: "",
      loanType: "CONVENTIONAL ACT GOODS",
      status: "UNDER PROCESSING",
      queue: "DATA ENTRY",
      assignTo: "",
      cifNo: "911000195",
      compName: "JOLLIBEEMEH",
      brn: "2021020001293",
    },
    {
      appNo: "09222209891",
      acctNo: "",
      loanType: "CONVENTIONAL ACT GOODS",
      status: "UNDER PROCESSING",
      queue: "DATA ENTRY",
      assignTo: "",
      cifNo: "911000196",
      compName: "MCDOGA",
      brn: "2021020001291",
    },
  ];
  return (
    <Col xl={12} lg={12} md={12} xs={12}>
      <Card>
        <Card.Body>
          <Col>
            <DataTable columns={columns} pagination />
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SearchResultTable;
