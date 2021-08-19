import React from 'react'
import { Avatar, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme =>({
   
    debitBox: {
        height: "523px",
        width: "50%",
        border: "1px solid ",
        boxShadow:"2px 3px 10px yellow",


        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15px",
        justifyContent: "center",
        backgroundColor:"default",
        borderRadius:"5px",
    },
    

    debitButton: {
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
    
    debitTitle: {
        height: "20px",
        width: "76px",
        marginTop: "30px",
        borderRadius: "unset",
        justifyContent: "center",
        margin: "auto",
        backgroundColor: "default",

    },
    debitInner: {
        height: "264px",
        width: "366px",
        border: "1px solid ",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        backgroundColor: "white",

    },
    labelInput:{
        height:"44px",
        width:"366px",
        // border:"1px solid blue",
        // boxShadow:"20px 20px 50px 10px yellow",
        boxShadow:"2px 3px 10px pink",

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
        border:"1px solid",
        borderRadius:"4px",
        "& .MuiAvatar-root":{
            height:"auto",
            width:'auto',
            alignItems:"center",
            marginLeft:"100px",
         },

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
        height: "35px",
        width: "80px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
        textAlign: 'center',

        "& .MuiButton-label ": {

            fontWeight: 'bold',
            color: 'white',


        }
    },


}))

export default useStyles;

