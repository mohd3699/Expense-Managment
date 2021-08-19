import React from 'react'
import Layout from '../../components/Layout'
import useStyles from '../Dashboard/Styles'
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core"



function Dashboard() {
    const classes = useStyles();

    return (


        <Box className={classes.dashBox}>
            <Box className={classes.innerBox1}>

                <Card className={classes.card}>

                    <Box className={classes.pie}>
                        <CardMedia className={classes.pie}
                            component="img"
                            image="/assets/images/rounded graph.svg"

                        /></Box>
                    <Box className={classes.text}>
                        <Box className={classes.text1}>
                            <Typography variant='h6' className={classes.cardInner} >
                                Total Shopping
                            </Typography>
                        </Box>
                        <Box className={classes.text2}>
                            <Typography >
                                22.6%
                            </Typography>
                            <Avatar className={classes.graph} variant="square" src="/assets/images/Base graph.svg" />
                        </Box>
                        <Box >

                        </Box>
                    </Box>



                </Card><Card className={classes.card}>

                    <Box className={classes.pie}>
                        <CardMedia className={classes.pie}
                            component="img"
                            image="/assets/images/rounded graph.svg"

                        /></Box>
                    <Box className={classes.text}>
                        <Box className={classes.text1}>
                            <Typography variant='h6' className={classes.cardInner} >
                                Total Shopping
                            </Typography>
                        </Box>
                        <Box className={classes.text2}>
                            <Typography >
                                22.6%
                            </Typography>
                            <Avatar className={classes.graph} variant="square" src="/assets/images/Base graph.svg" />
                        </Box>
                        <Box >

                        </Box>
                    </Box>



                </Card>

            </Box>
            <Box>
                <Box className={classes.innerBox2}>
                    <Box>
                        <Typography className={classes.innerText}>
                            Latests Payment
                        </Typography>
                    </Box>
                    <Box className={classes.innerInnerbox}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>NAME</TableCell>
                                        <TableCell>PHONE</TableCell>
                                        <TableCell>STATUS</TableCell>
                                        <TableCell>DATE</TableCell>
                                        <TableCell>ACTION</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    <TableRow className={classes.innerTable}>
                                        <TableCell>MUKESH</TableCell>
                                        <TableCell>7015720216</TableCell>
                                        <TableCell>Active</TableCell>
                                        <TableCell>10 Aug 2021</TableCell>

                                        <TableCell><Button style={{ textTransform: "none" }} className={classes.actionButton}>
                                            Deactivate
                                        </Button>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow className={classes.innerTable}>
                                        <TableCell>MUKESH</TableCell>
                                        <TableCell>7015720216</TableCell>
                                        <TableCell>Deactive</TableCell>
                                        <TableCell>10 Aug 2021</TableCell>

                                        <TableCell><Button style={{ textTransform: "none" }} className={classes.actionButton}>
                                            Deactivate
                                        </Button>
                                        </TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>

        </Box>



    )
}



export default Dashboard;
