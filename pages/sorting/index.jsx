import { Container } from "react-bootstrap";
import SortingFormCard from "sub-components/sorting/SortingFormCard";

const SortingScreen = () => {
  return (
    <Container fluid className="p-6">
      {/* Sorting Form Card */}
      <SortingFormCard />
    </Container>
  );
};

export default SortingScreen;
