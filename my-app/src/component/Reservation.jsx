import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import mapa_1 from '../img/mapa_1.png'
import {Fragment} from 'react';
import styles from '../css/Reservation.css';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,

  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (

  <Fragment>
  <img src={mapa_1} alt='mapaeveris' className='mapa'/>

  <Grid container component="main">
     <Grid item xs={3}>
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Zona de Trabajo
              </ListSubheader>
            }
            className={classes.root}>
            <ListItem button>
              <ListItemText primary="G-1" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-2" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-3" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-4" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-5" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-6" />
            </ListItem>

            
            <ListItem button onClick={handleClick}>
              <ListItemText primary="G-7" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-8" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-9" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-10" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-11" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-12" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-13" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-14" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="G-15" />
            </ListItem>

    
        </List>
      </Grid>

      <Grid item xs={3}>
      <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Sala de Reuniones
              </ListSubheader>
            }
            className={classes.root}>
            <ListItem button>
              <ListItemText primary="Sala - A" />
            </ListItem>

            <ListItem button>
            <ListItemText primary="Sala - B" />
            </ListItem>
            
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Sala - C" />
            </ListItem>
            
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Sala - D" />
            </ListItem>
            
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Sala - E" />
            </ListItem>
            
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Sala - F" />
            </ListItem>
            
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Sala - G" />
            </ListItem>
            
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Sala - H" />
            </ListItem>

        </List> 
        </Grid>

        <Grid item xs={3}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Privado
              </ListSubheader>
            }
            className={classes.root}>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Sala - I" />
            </ListItem>
        </List>
      </Grid>
   </Grid>
   </Fragment>
  )

}