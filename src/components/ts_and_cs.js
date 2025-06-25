import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export default function TermsModal({termsAccepted, setTermsAccepted}) {
  
  // For now make every reload force accpetance of ts and cs in case change things
  // and to facilitate redisplaying it

  // commented out code shows how to store result in localstorage instead

  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   const accepted = localStorage.getItem("accepted_terms");
  //   if (!accepted) setShow(true);
  // }, []);

  const handleAccept = () => {
    // localStorage.setItem("accepted_terms", "true");
    // setShow(false);
    setTermsAccepted(true)
  };

  return (
    // <Modal show={show} backdrop="static" keyboard={false} size="xl">
    <Modal show={!termsAccepted} backdrop="static" keyboard={false} size="xl">
      <Modal.Header>
        <Modal.Title>Terms & Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <h1>Terms and Conditions for Code-Restorer</h1>

        <h2>Scope</h2>
        {/* <p>
          This application is limited to allowing a user to upload a value set,
          and providing an outcome report, based on a range of 13 pre-defined
          Set Checks.
        </p> */}
        <p style={{color:"#ee0000", fontWeight: "bold"}}>
        {/* <p style="color:#EE0000; font-weight: bold;"> */}
          IMPORTANT: All outputs should be reviewed and approved by relevantly
          qualified clinical professionals before changes are made to any value
          set (or other data) being used to record or assess care data.
        </p>
        <h2>Limitations</h2>
        <p>
          The application is developed for use in Health & Care settings within
          the UK, and therefore makes use of published releases of the SNOMED CT
          UK Edition only. 
        </p>
        {/* <p>
          The application is running on restricted cloud resources, and as such
          the performance of the tool to handle multiple simultaneous users is
          an important aspect of evaluating this implementation. This
          application places a limit on the size of an uploaded file (currently
          3000 concepts). Files towards the upper end of this range may impact
          the performance of the tool.
        </p> */}
        <h2>Licencing</h2>
        <p>
          By using this application, you accept the licence agreement for the
          use of SNOMED CT, which is available on{" "}
          <a
            href="https://isd.digital.nhs.uk/trud/users/guest/filters/0/licence/10"
            target="_blank"
          >
            {" "}
            TRUD
          </a>
          .
        </p>
        <h2>Cookies</h2>
        <p>
          This application operates with only essential cookies. By using this
          application, you accept the use of these essential cookies.
        </p>
        <h2>Retention of Data</h2>
        <p>
          In order to assess usage of the app, summary statistics are recorded about each
          set of codes that are submitted, including the IP address of the client browser.
        </p>
        <h2>Use of this application</h2>
        <p>
          You recognise that this application is a service available to other
          users, and that access or capacity may on occasion be limited. You
          will comply with any fair use guidance that may be given from time to
          time.         </p>
        <p>We ...</p>
        <ul>
          <li>
            do not guarantee or warrant that the functions of this application
            will be uninterrupted or error free, that defects will be corrected,
            or represent the full functionality, accuracy, or reliability of the
            materials or data.
          </li>
          <li>
            offer no warranty for this application working in any browser or
            configuration. Please note that you may see inconsistencies in the
            presentation of pages if you are using an older or deprecated
            version of a browser.
          </li>
          <li>
            make no assumption that your access to this application will be from
            within the UK, and is not responsible or liable for your compliance
            with any local laws appropriate to the geographic area from which
            you seek to access this application.
          </li>
        </ul>
        <p>
          By using this application, you accept and consent to the above, and
          you agree to comply with them.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleAccept}>
          I Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
