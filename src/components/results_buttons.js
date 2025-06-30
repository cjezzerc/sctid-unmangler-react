import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function ConceptsToShowButtons({ setFlags, flags, inputsAsRun }) {
  function handleChange(event) {
    setFlags({ ...flags, concepts_to_show: event.target.value });
  }

  return (
    <Form.Group
      style={{
        border: "solid",
        borderWidth: "3px",
        borderColor: "lightgray",
        borderRadius: "10px",
        padding: "7px",
        marginBottom: "10px",
      }}
    >
      <div style={{ display: "inline", paddingRight: "10px" }}>
        Lines to show:
      </div>
      <Form.Check
        inline
        label="All"
        name="group1"
        type={"checkbox"}
        checked={flags.concepts_to_show == "all"}
        id={"all"}
        value={"all"}
        onChange={handleChange}
      />
      <Form.Check
        inline
        label="Only corrupted"
        name="group1"
        type={"checkbox"}
        checked={flags.concepts_to_show == "mangled_non_silent"}
        id={"mangled_non_silent"}
        value={"mangled_non_silent"}
        onChange={handleChange}
      />
      <Form.Check
        inline
        label="Only corrupted (show silent)"
        name="group1"
        type={"checkbox"}
        checked={flags.concepts_to_show == "mangled"}
        id={"mangled"}
        value={"mangled"}
        onChange={handleChange}
      />
      <Form.Check
        inline
        label="Only invalid"
        name="group1"
        type={"checkbox"}
        checked={flags.concepts_to_show == "invalid"}
        id={"invalid"}
        value={"invalid"}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export function ResultsButtons({
  setFlags,
  flags,
}) {
  return (
    <Form>
      <Row className="align-items-center">
        <Col xs="auto">
          <ConceptsToShowButtons
            setFlags={setFlags}
            flags={flags}
          ></ConceptsToShowButtons>
        </Col>
        </Row><Row>
        <Col xs="auto">
        </Col>
      </Row>
    </Form>
  );
}
