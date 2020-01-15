import Modal from 'react-bootstrap/Modal'
import InfoIcon from '@material-ui/icons/Info'
import Button from 'react-bootstrap/Button'

function InfoModal(props, { children }) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export const ModalBtn = () => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        <InfoIcon />
      </Button>

      <InfoModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}
