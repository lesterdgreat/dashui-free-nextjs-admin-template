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
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      no: 2,
      fileName: "SME_00011831911.PDF",
      date: "2023/07/26",
      url: "https://www.africau.edu/images/default/sample.pdf"
    },
    {
      no: 3,
      fileName: "SME_00011890191.PDF",
      date: "2023/07/25",
      url: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf"
    },
    {
      no: 4,
      fileName: "SME_00011890192.PDF",
      date: "2023/08/21",
      url: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"
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
