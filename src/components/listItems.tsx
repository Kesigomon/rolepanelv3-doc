import React, {PropsWithChildren} from 'react'
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {graphql, Link, useStaticQuery} from 'gatsby'
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type Props = PropsWithChildren<{
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}>


const ListItems = (props: Props) => {
    const {onClick} = props
    const {commandsPages, contextPages} = useStaticQuery<GatsbyTypes.MyQueryQuery>(graphql`
        query MyQuery {
            commandsPages: allSitePage(filter: {path: {glob: "/commands/*"}}) {
                nodes {
                    path
                }
            }
            contextPages: allContextPageYaml {
                nodes {
                    name
                    path
                }
            }
        }
    `)
    return (
        <List>
            <ListItem>
                <ListItemButton component={Link} to="/" onClick={onClick}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="トップページ"/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component={Link} to="/quickstart" onClick={onClick}>
                    <ListItemIcon>
                        <AccessTimeIcon/>
                    </ListItemIcon>

                    <ListItemText primary="クイックスタート"/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component={Link} to="/faq" onClick={onClick}>
                    <ListItemIcon>
                        <QuestionMarkIcon/>
                    </ListItemIcon>

                    <ListItemText primary="よくある質問"/>
                </ListItemButton>
            </ListItem>
            {commandsPages.nodes.map(node => {
                const commandName = node.path.split('/')[2]
                return (
                    <ListItem>
                        <ListItemButton component={Link} to={node.path} onClick={onClick}>
                            <ListItemIcon>
                                <FiberManualRecordIcon/>
                            </ListItemIcon>
                            <ListItemText primary={commandName}/>
                        </ListItemButton>
                    </ListItem>
                )
            })}
            {contextPages.nodes.map(node => {
                const path = `/context/${node.path}`
                const commandName = node.name
                if (!commandName){
                    return <React.Fragment/>
                }
                return (
                    <ListItem>
                        <ListItemButton component={Link} to={path} onClick={onClick}>
                            <ListItemIcon>
                                <FiberManualRecordIcon/>
                            </ListItemIcon>
                            <ListItemText primary={commandName}/>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default ListItems