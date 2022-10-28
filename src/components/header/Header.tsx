import React from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface HeaderProp {
  label: string;
  tooltip?: string;
}

export const Header = ({ label, tooltip }: HeaderProp) => {
  return (
    <div>
      <Typography variant='h4' sx={{ mb: 1 }}>
        {label ? label : ''}
        {tooltip && (
          <Tooltip title={tooltip} placement='right-end'>
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        )}
      </Typography>
    </div>
  );
};
