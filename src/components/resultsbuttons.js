import { useState } from "react";

import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

// function toggleFlag(flag, flags, setFlags) {
//   setFlags({
//     ...flags,
//     [flag]:!flags[flag]
//   })
// }

// export function ToggleRestOfLineButton({setFlags, flags}) {

//   function handleClick() {
//     console.log("toggle rest of line button clicked")
//     toggleFlag("show_rest_of_line", flags, setFlags)
//   }

//   return(
//     <Button variant="secondary" className="myapp_button"  onClick={handleClick}>
//       {!flags.show_rest_of_line &&
//         "Show rest of line"
//       }
//       {flags.show_rest_of_line &&
//         "Hide rest of line"
//       }
//     </Button>
//   )
// }

// export function ConceptsToShowButtonGroup({setFlags, flags}) {
//   const [value, setValue] = useState("all");

//   const handleChange = (val, event) => setFlags({...flags, "concepts_to_show":val});

//   return (
//     <ToggleButtonGroup type="radio" name="options" value={flags["concepts_to_show"]}  onChange={handleChange}>
//       <ToggleButton id="tbg-btn-1" className='myapp_toggle' value={"all"} >
//         Show all
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-2" className='myapp_toggle' value={"invalid"} >
//         Show invalid
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-3" className='myapp_toggle' value={"mangled"} >
//         Show mangled
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }
function ConceptsToShowButtons({ setFlags, flags }) {
  function handleChange(event) {
    setFlags({ ...flags, concepts_to_show: event.target.value });
  }

  return (
    <Form.Group
      onChange={handleChange}
      style={{
        border: "solid",
        borderWidth: "3px",
        borderColor: "gray",
        borderRadius: "10px",
        padding: "7px",
        marginBottom:"10px",
      }}
    >
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
      id="custom-switch"
      label="Show rest of input line"
      defaultChecked={flags.show_rest_of_line}
      onClick={handleClick}
    />
  );
}

export function ResultsButtons({ setFlags, flags }) {
  return (
    <Form>
      <Row className="align-items-center">
        <Col xs="auto">
          <ConceptsToShowButtons
            setFlags={setFlags}
            flags={flags}
          ></ConceptsToShowButtons>
        </Col>
        <Col xs="auto">
          <RestOfLineSwitch
            setFlags={setFlags}
            flags={flags}
          ></RestOfLineSwitch>
        </Col>
      </Row>
    </Form>
  );
}
