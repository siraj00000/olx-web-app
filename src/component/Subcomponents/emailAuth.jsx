import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import '../../App.css'
import '../../styleSheets/Header&Pagestyling.css'
import { Emailsignupform, PhoneAuthSignUp } from '../../component/Subcomponents/emailsignupform'
import CloseIcon from '@material-ui/icons/Close';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.pxToRem(40),
  },
  paper: {
    position: 'absolute',
    width: 600,
    minWidth: 600,
    height: 600,
    color: theme.palette.secondary,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid transparent',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function EmailAuth() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // const signIn = (e) => {
  //   // return e.target.value
  //   let word = e.target.value
  //   return word
  // }

  // const signInbtn = () => {
  //   console.log(signIn())
  // }
  const body = (
    <div style={modalStyle} className={classes.paper}>

      <CloseIcon className={classes.root} onClick={handleClose} />
      <Emailsignupform />
    </div>
  );

  return (
    <div>
      <button className="email_auth_btn logInbtn" onClick={handleOpen}>
        Continue with email
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
function PhoneAuth() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseIcon className={classes.root} onClick={handleClose} />
      <PhoneAuthSignUp />
    </div>
  );

  return (
    <div>
      <button type="button" className="email_auth_btn logInbtn" onClick={handleOpen}>
        Continue with Phone
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}


export {
  EmailAuth,
  PhoneAuth
}