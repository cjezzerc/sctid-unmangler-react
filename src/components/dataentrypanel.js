import { Card, Form, Button } from "react-bootstrap";

export default function DataEntryPanel({
  setAnalysisResults,
  enteredData,
  setEnteredData,
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

  return (
    <Card className="myapp_card" style={{ height: "88vh", overflow: "auto" }}>
      <Card.Header className="myapp_card_header_2">Data entry</Card.Header>
      <Card.Body>
        <Button variant="primary" onClick={submit_ignore_did_flag_false}>
          Check codes
        </Button>
        <Button variant="primary" onClick={submit_ignore_did_flag_true}>
          Check codes (no description IDs)
        </Button>
        <div> Paste codes in box below </div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Paste in this box</Form.Label> */}
            <Form.Control
              as="textarea"
              rows={20}
              defaultValue={enteredData}
              onChange={(event) => setEnteredData(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
