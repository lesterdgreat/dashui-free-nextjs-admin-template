import { Container } from "react-bootstrap";
import SearchFormCard from "sub-components/search/SearchFormCard";
import SearchResultTable from "sub-components/search/SearchResultTable";

const SearchScreen = () => {

  // Dummy Data
  const data = [
    {
      appNo: "09222209890",
      acctNo: "",
      loanType: "CONVENTIONAL ACT GOODS",
      status: "UNDER PROCESSING",
      queue: "DATA ENTRY",
      assignTo: "",
      cifNo: "911000195",
      compName: "JOLLIBEEMEH",
      brn: "2021020001293",
    },
    {
      appNo: "09222209891",
      acctNo: "",
      loanType: "CONVENTIONAL ACT GOODS",
      status: "UNDER PROCESSING",
      queue: "DATA ENTRY",
      assignTo: "",
      cifNo: "911000196",
      compName: "MCDOGA",
      brn: "2021020001291",
    },
  ];

  return (
    <Container fluid className="p-6">
      {/* Search Form Card */}
      <SearchFormCard />
      {/* Search Result Table */}
      <SearchResultTable data={data} />
    </Container>
  );
};

export default SearchScreen;
