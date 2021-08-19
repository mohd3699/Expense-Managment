import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core"
import { Container } from "@material-ui/core";
import theme from "../../Theme";



const useStyles = makeStyles({

    toolBar: {
        borderBottom: "2px solid black",
        display: "flex",
        justifyContent: "space-Between",
        paddingRight: "60px",
        paddingLeft: "60px",
    },
    leftSection: {
        // border:"1px solid black",
        height: "40px",
        width: "300px",
        alignItems: "center",
        "& .MuiAvatar-root": {
            // height:"auto",
            // width:"100%"
            borderRadius: "unset",
            overflow: "unset",
        }
    },

    rightSection: {
        height: "50px",
        width: "250px",
        display: "flex",
        // border: "2px solid black",
        justifyContent: "space-Between",
        alignItems: 'center',
        textAlign: 'center'

    },



    rightText: {
        textAlign: 'center',
        width: '100%',

        '& .MuiTypography-body1': {
            fontSize: '12px',
            textAlign: 'center',
            color: theme.palette.text.primary,
            fontWeight: 'bold',
            fontStyle: theme.typography.poppinsBold,
        }


    },

    rightPic: {
        // border:"1px solid black",
        height: "50px",
        width: "50px",
        borderRadius: "50%"


    },



})

export default useStyles;
