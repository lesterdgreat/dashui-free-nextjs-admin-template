import { TBL_SORTING } from "components/TableConstants";
import DataTableResult from "components/bootstrap/DataTableResult";
import { Col, Card } from "react-bootstrap";

const SortingFormCard = () => {
  // Dummy Data
  const data = [
    {
      no: 1,
      fileName: "SME_00011837124.PDF",
      date: "2023/07/26",
      actions: "",
    },
    {
      no: 2,
      fileName: "SME_00011837124.PDF",
      date: "2023/07/26",
      actions: "",
    },
  ];

  return (
    <Col>
      <Card>
        <Card.Header as="h5" className="text-white card-header">
          Sorting
        </Card.Header>
        <Card.Body>
          <DataTableResult columns={TBL_SORTING} data={data} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SortingFormCard;
