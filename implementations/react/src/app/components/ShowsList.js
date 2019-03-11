import React from 'react';
import { Grid } from '@material-ui/core';

export const ShowsList = ({ shows, onSelectShow }) => {
  return (
    <Grid container spacing={24}>
      {shows.map(({image, id, name, score}) => !!image && <Grid
        item key={id} onClick={() => onSelectShow({ id })}
      >
        <div>{name}</div>
        <div>
          <img src={image} alt={name} />
        </div>
        <div>score: {Math.round(score * 10) / 10}</div>
      </Grid>)}
    </Grid>
  );
};