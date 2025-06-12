import { useState } from "react";

import { Card, Table, Row, Col } from "react-bootstrap";
import { ResultsButtons } from "./resultsbuttons";

export default function ResultsPanel({ analysisResults }) {
  const [flags, setFlags] = useState({
    show_rest_of_line: false,
    only_show_mangled: false,
    concepts_to_show: "mangled_non_silent", // "all"|"invalid"|"mangled"|"mangled_non_silent"
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
      ].includes(data.corruption_analysis.outcome_code) &&
        flags.concepts_to_show == "mangled") ||
        ([
        "OutcomeCodes.POSSIBLE_CORRUPTION_UNAMBIG",
        "OutcomeCodes.POSSIBLE_CORRUPTION_AMBIG",
        "OutcomeCodes.AMBIG_COULD_BE_SILENT",
      ].includes(data.corruption_analysis.outcome_code) &&
        flags.concepts_to_show == "mangled_non_silent")
    ) {
      return (
        <tr key={data.id}>
          <td>{data.corruption_analysis.sctid_provided}</td>
          {flags.show_rest_of_line && <td>{data.other_data.rest_of_line}</td>}
          <td>{yes_no[!data.corruption_analysis.validity]}</td>
          <td>
            {data.corruption_analysis.outcome_code.replace("OutcomeCodes.", "")}
          </td>
          <td>{data.corruption_analysis.r_cid}</td>
          <td>{data.corruption_analysis.r_cid_pt}</td>
          <td>{data.corruption_analysis.r_did}</td>
          <td>{data.corruption_analysis.r_did_term}</td>
        </tr>
      );
    }
  });

  const table_headers = (() => (
    <tr>
      <th>Code(SCTID)</th>
      {flags.show_rest_of_line && <th>Rest of input row</th>}
      <th>Invalid code?</th>
      <th>Mangling possible?</th>
      <th>Reconstructed Concept Id</th>
      <th>Reconstructed Concept Id PT</th>
      <th>Reconstructed Description Id</th>
      <th>Reconstructed Description Term</th>
    </tr>
  ))();

  return (
    <Card className="myapp_card" style={{ height: "88vh", overflow: "auto" }}>
      <Card.Header className="myapp_card_header_2">
        Corruption Analysis
      </Card.Header>
      <Card.Body>
        <Row className="align-items-center" style={{ margin: "3px" }}>
          <ResultsButtons setFlags={setFlags} flags={flags}></ResultsButtons>
        </Row>
        <Table striped bordered responsive>
          <thead>{table_headers}</thead>
          <tbody>{table_results_data}</tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
