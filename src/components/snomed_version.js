import { useState, useEffect } from "react";

import { Card, Form, Button, Row, Col } from "react-bootstrap";

export default function SnomedVersion({ analysisResults, setAnalysisResults }) {
  
  // this is a bit inelegant as stores the snomed release in otherwise empty
  // analysisResults when the app is laoded; thereafter the snomed_release
  // value is returned by calls to "/receive_entered_data"
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/snomed_release", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setAnalysisResults({...analysisResults, metadata:{...analysisResults.metadata, snomed_release: data}});  // This updates state and triggers re-render
      });
  }, []);

  return (
    <>
      UK Monolith Edition: {analysisResults.metadata.snomed_release}
    </>
  );
}
