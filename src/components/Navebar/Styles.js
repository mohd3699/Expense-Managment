import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    Box: {
        border: '1px solid',
        width: "50%",
        marginTop: "100px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: '0px 0px 10px black',
        // justifyContent: "space-between"
        boxShadow:"2px 3px 10px green",
    },
    tabsName: {
        width: '100%',
        height: 'auto',
        //    border:'1px solid',
        "& .MuiTab-root": {
            minWidth: `calc(100% /6)`,


        },

    },
    tab: {
        width: "60px",
        "& .MuiAvatar-root": {
            width: '100%',
            height: 'auto'
        }
    },

})

export default useStyles;