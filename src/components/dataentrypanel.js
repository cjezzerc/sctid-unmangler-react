import { useState } from "react";

import { Card, Form, Button, Row, Col } from "react-bootstrap";

export default function DataEntryPanel({
  setAnalysisResults,
  enteredData,
  setEnteredData,
  exampleData,
}) {
  const [ignoreDescriptions, setIgnoreDescriptions] = useState(true);

  function IgnoreDescriptionSwitch() {
    function handleClick(event) {
      setIgnoreDescriptions(event.target.checked);
      console.log(ignoreDescriptions);
    }
    return (
      <Form.Check
        inline
        type="checkbox"
        label="Ignore Description IDs"
        defaultChecked={ignoreDescriptions}
        onClick={handleClick}
      />
    );
  }


  function submitfunction() {
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
    console.log("Clicked get example data button");
    setEnteredData(exampleData);
  }

  return (
    <Card className="myapp_card" style={{ height: "88vh", overflow: "auto" }}>
      <Card.Header className="myapp_card_header_2">Data Entry</Card.Header>
      <Card.Body>
        <Row style={{ padding: "10px" }}>
          <Col className="align-self-center">
            <div>
              Enter or paste SNOMED codes in box below, then click "Check Codes". The code must be
              the first thing on each line. Text such as the preferred term can come after
              the code. Pasting a couple of columns from a spreadsheet should
              work, as should entering data in the form such as{" "}
              <i> 125605004 |Fracture of bone (disorder)|</i>
            </div>
          </Col>
        </Row>
        <Row style={{ padding: "10px" }}>
          <Col xs="auto">
            <div
              style={{
                border: "solid",
                borderWidth: "3px",
                borderColor: "lightgray",
                borderRadius: "10px",
                padding: "7px",
                marginBottom: "10px",
                width: "auto",
              }}
            >
              <Button
                variant="outline-secondary"
                className="myapp_button"
                onClick={submitfunction}
              >
                Check Codes
              </Button>
              <IgnoreDescriptionSwitch></IgnoreDescriptionSwitch>
            </div>
          </Col>

          <Col xs="auto" className="align-self-center">
            <Button
              variant="outline-secondary"
              className="myapp_button"
              style={{ marginBottom: "10px" }}
              onClick={get_example_data}
            >
              Get example data
            </Button>
          </Col>
          <Col xs="auto" className="align-self-center">
            <Button
              variant="outline-secondary"
              className="myapp_button"
              style={{ marginBottom: "10px" }}
              href={"help_test.pdf"}
              target="#">         
              Help
            </Button>
          </Col>
        </Row>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              className="smaller_font"
              rows={20}
              placeholder="Enter/paste data here (or click the 'Get Example Data' button).."
              value={enteredData}
              onChange={(event) => setEnteredData(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
