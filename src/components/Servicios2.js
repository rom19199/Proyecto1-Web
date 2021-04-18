import React from 'react';
import './Servicios.css';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clock from '../images/clock.png';

import footer from '../images/footer.png';

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

function Servicios2(){
    const classes = useStyles();

    return (
        <div className="ContainerS">
            <div className="Scontainer">
                <h1>Servicios</h1>
                <h2>Home - Servicios</h2>
            </div>

            <div className = "Scont2">
            <h3 className="servh">Pilares de la empresa</h3>

            <div className ="Services">
                <Grid container spacing={3}>
                    
                <Grid item xs={6}>
                <div className = "ServicesCont">
                                <div className = "ServicesWrap">
                                    <div className = "ServicesCard5">
                                        <h6 className='carh1'>MARKETING DIGITAL ESTRATEGICO</h6>
                                        <p className='cardpa'>Implementamos comercio electrónico, medios de pago online y optimizamos tu posicionamiento de marca en internet, con el fin de atraer nuevos clientes y aumentar tus ventas.</p>
                                    </div>
                        
                                </div>
                            </div>
                </Grid>
                <Grid item xs={6}>
                <div className = "ServicesCont">
                                <div className = "ServicesWrap">
                                    <div className = "ServicesCard6">
                                        <img className = "clock" src ={clock} alt="cloc"></img>
                                        
                                        <p className='cardpa'>Desarrollamos tu plataforma web a la medida.
• Implementamos tu Comercio electrónico
• Creamos tus Social Ads
• Aplicamos técnicas para mejorar el Funnel de Conversión
• Instalamos y configuramos el SEO (Search Engine Optimization) y SEM (Search Engine Marketing) para posicionar tu marca en las plataformas online</p>
                                    </div>
                        
                                </div>
                            </div>
                </Grid>
                <Grid item xs={6}>
                <div className = "ServicesCont">
                                <div className = "ServicesWrap">
                                    <div className = "ServicesCard5">

                                        <h6 className='carh1'>Data Analytics</h6>
                                        <p className='cardpa'>Utilizamos estadística avanzada, machine learning, minería de datos y visualización, con el objetivo de identificar patrones para aumentar las ventas y optimizar costos.</p>
                                    </div>
                        
                                </div>
                            </div>
                </Grid>
                <Grid item xs={6}>
                <div className = "ServicesCont">
                                <div className = "ServicesWrap">
                                    <div className = "ServicesCard6">
                                        <img className = "clock" src ={clock} alt="cloc"></img>
                                        
                                        <p className='cardpa'>• Te ayudamos a diseñar tus KPIs
• Te Presentamos datos y reportería con PowerBI o Tableau
• Modelamos analítica básica y avanzada con Machine Learning utlizando Python, R, Knime.
• Diseñamos e implementamos plataforma para Business Intelligence.
• Exploramos datos con técnicas de minería de Datos y Data Warehouse.</p>
                                    </div>
                        
                                </div>
                            </div>
                </Grid>
                <Grid item xs={6}>
                <div className = "ServicesCont">
                                <div className = "ServicesWrap">
                                    <div className = "ServicesCard5">

                                        <h6 className='carh1'>Gestión de Clientes y Optimización de Procesos</h6>
                                        <p className='cardpa'>Integramos tecnologías para gestionar la relación con los clientes; además, evaluamos el nivel de madurez de la transformación digital en los procesos de las empresas y por lo tanto presentamos soluciones innovadoras y eficientes.</p>
                                    </div>
                        
                                </div>
                            </div>
                </Grid>
                <Grid item xs={6}>
                <div className = "ServicesCont">
                                <div className = "ServicesWrap">
                                    <div className = "ServicesCard6">
                                        <img className = "clock" src ={clock} alt="cloc"></img>
                                        
                                        <p className='cardpa'>• Te ayudamos a diseñar tus KPIs
                                        • Soluciones de Omnicanal y Multicanal para sus equipo de ventas.
• Tecnología para la Gestión de sus oportunidades /prospectos y clientes
• Gestión de tickets de servicios.
• Desarrollo de APIs para integración con ERPs • Automatización de procesos
• IoT para procesos de producción.
• Digitalización de procesos logísticos y de producción.
• Eficiencia en el control de inventarios.
• Facturación Electrónica – Integración.</p>
                                    </div>
                        
                                </div>
                            </div>
                </Grid>
                
            </Grid>
            </div>
            </div>
            <div className="Scont4">
                <h6 className="h6">Innovando empresas hacia la transformación digital.</h6>

                <p className = "P">Tome la decisión correcta para su empresa. ¡Elija Digital360!</p>
            </div>

            <div className = "Footer-icon">
                    <img src={footer}  alt="icon1" width="100%"/>   
            </div> 

        </div>
    );
}
export default Servicios2;