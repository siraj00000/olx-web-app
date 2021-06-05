import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import '../styleSheets/ProductStyling.css'
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: theme.typography.pxToRem(28),
    },
    typography: {
        padding: theme.spacing(2),
    },
}));



function Drawer({ category , Location}) {
    const [open, setOpen] = useState(false);
    const [Nopen, setNOpen] = useState(false);

    // const classes = useStyles();
    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                aria-controls="cataegory-collapse-text"
                aria-expanded={open}
                className='collapsebtn'
            >
                CATEGORIES {!open ?
                    <i className="fa fa-chevron-down chev " aria-hidden="true"> </i>
                    :
                    open ?
                    <i className="fa fa-chevron-up chev" aria-hidden="true"> </i>
                    :
                    <i className="fa fa-chevron-up chev " aria-hidden="true"> </i>
                } 
            </button>
            <Collapse in={open}>
                <div id="cataegory-collapse-text">
                    <h4 className='catogory_list'>{category}</h4>
                </div>
            </Collapse>
            <button
                onClick={() => setNOpen(!Nopen)}
                aria-controls="location-collapse-text"
                aria-expanded={Nopen}
                className='collapsebtn'
            >
                LOCATIONS {!Nopen ?
                    <i className="fa fa-chevron-down chev " aria-hidden="true"> </i>
                    :
                    Nopen ?
                    <i className="fa fa-chevron-up chev " aria-hidden="true"> </i>
                    :
                    <i className="fa fa-chevron-up chev" aria-hidden="true"> </i>
                } 
            </button>
            <Collapse in={Nopen}>
                <div id="location-collapse-text">
                    <h4 className='catogory_list'>{Location}</h4>
                </div>
            </Collapse>
            
        </>
    );
}


export default Drawer;