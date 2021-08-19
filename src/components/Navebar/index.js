import React from 'react'
import Layout from '../../components/Layout'
import { Avatar, Button, Tab, AppBar, Box } from '@material-ui/core'
import { Tabs } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import useStyles from '../Navebar/Styles'
import Credit from "../../pages/Credit";
import Debit from "../../pages/Debit";
import Dashboard from "../../pages/Dashboard";
import PayDue from "../../pages/Paydue";
import AddMembers from "../../pages/Addmembers";
import Shopping from "../../pages/Shopping";

const array = [

    {
        icon: <Avatar variant="square" src="/assets/images/Dashboard.svg" />
    },
    {
        icon: <Avatar variant="square" src="/assets/images/Credit.svg" />
    },
    {
        icon: <Avatar variant="square" src="/assets/images/Debit.svg" />
    },
    {
        icon: <Avatar variant="square" src="/assets/images/PayDue.svg" />
    },
    {
        icon: <Avatar variant="square" src="/assets/images/Shopping.svg" />
    },
    {
        icon: <Avatar variant="square" src="/assets/images/AddMember.svg" />
    },

]

function TabPanel(props) {
    const { children, value, index } = props;
    const classes = useStyles;
    return (
        <div>
            {
                value === index && <div>{children}</div>
            }
        </div>
    )
}

 function Navebar() {

    const classes = useStyles();

    const [value, setValue] = React.useState();
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
  <>

        <Box  className={classes.Box}>

            <Tabs className={classes.tabsName}
                value={
                    value
                }
                onChange={handleChange}
            >

                {
                    array.map((obj) => (

                        <Tab
                            className={classes.tab}
                            icon={obj.icon}
                        >

                        </Tab>

                    ))
                }



            </Tabs>
           


        </Box>

<TabPanel index={0} value={value}>
<Dashboard />

</TabPanel>

<TabPanel index={1} value={value}>
<Credit />

</TabPanel>

<TabPanel index={2} value={value}>
<Debit />

</TabPanel>

<TabPanel index={3} value={value}>
<PayDue />

</TabPanel>

<TabPanel index={4} value={value}>
<Shopping />

</TabPanel>

<TabPanel index={5} value={value}>
<AddMembers />

</TabPanel>

</>
    )
}


export default Navebar;
