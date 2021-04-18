import React from 'react';
import './Acercade.css';
import '../App.css';
import man from '../images/man.png';
import services from '../images/services.png';
import footer from '../images/footer.png';
import orange from '../images/orange.jpg';


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
function Acercade(){
    const classes = useStyles();

    return(
        <div className ="container">
            <div className="container1">
                <h1>Acerca de</h1>
                <h2>Home - Acerca De</h2>
            </div>

            <div className = "container-2">
                <Grid container spacing={3}>
       
                    <Grid item xs={6}>
                        <img className="img" src = {man} alt = "Man"></img>
                    </Grid>
                    <Grid item xs={6}>
                        <h3 className="h3">DIGITAL360</h3>
                        <p className="h4">Somos un equipo de especialistas que brindamos soluciones a las necesidades actuales y futuras.</p>
                        <p className="h5">En marketing digital estratégico, data analytics, gestión de clientes y automatización de procesos a las empresas que desean generar beneficios superiores; nuestras soluciones tienen un aspecto innovador y nos apoyamos de la inteligencia artificial, machine learning y los datos; presentamos soluciones prácticas y funcionales, con un excelente nivel de servicio.</p>

                    </Grid>
       
                </Grid>
            
            </div>

            <div className="container3">
                <h4 className="pil">Pilares de la empresa</h4>
                <div className="Services">

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className = "ServCont">
                                <div className = "Servwrap1">
                                    <div className = "Scard">
                                        <h6 className='carh1'>Estrategia</h6>
                                        <p className='cardpa'>Envolvimiento nivel alta dirección, visión a futuro, entorno competitivo.</p>
                                    </div>
                                    <div className = "Scard">
                                        <h6 className='carh1'>Datos </h6>
                                        <p className='cardpa'> Machine Learning, datos para toma de decisiones, cultura de datos, análisis predictivo</p>
                                    </div>
                                    <div className = "Scard">
                                        <h6 className='carh1'>Tecnología</h6>
                                        <p className='cardpa'>Redes sociales, la nube, analítica, automatización, inteligencia artificial.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                        <div className = "Sercont2">
                                <div className = "ServWrap2">
                                    <div className = "ServCard2">
                                        <h6 className='carh1'>Procesos</h6>
                                        <p className='cardpa'>Rediseño, enfocado en el customer journey, escuchando al cliente.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <img className="imgS" src ={services} alt="imgS"></img>
                        </Grid>
                    </Grid>
                </div>
                <div className="orange">
                <img src={orange}  alt="icon1" width="100%"/>   

                </div>
            </div>

            <div className = "Footer-icon">
                    <img src={footer}  alt="icon1" width="100%"/>   
            </div> 
        </div>

        
    );
}
export default Acercade;