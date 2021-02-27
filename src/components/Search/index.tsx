import React, { useRef } from 'react';
import { getHeroesRequest } from '../../store/ducks/heroes/actions'
import { useDispatch } from 'react-redux'

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '15rem',
      },
    },
  }),
);

const Search = () => {
  const dispatch = useDispatch()

  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-search"
            label="Hero name"
            type="search"
            onChange={(event) => dispatch(getHeroesRequest(event.target.value))}
          />
        </div>
      </form>
    </>
  );
}

export default Search;
