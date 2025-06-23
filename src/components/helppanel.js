import { useState } from "react";

import { Card, Form, Button, Row, Col } from "react-bootstrap";
// import ReactMarkdown from "react-markdown";
// import { help_markdown } from "./helpmarkdown";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";

// import test_icon from "../assets/test_icon.png"
// import test_icon from "../assets/possible_corruption_unambig.svg"
import code_restorer_banner from "../assets/code_restorer_banner.png"
import icon_pcu_url from "../assets/possible_corruption_unambig.svg?url";
const ximg=code_restorer_banner
// const ximg=icon_pcu_url
// const icon_style="width:32px;height:32px;"

// const test_icon_img=`<img src="${test_icon}" alt="test_icon" style="${icon_style}" >`
// const code_restorer_banner_img=`<img src="${code_restorer_banner}" alt="test_icon" style="width:40vh;" >`

export default function HelpPanel({}) {
  return (
    <Card className="myapp_card" style={{ height: "88vh", overflow: "auto" }}>
      <Card.Header className="myapp_card_header_2">About and Help</Card.Header>
      <Card.Body>
        <Row style={{ padding: "10px" }}>
          <Col className="align-self-center">
            {/* <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {help_markdown}
            </ReactMarkdown> */}
            <img src={ximg} alt="test_icon" style={{width:"40vh"}} ></img>
            <div>
Have your SNOMED CT codes lost a certain something 
- are there zeroes where there used to be other digits? Code-Restorer can mend your codes that have been corrupted by Excel!
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
