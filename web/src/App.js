import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log();
      },
      {
        timeout: 30000,
      });
  }, [])

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://pa1.narvii.com/6650/082a631eb2d7cbe6cb849101808e3f5d0fcb7696_128.gif" alt="" />
              <div className="user-info">
                <strong>Dale Cooper</strong>
                <span>FBI, Blue Rose, Coffe Lover</span>
              </div>
            </header>
            <p>Lorem Ipsum Dolot Si Amet</p>
            <a href="https://google.com.br">Acessar Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://pa1.narvii.com/6650/082a631eb2d7cbe6cb849101808e3f5d0fcb7696_128.gif" alt="" />
              <div className="user-info">
                <strong>Dale Cooper</strong>
                <span>FBI, Blue Rose, Coffe Lover</span>
              </div>
            </header>
            <p>Lorem Ipsum Dolot Si Amet</p>
            <a href="https://google.com.br">Acessar Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://pa1.narvii.com/6650/082a631eb2d7cbe6cb849101808e3f5d0fcb7696_128.gif" alt="" />
              <div className="user-info">
                <strong>Dale Cooper</strong>
                <span>FBI, Blue Rose, Coffe Lover</span>
              </div>
            </header>
            <p>Lorem Ipsum Dolot Si Amet</p>
            <a href="https://google.com.br">Acessar Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://pa1.narvii.com/6650/082a631eb2d7cbe6cb849101808e3f5d0fcb7696_128.gif" alt="" />
              <div className="user-info">
                <strong>Dale Cooper</strong>
                <span>FBI, Blue Rose, Coffe Lover</span>
              </div>
            </header>
            <p>Lorem Ipsum Dolot Si Amet</p>
            <a href="https://google.com.br">Acessar Perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
