import { useState } from "react";

import { Card, Form, Button, Row, Col } from "react-bootstrap";

import {
  simple_data,
  messy_data,
  contact_dermatitis,
} from "../example_data/example_data";
import { ExampleDatasetSelector } from "./example_dataset_selector";
export default function DataEntryPanel({
  ignoreDescriptions,
  setIgnoreDescriptions,
  setAnalysisResults,
  enteredData,
  setEnteredData,
  exampleData,
  inputsAsRun,
  setInputsAsRun,
}) {
  // const [ignoreDescriptions, setIgnoreDescriptions] = useState(true);

  function IgnoreDescriptionSwitch() {
    function handleClick(event) {
      setIgnoreDescriptions(event.target.checked);
    }
    return (
      <Form.Check
        inline
        type="checkbox"
        label="Ignore Description Ids"
        defaultChecked={ignoreDescriptions}
        onClick={handleClick}
      />
    );
  }

  function data_entered_function(event) {
    setEnteredData(event.target.value);
    // setInputsAsRun({...inputsAsRun, enteredData: true})
  }

  function submitfunction() {
    setInputsAsRun({
      enteredData: enteredData,
      ignoreDescriptions: ignoreDescriptions,
    });
    // requires line in .env.local such as
    // VITE_API_URL='http://localhost:8000'
    fetch(import.meta.env.VITE_API_URL + "/receive_entered_data", {
      // fetch("http://localhost:8000/receive_entered_data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entered_text: enteredData,
        did_ignore_flag: ignoreDescriptions,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAnalysisResults(data);
      });
  }

  function get_example_data() {
    // setEnteredData(messy_data)
    // setEnteredData(contact_dermatitis)
    setEnteredData(simple_data);
    // setEnteredData(exampleData);
  }

  return (
    <Card className="myapp_card" style={{ height: "82vh", overflow: "auto" }}>
      <Card.Header className="myapp_card_header_2">Data Entry</Card.Header>
      <Card.Body>
        {/* <Row style={{ padding: "10px" }}>
          <Col className="align-self-center">
            <div>
              Enter or paste SNOMED codes in box below, then click "Check Codes"
            </div>
          </Col>
        </Row> */}
        <Row style={{ padding: "10px" }}>
          <Col xs="auto" className="align-self-center">
            {/* <div
              style={{
                border: "solid",
                borderWidth: "3px",
                borderColor: "lightgray",
                borderRadius: "10px",
                padding: "7px",
                marginBottom: "10px",
                width: "auto",
              }}
            > */}
            <Button
              variant="outline-secondary"
              className="myapp_button"
              onClick={submitfunction}
              disabled={
                ignoreDescriptions == inputsAsRun.ignoreDescriptions &&
                enteredData == inputsAsRun.enteredData
              }
            >
              Check codes
            </Button>
          </Col>

          <Col xs="auto" className="align-self-center">
            <IgnoreDescriptionSwitch></IgnoreDescriptionSwitch>
            {/* </div> */}
          </Col>

          {/* <Col  xs="auto" className="align-self-center">
            <ExampleDatasetSelector
              setEnteredData={setEnteredData}
            ></ExampleDatasetSelector>
          </Col> */}

          {/* <Col xs="auto" className="align-self-center">
            <Button
              variant="outline-secondary"
              className="myapp_button"
              style={{ marginBottom: "10px" }}
              href={"help_test.pdf"}
              target="#">         
              Help
            </Button>
          </Col> */}
        </Row>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              className="smaller_font"
              rows={25}
              // important that next line formatted with explicit linebreak
              // so that get line break in textarea
              placeholder="Enter/paste data here
(or select an example data set)"
              value={enteredData}
              // onChange={(event) => setEnteredData(event.target.value)}
              onChange={data_entered_function}
              style={{
                borderWidth: "5px",
                fontFamily: "monospace",
                whiteSpace: "pre",
                tabSize: 20,
              }}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
