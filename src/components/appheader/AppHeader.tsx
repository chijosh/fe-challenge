/* eslint-disable import/no-webpack-loader-syntax */
import { useState, MouseEvent } from 'react';
import { updateIntl } from 'react-intl-redux';
import { useDispatch } from 'react-redux';
import {
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Menu
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

import * as index from '../../locales';
import Button from '@mui/material/Button';

export function AppHeader() {
  const dispatch = useDispatch();
  const [auth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleGetLanguage = (event: MouseEvent<HTMLButtonElement>) => {
    console.log((index as any)[`${event.currentTarget.value}`]);

    dispatch(
      updateIntl({
        locale: event.currentTarget.value,
        messages: (index as any)[`${event.currentTarget.value}`] //locales.de
      })
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            FE Challenge
          </Typography>
          {auth && (
            <div>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <LanguageIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Button value='en' onClick={handleGetLanguage}>
                    EN
                  </Button>
                  <Button value='de' onClick={handleGetLanguage}>
                    DE
                  </Button>
                </Box>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
