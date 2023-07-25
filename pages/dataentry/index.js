import { Badge, Col, Container, Row } from "react-bootstrap";
import { PageHeading } from "widgets";

const DataEntryScreen = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Data Entry" />
    </Container>
  );
};

export default DataEntryScreen;
