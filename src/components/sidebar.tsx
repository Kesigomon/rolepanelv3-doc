import React, {PropsWithChildren} from 'react'
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material'
import {graphql, Link, useStaticQuery} from 'gatsby'

type Props = PropsWithChildren<{}>

const SideBar = (props: Props) => {
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
                    <ListItemText primary="トップページ"/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component={Link} to="/quickstart">
                    <ListItemText primary="クイックスタート"/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component={Link} to="/faq">
                    <ListItemText primary="よくある質問"/>
                </ListItemButton>
            </ListItem>
            {commandsPages.nodes.map(node => {
                const commandName = node.path.split('/')[2]
                return (
                    <ListItem>
                        <ListItemButton component={Link} to={node.path}>
                            <ListItemText primary={commandName}/>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default SideBar