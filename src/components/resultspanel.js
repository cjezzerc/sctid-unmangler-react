import { useState } from "react";

import { Card, Table, Row, Col } from "react-bootstrap";
import { ResultsButtons } from "./resultsbuttons";

// the following imports and "?url" seem to be needed to get assets to work right when make production build
import icon_pcu_url from "../assets/possible_corruption_unambig.svg?url"; 
import icon_pca_url from "../assets/possible_corruption_ambig.svg?url";
import icon_asil_url from "../assets/any_corruption_is_silent.svg?url";
import icon_acbs_url from "../assets/ambig_could_be_silent.svg?url";
import icon_nre_url from "../assets/no_reconstructions_exist.svg?url";
import icon_green_tick_url from "../assets/green_tick.svg?url";
import icon_red_cross_url from "../assets/red_cross.svg?url";

const status_icons = {
  "OutcomeCodes.POSSIBLE_CORRUPTION_UNAMBIG":
    icon_pcu_url,
    // "src/assets/possible_corruption_unambig.svg",
  "OutcomeCodes.POSSIBLE_CORRUPTION_AMBIG":
    icon_pca_url,
    // "src/assets/possible_corruption_ambig.svg",
  "OutcomeCodes.ANY_CORRUPTION_IS_SILENT":
    icon_asil_url,
    // "src/assets/any_corruption_is_silent.svg",
  "OutcomeCodes.AMBIG_COULD_BE_SILENT": 
    icon_acbs_url,
  // "src/assets/ambig_could_be_silent.svg",
  "OutcomeCodes.NO_RECONSTRUCTIONS_EXIST":
    icon_nre_url,
    // "src/assets/no_reconstructions_exist.svg",
};

const true_false_icons = {
  true: icon_green_tick_url,   //"src/assets/green_tick.svg",
  false: icon_red_cross_url,   // "src/assets/red_cross.svg",
};

export default function ResultsPanel({ analysisResults }) {
  const [flags, setFlags] = useState({
    show_rest_of_line: false,
    only_show_mangled: false,
    show_explanation: false,
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
            <b><u>{data.corruption_analysis.sctid_provided_trailing_zeroes}</u></b>
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
          <td>{data.corruption_analysis.r_cid_stem}<b><u>{data.corruption_analysis.r_cid_trailing_zeroes}</u></b></td>
          <td>{data.corruption_analysis.r_cid_pt}</td>
          <td>{data.corruption_analysis.r_did_stem}<b><u>{data.corruption_analysis.r_did_trailing_zeroes}</u></b></td>

          <td>{data.corruption_analysis.r_did_term}</td>
        </tr>
      );
    }
  });

  const table_headers = (() => (
    <tr>
      <th>Code(SCTID)</th>
      {flags.show_rest_of_line && <th>Rest of line</th>}
      <th>Valid format code?</th>
      <th>Status</th>
      {flags.show_explanation && <th>Explanation</th>}
      <th>Reconstructed Concept Id</th>
      <th>Reconstructed Concept Id PT</th>
      <th>Reconstructed Description Id</th>
      <th> Reconstructed Description Term</th>
    </tr>
  ))();

  return (
    <Card className="myapp_card" style={{ height: "87vh", overflow: "auto" }}>
      <Card.Header className="myapp_card_header_2">
        Analysis
      </Card.Header>
      <Card.Body>
        <Row className="align-items-center" style={{ margin: "3px" }}>
          <ResultsButtons setFlags={setFlags} flags={flags}></ResultsButtons>
        </Row>

        <Row>
          <div className="tableFixHead">
            {/* <table> */}
            <Table striped bordered className="smaller_font">
              <thead>{table_headers}</thead>
              <tbody>{table_results_data}</tbody>
            </Table>
            {/* </table> */}
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
}
