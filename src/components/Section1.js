import React from 'react';
import './Section1.css';
import '../App.css'
import img1 from '../images/img1.png';
import ceo1 from '../images/ceo1.png';
import seo2 from '../images/seo2.png';
import seo3 from '../images/seo3.png';
import seo4 from '../images/seo4.png';
import seo5 from '../images/seo5.png';
import seo6 from '../images/seo6.png';
import iconf from '../images/iconf.png';
import footer from '../images/footer.png';


import icon1 from '../images/icon1.png';
import Logo1 from '../images/Logo1.png';

import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

import services1 from '../images/services1.png';
import service2 from '../images/service2.png';
import compu from '../images/compu.png';
import word from '../images/word.png';
import background2 from '../images/background2.png';
import background from '../images/background.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import background3 from '../images/background3.png';
import back4 from '../images/back4.png';




import service3 from '../images/service3.png';

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
function Section1(){
    const classes = useStyles();

    return(
        <div className = 'section1-container'>
            {/* <img src='/images/img-2.jpg'/> */}
            <h1>¿CUAL ES TU NIVEL DE MADUREZ DE</h1>
            <h2>TRANSFORMACION DIGITAL?</h2>

            <h3>DEJANOS LLEVARTE</h3>
            <h4>AL SIGUIENTE NIVEL</h4>

            <div className = 'section1-img'>
                <img src={img1}  alt="img1"/>   
            </div>
            
            <h5>Innovando empresas hacia la</h5>
            <h6>transformación digital.</h6>

            <h7>Servicios</h7>

            <div className='ServicesContainer'>
                < div className='ServicesWrapper'>
                    <div className='ServicesCard'>
                        <div className='ServicesIcon'> 
                        <img src={service2} alt = "service2"/>
                        </div>
                        <h8 className='servicesH1'>Marketing Digital </h8>
                        <h2 className='servicesP'>Implementamos comercio electrónico, medios de pago online y 
                        optimizamos tu posicionamiento de marca en internet con el fin de atraer nuevos clientes y aumentar tus ventas </h2>

                    </ div>

                    <div className='ServicesCard'>
                        <div className='ServicesIcon'> 
                        <img src={services1} alt = "services1"/>
                        </div>
                        <h3 className='servicesH1'>Data Analytics </h3>
                        <h4 className='servicesP'>Utilzamos estadística avanzada, machine learning, minería de datos y visualización, con el fin de identificar patrones para aumentar las ventas y optimzar costos. </h4>

                    </ div>

                    <div className='ServicesCard'>
                        <div className='ServicesIcon'> 
                        <img src={service3} alt = "service3"/>
                        </div>
                        <div className='servicesH1'>Gestión de Clientes y Optimización de Procesos</div>
                        <div className='servicesP'>Integramos tecnologías con el fin de gestionar la relación con los clientes; además, evaluamos el nivel de madurez de la Transformación Digital en los procesos de las empresas y por lo tanto presentamos soluciones innovadoras y eficientes.</div>

                    </ div>
                </ div>
            </div>

             

            <div className = 'section2-img'>
                <div className="Section2-C">
                <Grid container spacing={3}>
        
        <Grid item xs={6}>
        <img  className="sect2"src={compu}  alt="img2" />   

        </Grid>
        <Grid item xs={6}>
            <h7 className = "h7">Haz crecer tu negocio con Digital360</h7>

            <p className="P7">Somos un equipo de profesionales y especialistas en negocios y tecnología, por lo tanto, brindamos soluciones a las necesidades actuales y futuras innovando empresas hacia la transformacion digital en:</p>
            <p className="p8">Marketing digital, data analytics, gestión de clientes y automatización de procesos, con el apoyo de la inteligencia artificial, machine learning y ciencia de datos, con el fin de presentar soluciones prácticas y funcionales, con un excelente nivel de servicio.</p>
        </Grid>
       
      </Grid>
                    

                </div>
                

                <div className="img-container">
                    <img src = {ceo1} alt="seo1"/>
                    <img src = {seo2} alt="seo1"/>
                    <img src = {seo3} alt="seo1"/>
                    <img src = {seo4} alt="seo1"/>
                    <img src = {seo5} alt="seo1"/>
                    <img src = {seo6} alt="seo1"/>
                </div>
                    
                {/* <div className="card">
                    <img src={services1} alt="card1"/>
                    <div className = "card-body">
                        <h10 className="card-title">TITLE</h10>
                        <h11 className="card-text">HOLAAAA</h11>
                    </div>
                </div> */}
                
                 
            </div>

            <div className='ServicesContainer1'>
                < div className='ServicesWrapper1'>
                    <div className='ServicesCard1'>
                        <div className='ServicesIcon1'> 
                        <img src={icon1} alt = "service2"/>
                        </div>
                        <h8 className='cardH1'>Increíbles resultados </h8>
                        <h2 className='cardP'>Contamos con muchos casos de éxito en nuestros clientes. </h2>

                    </ div>

                    <div className='ServicesCard2'>
                        <div className='ServicesIcon1'> 
                        <img src={icon2} alt = "services1"/>
                        </div>
                        <h3 className='cardH1'>Para todo tipo de negocio </h3>
                        <h4 className='cardP'>Nuestros servicios no tienen límite. </h4>

                    </ div>

                    <div className='ServicesCard3'>
                        <div className='ServicesIcon1'> 
                        <img src={icon3} alt = "service3"/>
                        </div>
                        <div className='cardH1'>Mantente en el circulo</div>
                        <div className='cardP'>En Digital360 contamos con el mejor equipo de expertos.</div>

                    </ div>
                    <div className='ServicesCard4'>
                        <div className='ServicesIcon1'> 
                        <img src={icon4} alt = "service3"/>
                        </div>
                        <div className='cardH1'>ROI Significativos</div>
                        <div className='cardP'>Generar leads altamente enfocados y listos para comprar.</div>

                    </ div>
                </ div>
            </div>

            {/* <div className = 'section3-container'> */}
                {/* <div className = 'section1-img'> */}
                
                {/* <img src={background3}  alt="img5"   />    */}

                {/* </div> */}

                <div className = 'section3-container'>
                <Grid container spacing={3} direction="column">
                {/* <Grid item xs={12}>
        </Grid> */}
                        <Grid item xs={6}>
                          <div className = 'section3-img'>  
                            <h12 className="H12">Vea todos nuestros Servicios</h12>

                             <img  className="imgb"src={background3}  alt="img2"  />   

                          </div>  
                        </Grid>
                        <Grid item xs = {6}>
                        <div className = 'sect2-text'>
                                </div>
                            
                        </Grid>
                    </Grid>
            
                </div>
                
        
                     <div className = "Footer-icon">
                    <img src={footer}  alt="icon1" width="100%"/>   
                    </div> 
                  

                
              

   
        </div>

    );
}

export default Section1;