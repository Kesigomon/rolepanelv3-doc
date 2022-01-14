import React, { PropsWithChildren } from "react"
import { styled } from "@mui/system"
import SideBar from "../components/sideBar"
import MuiBox from '@mui/material/Box'

const Box = styled(MuiBox)(
    ({theme}) => ({
        paddingLeft: `${theme.spacing(11)}`
    })
);

const Layout = ({children}: PropsWithChildren<{}>) => {
    return (
        <>
            <SideBar/>
            <Box component="main">
            {children}
            </Box>
            
        </>
        
    )

}

const Layout2 = ({children}: PropsWithChildren<{}>) => children

export default Layout