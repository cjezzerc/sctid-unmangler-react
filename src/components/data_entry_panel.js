import { Card, Form, Button, Row, Col } from "react-bootstrap";

export default function DataEntryPanel({
  ignoreDescriptions,
  setIgnoreDescriptions,
  setAnalysisResults,
  enteredData,
  setEnteredData,
  inputsAsRun,
  setInputsAsRun,
}) {

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
  }

  function do_check() {
    setInputsAsRun({
      enteredData: enteredData,
      ignoreDescriptions: ignoreDescriptions,
    });
    // requires line in .env.local such as
    // VITE_API_URL='http://localhost:8000'
    fetch(import.meta.env.VITE_API_URL + "/receive_entered_data", {
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

  return (
    <Card className="myapp_card" >
      <Card.Header className="myapp_card_header_2">Data Entry</Card.Header>
      <Card.Body>
        <Row style={{ padding: "10px" }}>
          <Col xs="auto" className="align-self-center">
            <Button
              variant="outline-secondary"
              className="myapp_button"
              onClick={do_check}
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
        </Row>
        <Form>
          {/* <Form.Group className="mb-3"> */}
            <Form.Control
              as="textarea"
              className="smaller_font"
              rows={25}
              // important that next line formatted with explicit linebreak
              // so that get line break in textarea
              placeholder="Enter/paste data here
(or select an example data set)"
              value={enteredData}
              onChange={data_entered_function}
              style={{
                borderWidth: "5px",
                fontFamily: "monospace",
                whiteSpace: "pre",
                tabSize: 20,
              }}
            />
          {/* </Form.Group> */}
        </Form>
      </Card.Body>
    </Card>
  );
}
