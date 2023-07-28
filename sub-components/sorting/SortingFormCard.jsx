import { Col, Card } from "react-bootstrap";
import SortingTable from "./SortingTable";

const SortingFormCard = () => {
  // Dummy Data
  const data = [
    {
      no: 1,
      fileName: "SME_00011837124.PDF",
      date: "2023/07/26",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      no: 2,
      fileName: "SME_00011831911.PDF",
      date: "2023/07/26",
      url: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      no: 3,
      fileName: "SME_00011890191.PDF",
      date: "2023/07/25",
      url: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
    },
    {
      no: 4,
      fileName: "SME_00011890192.PDF",
      date: "2023/08/21",
      url: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
    },
  ];

  return <SortingTable data={data} />;
};

export default SortingFormCard;
