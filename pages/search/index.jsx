import { Container } from "react-bootstrap";
import SearchFormCard from "sub-components/search/SearchFormCard";
import SearchResultTable from "sub-components/search/SearchResultTable";

const SearchScreen = () => {
  return (
    <Container fluid className="p-6">
      {/* Search Form Card */}
      <SearchFormCard />
      {/* Search Result Table */}
      <SearchResultTable />
    </Container>
  );
};

export default SearchScreen;
