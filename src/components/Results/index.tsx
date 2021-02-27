import Paper from '@material-ui/core/Paper';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'
import { yellow } from '@material-ui/core/colors';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(2),
        width: theme.spacing(32),
        height: theme.spacing(32),
      },
    },
    media: {
      height: 140,
    },
  }),
);

export default function Results() {
  const classes = useStyles();
  const { heroesObject } = useSelector((state: any) => state.heroes)

  return (
    <>
      <div className={classes.root}>

        {heroesObject?.length > 0 &&
          heroesObject?.map((item: any) => (
            <Paper elevation={3}>
              <Card key={item.id} >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.image.url}
                    title={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.biography["full-name"] === ""
                        ? item.biography["name"]
                        : item.biography["full-name"]}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          ))}

      </div>


    </>
  );
}
