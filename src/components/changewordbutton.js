import {Button} from 'react-bootstrap';

export default function ChangeWordButton({toggleWord}) {
  return(
    // "hello!!!!!!!"
    <Button variant="secondary" onClick={toggleWord}> 
      click to change word
    </Button>
  )
}
