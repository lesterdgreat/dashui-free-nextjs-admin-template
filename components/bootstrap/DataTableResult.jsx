import { Card, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";

const DataTableResult = (props) => {
  const tableCustomStyles = {
    headRow: {
      style: {
        color: "#FFFFFF",
        backgroundColor: "#FFA500",
        fontSize: "13px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };

  return (
    <Col xl={12} lg={12} md={12} xs={12}>
      <Card>
        <Card.Body>
          <Col>
            <DataTable
              columns={props.columns}
              customStyles={tableCustomStyles}
              data={props.data}
              pagination
            />
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DataTableResult;
