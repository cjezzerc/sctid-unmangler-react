import { useState } from "react";

import { Card, Form, Button, Row, Col, Table } from "react-bootstrap";

import { status_icons, true_false_icons } from "./outcome_icons";

import code_restorer_banner from "../assets/code_restorer_banner.png";
const ximg = code_restorer_banner;
import icon_pcu_url from "../assets/possible_corruption_unambig.svg?url";
const icon_pcu_url_img = icon_pcu_url;
import { ExampleDatasetSelector } from "./example_dataset_selector";


export default function HelpPanel({setEnteredData}) {
  return (
    <Card className="myapp_card" style={{ height: "82vh" }}>
      <Card.Header className="myapp_card_header_2">Help</Card.Header>
      <img
        src={ximg}
        alt="test_icon"
        style={{
          width: "40vh",
          display: "block",
          margin: "auto",
          paddingTop: "10px",
        }}
      ></img>
      <Card.Body style={{ overflow: "auto" }}>
        <Row>
          <p style={{ fontStyle: "italic" }}>
            Have your SNOMED CT codes lost a certain something - are there
            zeroes where there used to be other digits? Code-Restorer can mend
            your codes that have been corrupted by Excel!
          </p>
          <h1>QuickStart</h1>
          <ul style={{ marginLeft: "0.75rem", textAlign: "left" }}>
            <li>Select "Simple data" from this menu </li>
            <ExampleDatasetSelector setEnteredData={setEnteredData}> </ExampleDatasetSelector>
            <li>Click "Check codes" </li>
            <li>
              Inspect the analysis. Codes marked with
              <img
                src={icon_pcu_url_img}
                alt="test_icon"
                style={{
                  width: "30px",
                  display: "inline",
                  margin: "auto",
                  paddingInline: "5px",
                }}
              ></img>
              are examples of codes that have been corrupted and restored.
            </li>
          </ul>
          {/*  */}
          {/* How to load in your data */}
          {/*  */}
          <h1>How to load in your data</h1>
          <p className="p_help">
            Enter or paste a list of SNOMED codes (or even just a single code)
            in the box in the data entry panel.
          </p>
          <p className="p_help">
            Each line of entered data can contain extra text after the code. If
            you have terms (i.e. descriptions) in your entered data this can be
            useful so that you can compare the reconstructed code's preferred
            term (using the "Show rest of each input line" in the Analysis
            panel).
          </p>
          <p className="p_help">
            The app uses white space, tab characters or the "|" symbol to mark
            the end of the code. Pasting columns from a spreadsheet should work,
            as should entering data in the form such as 125605004|Fracture of
            bone (disorder)|.
          </p>
          <p className="p_help">
            The example data button will load in a set of data that shows
            various possibilities.
          </p>
          {/*  */}
          {/* How to run the check */}
          {/*  */}
          <h1>How to run the check</h1>
          <p className="p_help">
            Once the data has been entered click "Check Codes".
          </p>
          <p className="p_help">One checkbox alters how the check is run:</p>

          {/*  */}
          {/* table: data entry buttons and checkboxes */}
          {/*  */}
          <Table striped bordered className="smaller_font">
            <thead style={{ fontWeight: "bold", borderWidth: 1 }}>
              <tr>
                <td style={{ borderWidth: 3 }}> Checkbox</td>
                <td style={{ borderWidth: 3 }}> Explanation</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ignore Description Ids</td>
                <td>
                  <p className="p_help">
                    By default the app only attempts to reconstruct corrupted
                    codes as Concept Ids. With this assumption all
                    reconstructions are unambiguous.
                  </p>
                  <p className="p_help">
                    {" "}
                    If you wish to consider the possibility that codes may be
                    Description Ids, uncheck the "Ignore Description Ids" box.
                    With this setting a small number of reconstructions may be
                    ambiguous, i.e. where both a Concept Id <i>and</i> a Description
                    Id are possible reconstructions.
                  </p>
                  <p className="p_help">
                    <b>
                      N.B. If you change this checkbox you must click "Check
                      Codes" again to update the analysis
                    </b>
                  </p>
                </td>
              </tr>
            </tbody>
          </Table>

          {/*  */}
          {/* Understanding the analysis */}
          {/*  */}
          <h1>Understanding the analysis</h1>

          <p className="p_help">
            In a list of codes where the only problem is corruption by Excel the most common outcomes will be:
          </p>

          {/*  */}
          {/* table: valid format code icons */}
          {/*  */}
          <Table striped bordered className="smaller_font">
            <thead style={{ fontWeight: "bold", borderWidth: 1 }}>
              <tr>
                <td style={{ borderWidth: 3 }}> Valid format code?</td>
                <td style={{ borderWidth: 3 }}> Reconstruction Status</td>
                <td style={{ borderWidth: 3 }}> Explanation</td>
              </tr>
            </thead>
            <tbody>
              {/* possible_corruption_unambig */}
              
              {/* any_corruption_is_silent */}
              <tr>
                <td>
                  <img src={true_false_icons[false]} width="20px" alt=""></img>
                </td>
                <td>
                  <img
                    src={
                      status_icons["OutcomeCodes.POSSIBLE_CORRUPTION_UNAMBIG"]
                    }
                    width="30px"
                    alt=""
                  ></img>
                </td>
                <td><p >
                  The code provided bears the hallmarks of corruption and can be
                  reconstructed to a code that is found in the release.
                  </p><p>The reconstructed code and corresponding term are shown in the right hand columns.
                </p>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={true_false_icons[true]} width="20px" alt=""></img>
                </td>
                <td>
                  
                </td>
                <td>
                  The code is not corrupted
                </td>
              </tr>
            </tbody>
          </Table>

          <p className="p_help">
            The full list of Reconstructed Status icons is as follows:
          </p>
          {/*  */}
          {/* table: status icons */}
          {/*  */}
          <Table striped bordered className="smaller_font">
            <thead style={{ fontWeight: "bold", borderWidth: 1 }}>
              <tr>
                <td style={{ borderWidth: 3 }}> Reconstruction Status</td>
                <td style={{ borderWidth: 3 }}> Brief name </td>
                <td style={{ borderWidth: 3 }}> Explanation</td>
                <td style={{ borderWidth: 3 }}> Suggested action</td>
              </tr>
            </thead>
            <tbody>
              {/* possible_corruption_unambig */}
              <tr>
                <td>
                  <img
                    src={
                      status_icons["OutcomeCodes.POSSIBLE_CORRUPTION_UNAMBIG"]
                    }
                    width="30px"
                    alt=""
                  ></img>
                </td>
                <td>Unambiguous</td>
                <td>
                  The code provided bears the hallmarks of corruption and can be
                  reconstructed to a code that is found in the release.
                </td>
                <td>
                  Check the term matches your expectations and use the
                  reconstructed Id in your data.
                </td>
              </tr>
              {/* any_corruption_is_silent */}
              <tr>
                <td>
                  <img
                    src={status_icons["OutcomeCodes.ANY_CORRUPTION_IS_SILENT"]}
                    width="30px"
                    alt=""
                  ></img>
                </td>
                <td>Silent</td>
                <td>
                  The code provided is valid and has a particular pattern of
                  trailing zeroes so that any "corruption" by Excel leads back
                  to the original code. This is termed "Silent Corruption".
                </td>
                <td>No action required - the code appears to be OK.</td>
              </tr>
              {/* no_reconstructions_exist */}
              <tr>
                <td>
                  <img
                    src={status_icons["OutcomeCodes.NO_RECONSTRUCTIONS_EXIST"]}
                    width="30px"
                    alt=""
                  ></img>
                </td>
                <td>Not reconstructable</td>

                <td>
                  The code provided is invalid and bears the hallmarks of
                  corruption, but the reconstructed code(s) are not found in the
                  release.
                </td>
                <td>Further investigation required.</td>
              </tr>
              {/* possible_corruption_ambig */}
              <tr>
                <td>
                  <img
                    src={status_icons["OutcomeCodes.POSSIBLE_CORRUPTION_AMBIG"]}
                    width="30px"
                    alt=""
                  ></img>
                </td>
                <td>Ambiguous</td>

                <td>
                  This is similar to
                  <img
                    src={
                      status_icons["OutcomeCodes.POSSIBLE_CORRUPTION_UNAMBIG"]
                    }
                    width="30px"
                    style={{ padding: "5px" }}
                    alt=""
                  ></img>
                  but two reconstructions exists, one being a Concept Id and the
                  other being a Description Id.
                </td>
                <td>
                  You should decide which of the two reconstructed Ids was
                  intended and use that reconstructed Id in your data.
                </td>
              </tr>
              {/* ambig_could_be_silent */}
              <tr>
                <td>
                  <img
                    src={status_icons["OutcomeCodes.AMBIG_COULD_BE_SILENT"]}
                    width="30px"
                    alt=""
                  ></img>
                </td>
                <td>Ambiguous/Silent</td>

                <td>
                  This is a combination of
                  <img
                    src={status_icons["OutcomeCodes.POSSIBLE_CORRUPTION_AMBIG"]}
                    width="30px"
                    style={{ padding: "5px" }}
                    alt=""
                  ></img>
                  and
                  <img
                    src={status_icons["OutcomeCodes.ANY_CORRUPTION_IS_SILENT"]}
                    width="30px"
                    style={{ padding: "5px" }}
                    alt=""
                  ></img>
                  - there are two "reconstructions" but one is the same as the
                  original code.
                </td>
                <td>
                  You should decide which of the two Ids was intended and use
                  that reconstructed Id in your data. If the chosen Id is the
                  one that is the same as the entered code then no action is
                  required.
                </td>
              </tr>
            </tbody>
          </Table>
          <p className="p_help">
            The "Valid format code?" icons have the following meanings:
          </p>

          {/*  */}
          {/* table: valid format code icons */}
          {/*  */}
          <Table striped bordered className="smaller_font">
            <thead style={{ fontWeight: "bold", borderWidth: 1 }}>
              <tr>
                <td style={{ borderWidth: 3 }}> Status</td>
                <td style={{ borderWidth: 3 }}> Explanation</td>
              </tr>
            </thead>
            <tbody>
              {/* possible_corruption_unambig */}
              <tr>
                <td>
                  <img src={true_false_icons[true]} width=" 20px" alt=""></img>
                </td>

                <td>
                  <p className="p_help">
                    This code is in valid SNOMED format. The app does not
                    explicitly check whether the code is actually found in the
                    release.
                  </p>
                </td>
              </tr>
              {/* any_corruption_is_silent */}
              <tr>
                <td>
                  <img src={true_false_icons[false]} width="20px" alt=""></img>
                </td>

                <td>
                  <p className="p_help">
                    {" "}
                    This code is not in valid SNOMED format. Look in the
                    "Reconstruction Status" to understand whether Code-Restorer
                    is capable of reconstructing a valid code.
                  </p>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
                  <p className="p_help pt">
            Using the "Lines to show:" checkboxes you can choose which selection
            of lines from the input data are shown:
          </p>
          <Row>
            {/*  */}
            {/* table: Lines to show radio checkboxes */}
            {/*  */}
            <Table striped bordered className="smaller_font">
              <thead style={{ fontWeight: "bold", borderWidth: 1 }}>
                <tr>
                  <td style={{ borderWidth: 3 }}> Checkbox</td>
                  <td style={{ borderWidth: 3 }}> Explanation</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>All</td>
                  <td>Show all lines</td>
                </tr>
                <tr>
                  <td>Only corrupted</td>
                  <td>
                    <p className="p_help">
                      These are lines where it is fairly likely that corruption
                      has occurred: the tell-tale pattern of trailing zeroes is
                      present and the code can be reconstructed as a code in the
                      release.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>Only corrupted (show silent)</td>
                  <td>
                    <p className="p_help">
                      This is like "Only corrupted", however silent corruptions
                      are also shown. "Silent corruptions" are where the entered
                      code has the particular pattern of trailing zeroes such
                      that any "corruption" by Excel leads back to the original
                      code.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>Only invalid</td>
                  <td>
                    <p className="p_help">
                      This shows all lines that do not conform to the pattern
                      for a valid SNOMED CT code. This will include all codes
                      shown under "Only corrupted", but also codes that may have
                      been corrupted but cannot be restored and also codes that
                      are for other reasons.
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          {/* <p className="p_help pt">
            A further checkbox allows an extra column to be shown:
          </p> */}
          {/*  */}
          {/* table: show rest of line checkboxes */}
          {/*  */}
          {/* <Table striped bordered className="smaller_font">
              <thead style={{ fontWeight: "bold", borderWidth: 1 }}>
                <tr>
                  <th style={{ borderWidth: 3 }}> Checkbox</th>
                  <th style={{ borderWidth: 3 }}> Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Show rest of each input line</td>
                  <td>
                    This adds a column next to the Code column, showing the rest
                    of the text entered on the input line in addition to the
                    code. If terms have been entered alongside the codes this
                    facilitates comparison with the reconstructed terms.
                  </td>
                </tr> */}
          {/* <tr>
                    <td>Show explanations</td>
                    <td>
                      This adds a column to the Status column, that provides a
                      brief reminder of the meaning of the icon.
                    </td>
                  </tr> */}
          {/* </tbody>
            </Table> */}
      </Card.Body>
    </Card>
  );
}
