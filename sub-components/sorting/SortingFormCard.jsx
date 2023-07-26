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
    },
    {
      no: 2,
      fileName: "SME_00011831911.PDF",
      date: "2023/07/26",
    },
    {
      no: 3,
      fileName: "SME_00011890191.PDF",
      date: "2023/07/25",
    },
    {
      no: 4,
      fileName: "SME_00011890192.PDF",
      date: "2023/08/21",
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
