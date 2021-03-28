import React from 'react';
import Search from '../../components/Search';
import Results from '../../components/Results';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      alignSelf: "center",
      margin: "10px",
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const Heroes = () => {

  const [spacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();
  const { heroesObject } = useSelector((state: any) => state.heroes)

  return (
    <>
      <Search />
      {
        heroesObject?.length > 0 &&
        <div>
          <strong>Heroes: </strong><span>{heroesObject.length}</span>
        </div>
      }
      <Grid container className={classes.root} spacing={6}>
        <Grid item lg={12}>
          <Grid container justify="center" spacing={spacing}>
            <Results />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Heroes;