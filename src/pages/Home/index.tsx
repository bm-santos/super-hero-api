import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import Search from '../../components/Search';
import Results from '../../components/Results';
import CenteredTabs from '../../components/Header';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import toast, { Toaster } from 'react-hot-toast';

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

  const { loading } = useSelector((state: any) => state.heroes)
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            duration: 3000,
          },
          loading: {
            duration: 10,
          },
        }} />
      { loading && toast.loading("Searching...")}
      <Grid container className={classes.root} spacing={6}>
        <Grid item lg={12}>
          <Grid container justify="center" spacing={spacing}>
            <Search /><br />
            <Results />
          </Grid>
        </Grid>
      </Grid>


    </>
  );
}

export default Heroes;