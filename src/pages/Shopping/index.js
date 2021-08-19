import React from 'react'
import Layout from '../../components/Layout'
import { Avatar, Button, Input, Typography } from '@material-ui/core'
import useStyles from '../Shopping/Style'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Box } from "@material-ui/core"
import { TextField } from '@material-ui/core';

function Shopping(props) {
    const { childern, setValue, index, value } = props;
    const classes = useStyles();
    const [name, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (



        <Box className={classes.shoppingBox}>
            <Box className={classes.shoppingTitle}>
                <Avatar varient="square" src="/assets/images/shopping title.svg" className={classes.shoppingTitle} />
            </Box>
            <Box className={classes.shoppingInner}>
                <Box className={classes.labelInput}>
                    <Box className={classes.label}>
                        <Typography >
                            Select User
                        </Typography>
                    </Box>
                    <Box>
                        <div>
                            <FormControl className={classes.formControl}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={name}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Mukesh Kumar</MenuItem>
                                    <MenuItem value={20}>Irfan Ansari</MenuItem>
                                    <MenuItem value={30}>Jahangir Ansari</MenuItem>
                                    <MenuItem value={40}>Asgar Ansari</MenuItem>
                                    <MenuItem value={50}>A.S Nasim</MenuItem>
                                    <MenuItem value={60}>Mohd Abdullah</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Box>

                </Box>
                <Box className={classes.labelInput}>
                    <Box className={classes.label}>
                        <Typography >
                            Enter Amount
                        </Typography>

                    </Box>
                    <Box className={classes.input1}>
                        <TextField
                            id="standard-number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                </Box>



                <Box className={classes.labelInput}>
                    <Box className={classes.label}>
                        <Typography >
                            Decscription
                        </Typography>
                    </Box>
                    <Box className={classes.input}>
                        <Input className={classes.Input} />
                    </Box>
                </Box>


                <Box className={classes.labelInput}>
                    <Box className={classes.label}>
                        <Typography >
                            Comment
                        </Typography>

                    </Box><Box className={classes.input}>
                        <Input className={classes.Input} />
                    </Box>
                </Box>

                <Box className={classes.btn}>


                    <Button>
                        ADD
                    </Button>
                </Box>
            </Box>

        </Box>


    )
}
export default Shopping;
