import { useState } from "react";

import { Card, Table, Row, Col } from "react-bootstrap";
import { ResultsButtons } from "./results_buttons";
import { status_icons, true_false_icons } from "../utils/outcome_icons";
import { RefreshRequiredMessage } from "./refresh_required_message";

export default function ResultsPanel({
  analysisResults,
  ignoreDescriptions,
  enteredData,
  inputsAsRun,
}) {
  const [flags, setFlags] = useState({
    show_rest_of_line: true,
    only_show_mangled: false,
    show_explanation: false,
    concepts_to_show: "all", // "all"|"invalid"|"mangled"|"mangled_non_silent"
  });
  const yes_no = { true: "YES!", false: "N" };

  const table_results_data = analysisResults.check_results.map((data) => {
    if (
      flags.concepts_to_show == "all" ||
      (!data.corruption_analysis.validity &&
        flags.concepts_to_show == "invalid") ||
      ([
        "OutcomeCodes.POSSIBLE_CORRUPTION_UNAMBIG",
        "OutcomeCodes.POSSIBLE_CORRUPTION_AMBIG",
        "OutcomeCodes.ANY_CORRUPTION_IS_SILENT",
        "OutcomeCodes.AMBIG_COULD_BE_SILENT",
      ].includes(data.corruption_analysis.outcome_code.name) &&
        flags.concepts_to_show == "mangled") ||
      ([
        "OutcomeCodes.POSSIBLE_CORRUPTION_UNAMBIG",
        "OutcomeCodes.POSSIBLE_CORRUPTION_AMBIG",
        "OutcomeCodes.AMBIG_COULD_BE_SILENT",
      ].includes(data.corruption_analysis.outcome_code.name) &&
        flags.concepts_to_show == "mangled_non_silent")
    ) {
      return (
        <tr key={data.id}>
          <td>
            {data.corruption_analysis.sctid_provided_stem}
            <b>
              <u>{data.corruption_analysis.sctid_provided_trailing_zeroes}</u>
            </b>
          </td>
          {flags.show_rest_of_line && <td>{data.other_data.rest_of_line}</td>}
          <td>
            <img
              src={true_false_icons[data.corruption_analysis.validity]}
              width="20px"
              alt=""
            />
          </td>

          <td>
            <img
              src={status_icons[data.corruption_analysis.outcome_code.name]}
              width="30px"
              alt=""
            />
          </td>
          {flags.show_explanation && (
            <td>
              {data.corruption_analysis.outcome_code.value}
              {/* {data.corruption_analysis.outcome_code.replace(
                "OutcomeCodes.",
                ""
              )} */}
            </td>
          )}
          <td>
            {data.corruption_analysis.r_cid_stem}
            <b>
              <u>{data.corruption_analysis.r_cid_trailing_zeroes}</u>
            </b>
          </td>
          <td>{data.corruption_analysis.r_cid_pt}</td>

          {!inputsAsRun.ignoreDescriptions && (
            <td>
              {data.corruption_analysis.r_did_stem}
              <b>
                <u>{data.corruption_analysis.r_did_trailing_zeroes}</u>
              </b>
            </td>
          )}
          {!inputsAsRun.ignoreDescriptions && (
            <td>{data.corruption_analysis.r_did_term}</td>
          )}
        </tr>
      );
    }
  });

  const table_headers = (() => (
    <tr>
      <th>Code(Id)</th>
      {flags.show_rest_of_line && <th>Rest of line</th>}
      <th>Valid format code?</th>
      <th>Reconstruction Status</th>
      {flags.show_explanation && <th>Explanation</th>}
      <th>Reconstructed Concept&nbsp;Id</th>
      <th>Reconstructed Concept Preferred Term</th>
      {!inputsAsRun.ignoreDescriptions && <th>Reconstructed Description&nbsp;Id</th>}
      {!inputsAsRun.ignoreDescriptions && <th> Reconstructed Description Term</th>}
    </tr>
  ))();

  return (
    <Card className="myapp_card">
      <Card.Header className="myapp_card_header_2">Analysis
        <RefreshRequiredMessage
            inputsAsRun={inputsAsRun}
            ignoreDescriptions={ignoreDescriptions}
            enteredData={enteredData}
          ></RefreshRequiredMessage>
      </Card.Header>
      <Card.Body>
        <Row className="align-items-center" style={{ margin: "3px" }}>
          <ResultsButtons
            setFlags={setFlags}
            flags={flags}
            enteredData={enteredData}
            inputsAsRun={inputsAsRun}
            ignoreDescriptions={ignoreDescriptions}
          ></ResultsButtons>
        </Row>

        <Row>
          <div className="tableFixHead">
            <Table striped bordered className="smaller_font">
              <thead>{table_headers}</thead>
              <tbody>{table_results_data}</tbody>
            </Table>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
}
