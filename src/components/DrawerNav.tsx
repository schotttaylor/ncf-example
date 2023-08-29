import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Chip } from '@mui/material';

const drawerWidth = 184;

interface Props {
  container?: Element;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  window?: () => Window;
}

const DrawerNav = (props: Props) => {
  const { mobileOpen, handleDrawerToggle, window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div className="drawer-header"><span style={{fontWeight: 700}}>my</span>giving</div>
      <div className="profile-block">
        <Avatar className="profile-avatar" src="./images/face-4.png" />
        <div className="profile-name">Louis Carter</div>
        <Chip
          className="profile-chip"
          label="Edit"
          variant="outlined"
        />
      </div>
      <List>
        {['Home', 'Grant', 'Give', 'Favorites', 'Activity', 'Legacy'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRight: 'none' },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default DrawerNav;
