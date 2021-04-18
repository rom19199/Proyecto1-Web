import React from 'react';
import './Contacto.css';
import '../App.css';
import footer from '../images/footer.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Blog(){
    const classes = useStyles();

    return(


        <div className="ContainerS">
            <div className="Scontainer">
                <h1>Contáctenos</h1>
                <h2>Home - Contáctenos</h2>
            </div>

            <div className="ContainerC">
            <Grid container spacing={3}>
        
        <Grid item xs={6}>
        <div className = "ServicesCont">
                                <div className = "SW">
                                    <div className = "SC">
                                        <h6 className="ch1">Contáctenos</h6>
                                        <p className='cdh'>DIRECCIÓN:</p>  
                                        <p className='cdpa'>GUATEMALA</p>  
                                        <p className='cardh2'>EMAIL:</p>  
                                        <p className='cardpa2'>info@digital360.com.gt</p>  
                                        <p className='cardh3'>TELÉFONOS:</p>  
                                        <p className='cardpa3'>(502) 3807 3816</p>  

                                    </div>
                        
                                </div>
                            </div>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        
      </Grid>

            </div>

            <div className = "Footer-icon">
                <img src={footer}  alt="icon1" width="100%"/>   
            </div> 

        </div>
    );
}

export default Blog;