"use client";
import { Button, ButtonGroup, Card, Col } from "react-bootstrap";
import { Delete, Edit, Eye } from "react-feather";
import DataTableResult from "components/bootstrap/DataTableResult";
import { Fragment, useCallback, useEffect, useState } from "react";
import AlertCustom from "components/bootstrap/AlertCustom";

const SortingTable = (props) => {
  const [show, setShow] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
  const viewPDFHandler = (e, row) => {
    e.preventDefault();
    let params = `toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`;
    window.open(row.url, "_blank", params);
  };

  {
    /** Create Application */
  }
  const createApplication = useCallback(
    async (e, row) => {
      if (isSuccess) return;
      // update state
      setIsSuccess(true);
      // send the actual request
      // await API.sendRequest()
      // once the request is sent, update state again
      // setIsSuccess(false);
      setAppNo(randomAppNo());
    },
  );

  useEffect(() => {
    console.log('is success?' + isSuccess);
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
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
              onClick={(e) => viewPDFHandler(e, row)}
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
            <Button size="sm" id={row.no} variant="danger">
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
      <AlertCustom
        variant="success"
        message={"Successfully created! Application number " + appNo}
        show={isSuccess}
      />
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
