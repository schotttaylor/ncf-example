import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DrawerNav from './DrawerNav';
import { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import { Avatar, Card, Chip, FormControl, InputAdornment, MenuItem, OutlinedInput, Select, Tab, Tabs, TextField } from '@mui/material';

const drawerWidth = 184;

interface Props {
  window?: () => Window;
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const Layout = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [personName, setPersonName] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleSelect = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        className="app-bar"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="page-title" variant="h6" noWrap component="div">
            Grant to a charity
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <DrawerNav
          window={window}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <div className="middle">
          <Toolbar className="tab-bar">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Send a grant" style={{textTransform: 'unset', fontSize: 22}} />
              <Tab label="Recurring schedules" style={{textTransform: 'unset', fontSize: 22}} />
              <Tab label="History" style={{textTransform: 'unset', fontSize: 22}} />
            </Tabs>
          </Toolbar>
          <Card className="card step-card">
            <div className="step-header card-row">
              <Avatar className="step-number">1</Avatar>
              <Typography className="step-title" paragraph>Select a charity</Typography>
            </div>
            <Typography className="label" paragraph>Charity</Typography>
            <div className="card-row">
              <FormControl sx={{ m: 0, width: 398 }}>
                <Select
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleSelect}
                  input={<OutlinedInput />}
                  className="select"
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <span>My favorite charities</span>;
                    }
                    //@ts-ignore
                    return selected.join(', ');
                  }}
                  // MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      // style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography paragraph>or</Typography>
              <TextField
                id="search"
                type="search"
                placeholder="Or search for a charity"
                value={searchTerm}
                onChange={handleSearch}
                className="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon className="search-icon" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Typography className="label" paragraph>Recently supported</Typography>
            <div className="card-row" style={{justifyContent: 'flex-start', whiteSpace: 'nowrap', height: 48, marginBottom: 0}}>
              <div className="carousel-frame">
                <Chip
                  avatar={<Avatar alt="Chino Valley Community Church" src="./images/Ellipse-6564.png" />}
                  className="charity-chip"
                  label="Chino Valley Community Church"
                  variant="outlined"
                />
                <Chip
                  avatar={<Avatar alt="Natacha" src="./images/Ellipse-6566.png" />}
                  className="charity-chip"
                  label="The salvation army"
                  variant="outlined"
                />
                <Chip
                  avatar={<Avatar alt="Natacha" src="./images/Group-1484578309.png" />}
                  className="charity-chip"
                  label="Serge (World Harvest Mission)"
                  variant="outlined"
                />
                <Chip
                  avatar={<Avatar alt="Natacha" src="./images/Group-1484578309.png" />}
                  className="charity-chip"
                  label="Serge (World Harvest Mission)"
                  variant="outlined"
                />
                <div className="fade-arrow">
                <Chip
                  label={<ArrowForwardRoundedIcon />}
                  variant="outlined"
                  className="arrow-chip"
                  style={{color: '#05192C'}}
                />
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="right">
          <Card className="card">
            <Typography paragraph>
            </Typography>
          </Card>
        </div>
      </Box>
    </Box>
  );
}

export default Layout;
