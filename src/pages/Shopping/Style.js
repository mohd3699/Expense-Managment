import React from 'react'
import { Avatar, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme =>({
    paperShopping: {
        height: "64px",
        width: "710px",
        marginTop: "150px",
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

    shoppingButton: {
        height: "50px",
        width: "auto",
        borderRadius: "unset",
        // display:"flex",
        // border: "1px solid",
        justifyContent: "space-Between",
        display: "flex",
        backgroundColor:"default",
        // marginLeft:"40px",


    },
    shoppingBox: {
        height: "523px",
        width: "50%",
        border: "1px solid ",
        boxShadow:"2px 3px 10px brown",

        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15px",
        justifyContent: "center",
        backgroundColor:"default",
        borderRadius:"5px",
    },
    shoppingTitle: {
        height: "20px",
        width: "104px",
        marginTop: "30px",
        borderRadius: "unset",
        justifyContent: "center",
        margin: "auto",
        backgroundColor: "default",

    },
    shoppingInner: {
        height: "300px",
        width: "366px",
        // border: "1px solid ",
        boxShadow:"2px 3px 10px brown",

        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        backgroundColor: "white",

    },
    labelInput:{
        height:"44px",
        width:"366px",
        // border:"1px solid blue",
        display:"flex",
        justifyContent:"space-Around",
        alignItems:"center",
        marginTop:"10px",

    },

    label:{
        height:"25px",
        width:"100px",
        // border:"1px solid",
        "& .MuiTypography-body1":{
            fontWeight:"bold",
            fontSize:"14px",
            textAlign:"center",
            color:"#858585",
        }

    },

    input:{
        height:"25px",
        width:"150px",
        // border:"1px solid",
        borderRadius:"4px",
        "& .MuiAvatar-root":{
            height:"auto",
            width:'auto',
            alignItems:"center",
            marginLeft:"100px",
         },

    },

    Input:{
        border:"1px solid",
        borderRadius:"4px",
        "& .MuiInput-underline:before":{
            borderBottom:"unset",
        },
        "& .MuiInput-underline:after":{
            borderBottom:"unset",
        },
        "& .MuiInput-underline:hover":{
            borderBottom:"unset",
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
      formControl: {
        minWidth: '150px',
        border:"1px solid",
        borderRadius:"3px",
    },
    label1: {
        // border:"1px solid red",
        width:"120px",

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
        border:"1px solid",
        borderRadius: "4px",
        "& .MuiAvatar-root": {
            height: "auto",
            width: 'auto',
            alignItems: "center",
            marginLeft: "100px",
        },

    },




}))

export default useStyles;

