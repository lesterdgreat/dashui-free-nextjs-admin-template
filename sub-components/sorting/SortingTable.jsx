"use client";
import { Button, ButtonGroup, Card, Col } from "react-bootstrap";
import { Delete, Edit, Eye } from "react-feather";
import DataTableResult from "components/bootstrap/DataTableResult";
import { Fragment, useCallback, useEffect, useState } from "react";
import CustomAlert from "components/bootstrap/CustomAlert";

const SortingTable = (props) => {
  const [isCreateSuccess, setIsCreateSuccess] = useState(false);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [appNo, setAppNo] = useState("");

  {
    /** Dummy generation of Application number */
  }
  function randomAppNo() {
    var applicationNo = Math.floor(Math.random() * 9000000000) + 1000000000;
    console.log("app number: " + applicationNo);
    return applicationNo;
  }

  {
    /** View PDF by URL */
  }
  const viewApplication = (e, row) => {
    e.preventDefault();
    // Resize to make pdf viewer in center
    const y = window.top.outerHeight / 2 + window.top.screenY - 100 / 2;
    const x = window.top.outerWidth / 2 + window.top.screenX - 200 / 2;
    let params = `toolbar=no, location=no, directories=no, status=no, menubar=no, 
    scrollbars=no, resizable=no,copyhistory=no,width=${
      y + 300
    },height=${x},top=${y}, 
    left=${x - 200}`;
    window.open(row.url, "_blank", params);
  };

  {
    /** Create Application */
  }
  const createApplication = useCallback(async (e, row) => {
    console.log("create application " + isCreateSuccess);
    if (isCreateSuccess) return;
    // send the actual request
    // await API.sendRequest()
    setAppNo(randomAppNo());
    setMessage("Successfully created! Application number " + appNo);
    setIsCreateSuccess(true);
  });

  const deleteApplication = useCallback(async (e, row) => {
    if (isDeleteSuccess) return;
    // send the actual request
    // await API.sendRequest()
    setMessage("Successfully deleted record");
    setIsDeleteSuccess(true);
  });

  useEffect(() => {
    if (isCreateSuccess) {
      const timer = setTimeout(() => {
        setIsCreateSuccess(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (isDeleteSuccess) {
      const timer = setTimeout(() => {
        setIsDeleteSuccess(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  {
    /** Table Format */
  }
  const TBL_SORTING = [
    {
      name: "No",
      width: "60px",
      selector: (row) => row.no,
    },
    {
      name: "File Name",
      selector: (row) => row.fileName,
    },
    {
      name: "Date",
      width: "300px",
      selector: (row) => row.date,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <ButtonGroup aria-label="action">
            <Button
              size="sm"
              id={row.no}
              onClick={(e) => viewApplication(e, row)}
              variant="secondary"
            >
              <Eye size="12px" />
            </Button>
            <Button
              size="sm"
              id={row.no}
              onClick={(e) => createApplication(e, row)}
              variant="primary"
            >
              <Edit size="12px" />
            </Button>
            <Button
              size="sm"
              id={row.no}
              onClick={(e) => deleteApplication(e, row)}
              variant="danger"
            >
              <Delete size="12px" />
            </Button>
          </ButtonGroup>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <Fragment>
      <CustomAlert variant="success" message={message} show={isCreateSuccess} />
      <CustomAlert variant="danger" message={message} show={isDeleteSuccess} />
      <Col>
        <Card>
          <Card.Header as="h5" className="text-white card-header">
            Sorting
          </Card.Header>
          <Card.Body>
            {/** Sorting Table */}
            <DataTableResult columns={TBL_SORTING} data={props.data} />
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SortingTable;
