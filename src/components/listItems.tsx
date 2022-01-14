import React, {PropsWithChildren} from 'react'
import { styled } from '@mui/material/styles';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {graphql, Link, useStaticQuery} from 'gatsby'
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type Props = PropsWithChildren<{}>

const ListItems = (props: Props) => {
    
    const {allSitePage: commandsPages} = useStaticQuery<GatsbyTypes.MyQueryQuery>(graphql`
        query MyQuery {
            allSitePage(filter: {path: {glob: "/commands/*"}}) {
               nodes {
                  path
              }
          }
        }
    `)
    return (    
            <List>
                <ListItem>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="トップページ"/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/quickstart">
                        <ListItemIcon>
                            <AccessTimeIcon/>
                        </ListItemIcon>

                        <ListItemText primary="クイックスタート"/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/faq">
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
                            <ListItemButton component={Link} to={node.path}>
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