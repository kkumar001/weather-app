import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

export default function BasicTooltip({ bgColor, data, h, w, pment }) {

  return (
    <Tooltip title="Kailash Kumar" arrow placement={pment}>
      <div className={`relative w-[${w}] h-[${h}] ${bgColor} flex justify-center items-center rounded-lg border-2 border-white`}>
        <Link to="/some-link" className="absolute inset-0 flex justify-center items-center">
          <span className='text-xl text-white font-medium'>Delhi</span>
        </Link>
      </div>
    </Tooltip>
  );
}