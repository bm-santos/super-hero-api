import Paper from '@material-ui/core/Paper';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { YoutubeIcon } from '../icons';

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
            <a
              href={`https://www.google.com/search?q=${item.name}`}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none"
              }}>
              <Paper

                elevation={3}
                style={{
                  backgroundColor: "red"
                }}
              >
                <Card key={item.id}>
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
                          ? item.name
                          : item.biography["full-name"]}
                        {console.log(item.biography["aliases"].map((i: any) => (
                          console.log(i)
                        )))}
                      </Typography>
                    </CardContent>
                    <a
                      href={`https://www.youtube.com/results?search_query=${item.name}+${item.biography["full-name"]}+${item.biography["publisher"]}+${item.biography.aliases}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <YoutubeIcon h="15" />
                      </span>
                    </a>
                  </CardActionArea>
                </Card>
              </Paper>
            </a>
          ))}
      </div>
    </>
  );
}
