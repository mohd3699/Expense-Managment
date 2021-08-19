import React from 'react'
import { makeStyles } from '@material-ui/styles'
import theme from "../../Theme/index"


const useStyles = makeStyles({
    dashBox: {
        // border: "1px solid",
        width: '50%',
        height: "670px",
        marginTop: "15px",
        marginLeft: "auto",
        marginRight: "auto",
        // borderBottom:"1px solid ",
        boxShadow:"2px 3px 10px red",
        borderRadius:"5px",
    },
    innerBox1: {
        height: "200px",
        width: "90%",
        // border: "1px solid",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
        display: "flex",
        justifyContent:"space-Around",  
        placeItems:"center",

    },
    innerBox2: {
        // border:"1px solid",
        width:"90%",
        height:"400px",
        marginTop:"10px",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius:'10px',
        boxShadow:"2px 3px 10px red",

    },
    innerText:{
        fontFamily:theme.typography.poppinsMedium,
        margin:"15px auto 15px 10px",

        fontSize:"30px"
    },
    

    innerInnerbox: {
        height: "280px",
        width: "96%",
        // border: "1px solid ",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
        backgroundColor: "white",
        // display:"felx",
        // justifyContent:"space-Between",


    },

    card: {
        // border: "1px solid",
        height: "150px",
        
        width: "45%",
        borderRadius:"10px",
        justifyContent:"space-Between",
        display:"flex",
        boxShadow:"2px 3px 10px red",

    },
    pie:{
        height:"100px",
        width:"100px",
        margin:"15px 0px 0px 5px",
        display:"flex",
        // justifyContent:"space-Between"
    },
    cardInner:{
        textAlign:"center",
        // marginTop:"30px",
        marginRight:"40px",
        // border:"1px solid"

    },
    text:{
        // border:"1px solid",
        fontFamily:theme.typography.poppinsMedium,
        height:"100px",
        margin:"auto auto auto auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    text1:{
        display:"flex",
        // marginTop:"10px",

    },
    text2:{
        marginTop:"10px",
        display:"flex",
        justifyContent:"space-Around",
        font:theme.typography.poppinsMedium, 
        // border:"1px solid"
    },
    graph:{
        height:"18px",
        width:"43px",
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
        width:"90px"
      },
})

export default useStyles;