import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
} from "@mui/material"

import { makeStyles } from '@material-ui/core/styles';



import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(10),
        "&:hover": {
            color: "orange",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="sticky" style={{ background: "#000033" }}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Navbar
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/about" className={classes.link}>
                        About
                    </Link>
                    <Link to="/contact" className={classes.link}>
                        Contact
                    </Link>
                    <Link to="/faq" className={classes.link}>
                        FAQ
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar