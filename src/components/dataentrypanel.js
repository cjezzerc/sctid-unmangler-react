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
        id="switch-ignore-descriptions"
        label="Ignore Description IDs"
        defaultChecked={ignoreDescriptions}
        onClick={handleClick}
      />
    );
  }

  function submitfunction() {
    fetch("http://localhost:8000/receive_entered_data", {
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
    console.log("CLicked get example data button");
    // console.log(exampleData)
    setEnteredData(exampleData);
  }

  return (
    <Card className="myapp_card" style={{ height: "88vh", overflow: "auto" }}>
      <Card.Header className="myapp_card_header_2">Data Entry</Card.Header>
      <Card.Body>
        <Row style={{ padding: "10px" }}>
          <Col className="align-self-center">
            <div>
              Paste codes in box below, then choose an action. The codes must be
              the first thing on each line. Text such as terms can come after
              the codes. Pasting a couple of columns from a spreadsheet should
              work. As should data entered in the form such as{" "}
              <i> 125605004 |Fracture of bone (disorder)|</i>
            </div>
          </Col>
        </Row>
        <Row style={{ padding: "10px" }}>
          <Col xs="auto">
            <Form.Group
              // onChange={handleChange}
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
              style={{ display: "inline", width: "auto", marginRight: "10px", }}
              variant="outline-secondary"
              className="myapp_button"
              onClick={submitfunction}
            >
              Check Codes!
            </Button>

              <IgnoreDescriptionSwitch></IgnoreDescriptionSwitch>
            </Form.Group>
          </Col>
        

          <Col xs="auto" className="align-self-center">
            <Button
              style={{ display: "inline", width: "auto", marginBottom: "10px" }}
              variant="outline-secondary"
              className="myapp_button"
              onClick={get_example_data}
            >
              Get example data
            </Button>
          </Col>
        </Row>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Enter/paste data here .."
              rows={20}
              value={enteredData}
              onChange={(event) => setEnteredData(event.target.value)}
              className="smaller_font"
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
