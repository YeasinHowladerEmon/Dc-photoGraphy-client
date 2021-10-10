import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ModalCompo.css';

function ModalCompo(props) {
  return (
    <>
      <Modal as="div" className="modal-video"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-video-body">
          <div className="modal-video-inner">
            <div className="modal-video-movie-wrap">
              <button className="modal-video-close-button" aria-label="Close the modal by clicking here"></button>
                <iframe
                  src='https://www.youtube.com/embed/tu-bgIg-Luo?autoplay=1'
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
            </div>
          </div>
        </div>

      </Modal>
    </>
  );
}
export default ModalCompo;