import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom'
import '../../styleSheets/Header&Pagestyling.css'



const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: theme.typography.pxToRem(40),
    },
    typography: {
        padding: theme.spacing(2),
    },
}));


export default function PositionedPopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [chev, setchev] = React.useState('');
    const [placement, setPlacement] = React.useState();
    const classes = useStyles();



   

    const handleChange = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
        setchev('Active')

    };


    return (
        <div className='Popper'>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography className={classes.typography}>
                                <div className="categorylinks block">

                                    <div className="category">
                                        <ul className='ulLinks'>
                                            <NavLink className="NavLinkDropdown block" to='/Cars'>Cars</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/house'>House</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/land-and-plots'>Land-and-plots</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/mobilephones'>Mobilephones</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/motercycle'>MoterCycle</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tablets'>Tablets</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tv-audia-video'>Tv_Audio_Video</NavLink>
                                        </ul>
                                        <ul className='ulLinks'>
                                            <NavLink className="NavLinkDropdown" to='/House'>House</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/house'>House</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/land-and-plots'>Land-and-plots</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/mobilephones'>Mobilephones</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/motercycle'>MoterCycle</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tablets'>Tablets</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tv-audia-video'>Tv_Audio_Video</NavLink>
                                        </ul >

                                        <ul className='ulLinks'>
                                            <NavLink className="NavLinkDropdown" to='/LandAndPlots'>LandAndPlots</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/house'>House</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/land-and-plots'>Land-and-plots</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/mobilephones'>Mobilephones</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/motercycle'>MoterCycle</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tablets'>Tablets</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tv-audia-video'>Tv_Audio_Video</NavLink>
                                        </ul>
                                        <ul className='ulLinks'>
                                            <NavLink className="NavLinkDropdown" to='/Tv_Audio_Video'>Tv_Audio_Video</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/house'>House</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/land-and-plots'>Land-and-plots</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/mobilephones'>Mobilephones</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/motercycle'>MoterCycle</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tablets'>Tablets</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tv-audia-video'>Tv_Audio_Video</NavLink>
                                        </ul>
                                    </div>
                                    <div className="category">
                                        <ul className='ulLinks'>
                                            <NavLink className="NavLinkDropdown" to='/MobilePhone'>MobilePhone</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/house'>House</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/land-and-plots'>Land-and-plots</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/mobilephones'>Mobilephones</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/motercycle'>MoterCycle</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tablets'>Tablets</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tv-audia-video'>Tv_Audio_Video</NavLink>
                                        </ul>
                                        <ul className='ulLinks'>
                                            <NavLink className="NavLinkDropdown" to='/MoterCycle'>MoterCycle</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/house'>House</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/land-and-plots'>Land-and-plots</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/mobilephones'>Mobilephones</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/motercycle'>MoterCycle</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tablets'>Tablets</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tv-audia-video'>Tv_Audio_Video</NavLink>
                                        </ul>
                                        <ul className='ulLinks'>
                                            <NavLink className="NavLinkDropdown" to='/Tablet'>Tablet</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/house'>House</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/land-and-plots'>Land-and-plots</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/mobilephones'>Mobilephones</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/motercycle'>MoterCycle</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tablets'>Tablets</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tv-audia-video'>Tv_Audio_Video</NavLink>
                                        </ul>
                                        <ul className='ulLinks'>
                                            <NavLink className="NavLinkDropdown" to='/Tablet'>Tv_Audio_Video</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/house'>House</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/land-and-plots'>Land-and-plots</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/mobilephones'>Mobilephones</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/motercycle'>MoterCycle</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tablets'>Tablets</NavLink>
                                            <NavLink className="NavLinkDropdownSub block" to='/tv-audia-video'>Tv_Audio_Video</NavLink>
                                        </ul>

                                    </div>



                                </div>




                            </Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            {open   ?
                <button className='AllCatergoryBtn'  onClick={handleChange('bottom-start')}>All Categories<i className="fa fa-chevron-up alcategory " aria-hidden="true" /></button>
                :
                <button className='AllCatergoryBtn'  onClick={handleChange('bottom-start')}>All Categories<i className="fa fa-chevron-down alcategory" aria-hidden="true" /></button>
            }
            {/* <Grid container>
                <Grid item>
                    {edit ?
                        :
                        <Button className= {'outline fw'} onClick={handleClick('bottom-start')} >All Categories<KeyboardArrowDownIcon /></Button>
                    }
                </Grid>
            </Grid> */}
        </div>
    );
}
