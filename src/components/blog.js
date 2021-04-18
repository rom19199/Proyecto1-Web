import React from 'react';
import './blog.css';
import '../App.css';
import footer from '../images/footer.png';

function Blog(){
    return(


        <div className="ContainerS">
            <div className="Scontainer">
                <h1>Blog</h1>
                <h2>Home - Blog</h2>
            </div>

            <div className = "Footer-icon">
                    <img src={footer}  alt="icon1" width="100%"/>   
            </div> 

        </div>
    );
}

export default Blog;