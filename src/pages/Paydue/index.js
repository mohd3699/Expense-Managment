import Header from '../../components/Header'
import { withStyles } from '@material-ui/styles';

import Layout from '../../components/Layout'
import useStyles from '../Paydue/Style'
import { Alert } from '@material-ui/lab'
import { Badge } from '@material-ui/core'
import {
    AppBar, Avatar, Button, Icon, Tab, TableBody,
    Container,
    Tabs,
    Paper,
    Box,
    Typogharaphy,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell
}
    from '@material-ui/core';

function AddMembers(props) {
    const { childern, setValue, index, value, rows, Alert, circle, row } = props;
    const classes = useStyles();
    return (

       
            

            <Box className={classes.payBox}>
                <Box className={classes.payTitle}>
                    <Avatar varient="square" src="/assets/images/payduetitle.svg" className={classes.payTitle} />
                </Box>

                <Box className={classes.payInner}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>NAME</TableCell>
                                    <TableCell>AMOUNT</TableCell>
                                    <TableCell>STATUS</TableCell>
                                    <TableCell>DATE</TableCell>
                                    <TableCell>ACTION</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                <TableRow className={classes.innerTable}>
                                    <TableCell>MUKESH</TableCell>
                                    <TableCell>100</TableCell>
                                    <TableCell>Due</TableCell>
                                    <TableCell>10 Aug 2021</TableCell>

                                    <TableCell><Button style={{textTransform:"none"}} className={classes.actionButton}>
                                        Pay
                                    </Button>
                                    </TableCell>
                                </TableRow>
                                
                            </TableBody>
                        </Table>
                    </TableContainer>


                </Box>


            </Box>
      
    )
}
export default AddMembers;





