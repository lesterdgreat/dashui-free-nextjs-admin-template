import { Container } from "react-bootstrap";
import SearchFormCard from "sub-components/search/SearchFormCard";

const SearchScreen = () => {
  return (
    <Container fluid className="p-6">
      {/* Search Form Card */}
      <SearchFormCard />
    </Container>
  );
};

export default SearchScreen;
