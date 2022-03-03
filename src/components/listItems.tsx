import React, {PropsWithChildren} from 'react'
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {graphql, Link, useStaticQuery} from 'gatsby'
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type Props = PropsWithChildren<{
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}>

const ListItems = (props: Props) => {
    const {onClick} = props
    const {allCommandsJson: commandsPages} = useStaticQuery<GatsbyTypes.CommandListItemsQuery>(graphql`
        query CommandListItems {
          allCommandsJson {
            nodes {
              commandName
              command {
                name
                type
              }
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
                const commandName = node?.commandName ?? node.command?.name
                const path = `/commands/${node.command?.name}`
                if (!commandName) {
                    return (<></>)
                }
                return (
                    <ListItem>
                        <ListItemButton component={Link} to={path} onClick={onClick}>
                            <ListItemIcon>
                                {
                                    node.command?.type === 1?
                                        <KeyboardArrowRightIcon/> :
                                        <FiberManualRecordIcon/>
                                }
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