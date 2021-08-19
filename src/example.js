import { makeStyles } from '@material-ui/core'
import { Avatar, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import React from 'react'
import useStyle from '../src/examplestyle'

function Example() {
    const useStyles = makeStyles
    return (
        
        <div>
            <Box>
                <Container>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={CallMissedSharp.logo}>
                                        <Avatar src="./assets/images/logo.svg" />
                                        Dashboard
                                    </TableCell>

                                    <TableCell className={CallMissedSharp.logo}>
                                    <Avatar src="./assets/images/logo.svg" />
                                        Credit
                                    </TableCell>

                                    <TableCell className={CallMissedSharp.logo}>
                                    <Avatar src="./assets/images/logo.svg" />
                                        Debit
                                    </TableCell>

                                    <TableCell className={CallMissedSharp.logo}>
                                    <Avatar src="./assets/images/logo.svg" />
                                        PayDue
                                    </TableCell>

                                    <TableCell className={CallMissedSharp.logo}>
                                    <Avatar src="./assets/images/logo.svg" />
                                        Shopping
                                    </TableCell>

                                    <TableCell className={CallMissedSharp.logo}>
                                    <Avatar src="./assets/images/logo.svg" />
                                        Add Members
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>


                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>

        </div>
    )
}

export default Example















{/* <Box className={classes.labelInput}>
                        <Box className={classes.label}>
                            <Typography >
                                Select User
                            </Typography>
                        </Box>
                        <Box className={classes.input} border="1px solid">
                            <Button>
                                <Avatar src="/assets/images/Rect.svg" />
                            </Button>
                        </Box>

                    </Box> */}
