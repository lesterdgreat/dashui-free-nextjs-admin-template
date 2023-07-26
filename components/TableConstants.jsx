import { Button, ButtonGroup } from "react-bootstrap";
import { Delete, Edit, Eye, ShoppingBag } from "react-feather";

export const TBL_SORTING = [
  {
    name: "No",
    selector: (row) => row.no,
  },
  {
    name: "File Name",
    selector: (row) => row.fileName,
  },
  {
    name: "Date",
    selector: (row) => row.date,
  },
  {
    name: "Actions",
    cell: (row) => (
      <>
        <ButtonGroup aria-label="action">
          <Button size="sm" variant="secondary">
            <Eye size="12px" />
          </Button>
          <Button size="sm" variant="primary">
            <Edit size="12px" />
          </Button>
          <Button size="sm" variant="danger">
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
