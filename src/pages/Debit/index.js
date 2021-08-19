import React from 'react'
import Layout from '../../components/Layout'
import { Avatar, Button, Input, Typography } from '@material-ui/core'
import useStyles from './Style'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Box } from "@material-ui/core"
import { TextField } from '@material-ui/core';

const Names = [
    {
        id: '0',
        label: 'mr mohd abdullah',
    },
    {
        id: '1',
        label: 'babu saheb',
    },

    {
        id: '2',
        label: 'asgar',
    },
    {
        id: '3',
        label: 'irfan',
    },
    {
        id: '4',
        label: 'nasim bro',
    },
    {
        id: '5',
        label: 'mukes sir',
    },
];




function Debit() {
    const classes = useStyles();
    const [name, setName] = React.useState();

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (


        <Box className={classes.debitBox}>
            <Box className={classes.debitTitle}>
                <Avatar varient="square" src="/assets/images/debit title.svg" className={classes.debitTitle} />
            </Box>
            <Box className={classes.debitInner}>
                <Box className={classes.labelInput}>
                    <Box className={classes.label}>
                        <Typography >
                            Select User
                        </Typography>
                    </Box>
                    <Box className={classes.input}>

                        <TextField className={classes.TextField}
                            select
                            value={name}
                            onChange={handleChange}
                        >
                            {Names.map((option) => (
                                <MenuItem key={option.value} value={option.id}>
                                    {option.label}
                                </MenuItem>
                            ))}

                        </TextField>

                    </Box>


                </Box>


                <Box className={classes.labelInput}>
                    <Box className={classes.label}>
                        <Typography >
                            Enter Amount
                        </Typography>

                    </Box>
                    <Box className={classes.input}>
                        <TextField type='number' className={classes.TextField} />
                    </Box>
                </Box>



                <Box className={classes.labelInput}>
                    <Box className={classes.label}>
                        <Typography >
                            Decscription
                        </Typography>
                    </Box>
                    <Box className={classes.input}>
                        <TextField type='number' className={classes.TextField} />

                    </Box>
                </Box>

                <Box className={classes.labelInput}>
                    <Box className={classes.label}>
                        <Typography >
                            Coments
                        </Typography>
                    </Box>
                    <Box className={classes.input}>
                        <TextField type='text' className={classes.TextField} />

                    </Box>
                </Box>


                <Box className={classes.btn}>
                    <Button>
                        PAY
                    </Button>
                </Box>
            </Box>
        </Box>
           
       
    )
}
export default Debit;
