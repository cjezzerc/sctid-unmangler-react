import { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function TermsModal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('accepted_terms')
    if (!accepted) setShow(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('accepted_terms', 'true')
    setShow(false)
  }

  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Terms & Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please accept our Terms and Conditions to use the app.</p>
        <p>[Insert your T+Cs content here]</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleAccept}>
          I Accept
        </Button>
      </Modal.Footer>
    </Modal>
  )
}