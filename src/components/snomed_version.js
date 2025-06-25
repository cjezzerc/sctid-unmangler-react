import { useState, useEffect } from "react";

import { Card, Form, Button, Row, Col } from "react-bootstrap";

export default function SnomedVersion({ analysisResults, setAnalysisResults }) {
  
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/snomed_release", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setAnalysisResults({...analysisResults, metadata:{...analysisResults.metadata, snomed_release: data}});  // This updates state and triggers re-render
      });
  }, []);

  // console.log("snomed_release:", snomed_release);
  return (
    <>
      UK Monolith Edition: {analysisResults.metadata.snomed_release}
      {/* snomed version to be implemented */}
    </>
  );
}
