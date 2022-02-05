import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';



const Drawer = styled(MuiDrawer)(
  ({ theme }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiListItem-root':{
      padding: `${theme.spacing(1)} 0`,
    },
    '& .MuiListItemButton-root':{
      paddingLeft: theme.spacing(3),
    },
  }),
);


export default Drawer