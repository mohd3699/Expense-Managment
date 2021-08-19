import React from 'react'
import { Avatar, makeStyles } from '@material-ui/core'
import theme from '../../Theme';


const useStyles = makeStyles(theme => ({
    paperpayDue: {
        height: "64px",
        width: "710px",
        marginTop: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        display: "flex",
        justifyContent: "space-Between",
        // paddingRight:"10px"
        // backgroundColor:"black"


    },

    tabName: {

        justifyContent: "space-Between",
        display: "flex",
        // backgroundColor:"yellow",
        width: "100%",

        "& .MuiButtonBase-root": {
            marginLeft: "17px",
            justifyContent: "space-Between",
            display: "flex",
            // backgroundColor:"red",


        }
    },

    PayButton: {
        height: "50px",
        width: "auto",
        borderRadius: "unset",
        display: "flex",
        // border: "1px solid",
        justifyContent: "space-Between",
        display: "flex",
        backgroundColor: "default",
        // marginLeft:"40px",


    },
    payBox: {
        height: "523px",
        width: "50%",
        border: "1px solid ",
        boxShadow:"2px 3px 10px orange",

        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15px",
        justifyContent: "center",
        backgroundColor: "default",
        borderRadius:"5px",
    },
    
    payInner: {
        height: "280px",
        width: "95%",
        // border: "1px solid ",
        boxShadow:"2px 3px 10px orange",

        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
        backgroundColor: "white",
        // display:"felx",
        // justifyContent:"space-Between",


    },
    

    actionButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: '40px',
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height:"30px",
        width:"50px"
      },
      payTitle: {
        height: "20px",
        width: "86px",
        marginTop: "40px",
        borderRadius: "unset",
        justifyContent: "center",
        margin: "auto",
        backgroundColor: "default",

    },









}))

export default useStyles;

