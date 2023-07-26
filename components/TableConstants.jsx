import { Button, ButtonGroup } from "react-bootstrap";
import { Delete, Edit, Eye } from "react-feather";

// Sorting Screen
const viewPDFHandler = (e, id) => {
  e.preventDefault();
  let params = `toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`;
  window.open(
    "https://www.africau.edu/images/default/sample.pdf",
    "_blank",
    params
  );
};

export const TBL_SORTING = [
  {
    name: "No",
    width: "60px",
    selector: (row) => row.no,
  },
  {
    name: "File Name",
    selector: (row) => row.fileName,
  },
  {
    name: "Date",
    width: "300px",
    selector: (row) => row.date,
  },
  {
    name: "Actions",
    cell: (row) => (
      <>
        <ButtonGroup aria-label="action">
          <Button
            size="sm"
            id={row.no}
            onClick={(e) => viewPDFHandler(e, row.no)}
            variant="secondary"
          >
            <Eye size="12px" />
          </Button>
          <Button size="sm" id={row.no} variant="primary">
            <Edit size="12px" />
          </Button>
          <Button size="sm" id={row.no} variant="danger">
            <Delete size="12px" />
          </Button>
        </ButtonGroup>
      </>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

export const TBL_SEARCH = [
  {
    name: "Application No",
    selector: (row) => row.appNo,
  },
  {
    name: "Account No",
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
    name: "Assign",
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
    name: "BRN",
    selector: (row) => row.brn,
  },
];
