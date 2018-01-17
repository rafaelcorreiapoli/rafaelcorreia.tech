import React from 'react'
import Modal from 'react-modal'

export default ({
  ...props
}) => (
  <Modal
    closeTimeoutMS={500}
    style={{
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 3,
      },
      content: {
        margin: 'auto',
        maxWidth: 1024,
        padding: 0,
        border: 0,
        borderRadius: 0,
      },
    }}
    contentLabel="Modal"
    {...props}
  />
)
