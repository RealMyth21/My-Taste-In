// import * as React from 'react';
import { Typography} from '@mui/material';
import AddMediaType from "./AddMediaType"

export function User({name = "guest"}) {
  return (
    <>
      <Typography variant='h4'>{name}</Typography>
      <Typography variant='h3'>my taste in...</Typography>
      <AddMediaType />
    </>
  )
}