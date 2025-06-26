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

export function RestOfLineSwitch({ setFlags, flags }) {
  function handleClick(event) {
    setFlags({ ...flags, show_rest_of_line: event.target.checked });
  }

  return (
    <Form.Check
      type="checkbox"
      id="switch-rest-of-line"
      label="Show rest of each input line"
      defaultChecked={flags.show_rest_of_line}
      onClick={handleClick}
    />
  );
}

export function ExplanationSwitch({ setFlags, flags }) {
  function handleClick(event) {
    setFlags({ ...flags, show_explanation: event.target.checked });
  }

  return (
    <Form.Check
      type="checkbox"
      id="switch-explanation"
      label="Show explanations"
      defaultChecked={flags.show_explanation}
      onClick={handleClick}
    />
  );
}

// export function RefreshRequiredMessage({
//   inputsAsRun,
//   ignoreDescriptions,
//   enteredData,
// }) {
//   if (
//     ignoreDescriptions != inputsAsRun.ignoreDescriptions ||
//     enteredData != inputsAsRun.enteredData
//   ) {
//     return <span style={{display:"inline"}}> Click "Check codes" to refresh </span>;
//   }
// }

export function ResultsButtons({
  setFlags,
  flags,
  inputsAsRun,
  ignoreDescriptions,
  enteredData
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
          {/* <RestOfLineSwitch
            setFlags={setFlags}
            flags={flags}
          ></RestOfLineSwitch>
          <Col xs="auto"></Col> */}
          {/* <ExplanationSwitch
            setFlags={setFlags}
            flags={flags}
          ></ExplanationSwitch> */}
          {/* <RefreshRequiredMessage
            inputsAsRun={inputsAsRun}
            ignoreDescriptions={ignoreDescriptions}
            enteredData={enteredData}
          ></RefreshRequiredMessage> */}
        </Col>
      </Row>
    </Form>
  );
}
