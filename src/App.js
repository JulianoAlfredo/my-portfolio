import React from "react";
import "./App.css";
import iconGithub from './img/icons8-github.svg'
import iconLinkedin from './img/icons8-linkedin.svg'
import iconEmail from './img/icons8-email-48 (1).png'

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header-name">
          <h1>Juliano Alfredo</h1>
        </div>

        <div className="header-about">
          <h5>Sobre</h5>
          <h5>Resumo</h5>
        </div>
      </header>

      <div className="content">
        <div className="section">
          <h3>Formação</h3>
          <p>Engenharia da Computação</p>
        </div>

        <div className="section">
          <h3>Tecnologias</h3>
          <p>Java && NodeJS</p>
        </div>

        <div className="section">
          <div>
            <h3>Contatos</h3>
          </div>
          <div>
            <div className="specify-contact">
             
             
                <a href="https://github.com/JulianoAlfredo"> <img src={iconGithub} /></a>
             
             
                <a href="https://www.linkedin.com/in/juliano-figueiredo-3129b71ab/"><img src={iconLinkedin} /></a>
             
            
                <a href="mailto:juliano.alfredo86@gmail.com"><img src={iconEmail} /></a>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
