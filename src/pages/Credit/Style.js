import React from 'react'
import { Avatar, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({





    creditBox: {
        height: "523px",
        width: "50%",
        border: "1px solid ",
        boxShadow: "2px 3px 10px yellow",
        // boxShadow:"2px 3px 10px red",
        borderRadius: "5px",

        marginLeft: "auto",
        marginRight: "auto",

        justifyContent: "center",
        marginTop: '15px',
        // backgroundColor: "red",
    },
    creditTitle: {
        height: "20px",
        width: "76px",
        marginTop: "20px",
        borderRadius: "unset",
        justifyContent: "center",
        margin: "auto",
        backgroundColor: "default",

    },
    creditInner: {
        height: "264px",
        width: "95%",
        // border: "1px solid ",
        boxShadow: "2px 3px 10px yellow",

        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        // backgroundColor: "yellow",

    },
    labelInput: {
        height: "44px",
        width: "100%",
        // border: "1px solid blue",
        // backgroundColor:"blue",
        display: "flex",
        justifyContent: "space-Around",
        alignItems: "center",
        marginTop: "10px",
        textAlign: "center",

    },

    label: {
        height: "25px",
        width: "100px",
        display: "flex",
        justifyContent: "space-Around",
        // border: "1px solid red",
        textAlign: "center",

        "& .MuiTypography-body1": {
            fontWeight: "bold",
            fontSize: "14px",
            textAlign: "center",
            color: "#858585",
        }

    },

    input: {
        height: "30px",
        width: "150px",
        border: "1px solid",
        borderRadius: "5px",
        "& .MuiAvatar-root": {
            height: "auto",
            width: 'auto',
            alignItems: "center",
            marginLeft: "100px",
        },

    },




    label1: {
        // border: "1px solid red",
        width: "120px",

        "& .MuiTypography-body1": {
            fontWeight: "bold",
            fontSize: "14px",
            // textAlign: "center",
            color: "#858585",

        }

    },
    input1: {
        height: "30px",
        width: "150px",
        border: "1px solid",
        borderRadius: "4px",
        "& .MuiAvatar-root": {
            height: "auto",
            width: 'auto',
            alignItems: "center",
            marginLeft: "100px",
        },

    },

    TextField: {
        minWidth: '150px',
        "& .MuiInput-underline:before": {
            borderBottom: "none",
        },
        "& .MuiInput-underline:after": {
            borderBottom: "none",
        },
        "& .MuiInput-underline:hover:not(.Mui-disable):before": {
            borderBottom: "none",
        },
    },

    btn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 80%)',
        borderRadius: '40px',
        height: "40px",
        width: "100px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        textAlign: 'center',

        "& .MuiButton-label ": {

            fontWeight: 'bold',
            color: 'white',


        }
    },



}))

export default useStyles;

