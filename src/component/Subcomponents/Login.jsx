import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Carosel from './carosel'
import '../../App.css'
import '../../styleSheets/Header&Pagestyling.css'
import CloseIcon from '@material-ui/icons/Close';
import { EmailAuth, PhoneAuth } from '../Subcomponents/emailAuth'
import AuthButton from '../TestingStore'
import AddIcon from '@material-ui/icons/Add';




function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
// function getEmailAuthModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }


const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.pxToRem(40),
  },
  paper: {
    position: 'absolute',
    width: 400,
    minWidth: 400,
    height: 600,
    color: theme.palette.secondary,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));




function SimpleModal() {
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
    <>


      <div style={modalStyle} className={classes.paper, 'Model_container'}>
        <CloseIcon className={classes.root} onClick={handleClose} />
        <Carosel />
        <PhoneAuth />
        <AuthButton />
        <EmailAuth />
        <h5 className='intrm'>We won't share your personal details with anyone</h5>
        <h5 className='intrm'>If you continue, you are accepting <a href="https://help.olx.com.pk/hc/en-us" target="_blank" rel="noopener noreferrer" className="_24rr9" data-aut-id=""><span>OLX Terms and Conditions and Privacy Policy</span></a></h5>
      </div>
    </>
  );





  return (
    <div>
      <div className="btnContainers">
        <button type="button" className="loginbtn outline" onClick={handleOpen}>
          login
        </button>
        <button onClick={handleOpen} className='Textdeco sellText outline' ><AddIcon style={{ color: 'black', fontWeight: 'bold', fontSize: '22px' }} />Sell</button>
      </div>

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



export default SimpleModal
