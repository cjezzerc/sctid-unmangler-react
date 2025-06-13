import { Card, Form, Button, Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function DataEntryPanel({
  setAnalysisResults,
  enteredData,
  setEnteredData,
  exampleData,
}) {
  function submit_ignore_did_flag_true() {
    submitfunction(true);
  }

  function submit_ignore_did_flag_false() {
    submitfunction(false);
  }

  function submitfunction(did_ignore_flag) {
    fetch("http://localhost:8000/receive_entered_data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entered_text: enteredData,
        did_ignore_flag: did_ignore_flag,
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

  const renderTooltipPasteText = (props) =>
    true ? (
      <Tooltip id="button-tooltip-paste-text" {...props}>
        The codes must be the first thing on each line. Text such as terms can
        come after the codes. &nbsp;{" "}
        <a href="https://example.com/" target="#">
          (learn more)
        </a>
      </Tooltip>
    ) : (
      <span></span>
    );

  const renderTooltipOnlyCID = (props) =>
    true ? (
      <Tooltip id="button-tooltip-only-cid" {...props}>
        If you are sure you only are dealing with Concept IDs then this option
        simplifies the possibilities &nbsp;{" "}
        <a href="https://example.com/" target="#">
          (learn more)
        </a>
      </Tooltip>
    ) : (
      <span></span>
    );

  const renderTooltipBoth = (props) => (
    <Tooltip id="button-tooltip-both" {...props}>
      If you think some of your codes are Description IDs then use this option
      &nbsp;{" "}
      <a href="https://example.com/" target="#">
        (learn more)
      </a>
    </Tooltip>
  );

  const renderTooltipExampleData = (props) => (
    <Tooltip id="button-tooltip-example-data" {...props}>
      This will replace the data in the data entry area with example data &nbsp;{" "}
      <a href="https://example.com/" target="#">
        (learn more)
      </a>
    </Tooltip>
  );

  return (
    <Card className="myapp_card" style={{ height: "88vh", overflow: "auto" }}>
      <Card.Header className="myapp_card_header_2">Data Entry</Card.Header>
      <Card.Body>
        <Row>
          <Col className="align-self-center">
            <OverlayTrigger
              delay={{ show: 250, hide: 500 }}
              overlay={renderTooltipPasteText}
            >
              <div style={{ fontWeight: "bold" }}>
                Paste codes in box below, then press one of the two check
                buttons.
              </div>
            </OverlayTrigger>
          </Col>
          <Col className="align-self-center">
            <OverlayTrigger
              delay={{ show: 250, hide: 500 }}
              overlay={renderTooltipOnlyCID}
            >
              <Button
                className="setchks-big-green-btn"
                onClick={submit_ignore_did_flag_true}
              >
                Check codes
                <div className="much_smaller_font">
                  (only reconstruct as Concept IDs)
                </div>
              </Button>
            </OverlayTrigger>
          </Col>
          <Col className="align-self-center">
            <OverlayTrigger
              delay={{ show: 250, hide: 500 }}
              overlay={renderTooltipBoth}
            >
              <Button
                variant="primary"
                className="setchks-big-green-btn"
                onClick={submit_ignore_did_flag_false}
              >
                Check codes{" "}
                <div className="much_smaller_font">
                  (reconstruct as Concept and Description IDs)
                </div>
              </Button>
            </OverlayTrigger>
          </Col>
          <Col className="align-self-center">
            <OverlayTrigger
              delay={{ show: 250, hide: 500 }}
              overlay={renderTooltipExampleData}
            >
              <Button
                variant="primary"
                className="setchks-big-green-btn"
                onClick={get_example_data}
              >
                Get example data
              </Button>
            </OverlayTrigger>
          </Col>
        </Row>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Paste in this box</Form.Label> */}

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
