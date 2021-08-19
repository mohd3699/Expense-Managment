import React from "react";
import useStyles from "./Style"
import { AppBar, Avatar, Box, Container, Toolbar } from "@material-ui/core"
import { IconButton } from "@material-ui/core";
import { Button } from "@material-ui/core";
import grid from "@material-ui/system";
import Typography from "@material-ui/core/Typography"
import '@fontsource/roboto';




function Header() {
    const classes = useStyles();
    return (
        <Container>
            <grid Container >
                <grid item >
                    <AppBar position="fixed" color="transparent" >
                        <Toolbar className={classes.toolBar}>
                            <Box className={classes.leftSection}>
                                <Avatar src="/assets/images/logo.svg" className={classes.leftSection} />

                            </Box>
                            <Box className={classes.rightSection}>
                                <Box className={classes.rightText}>
                                    <Typography>
                                        Mr. Mohd Abdullah
                                    </Typography>
                                </Box>
                                <Box className={classes.rightPic}>
                                    <Avatar src="/assets/images/1.jpg" className={classes.rightPic} />
                                </Box>

                            </Box>
                        </Toolbar>
                    </AppBar>
                </grid>
            </grid>
        </Container>
    )

}

export default Header;