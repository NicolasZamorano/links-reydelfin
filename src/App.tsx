import type { JSX } from 'react';
import './App.css';
// Importamos los iconos de react-icons
import { FaTwitch, FaInstagram } from 'react-icons/fa';
import { SiTiktok, SiKick } from 'react-icons/si';

interface LinkData {
  name: string;
  url: string;
  icon: JSX.Element;
  color: string;
}

function App() {
  const links: LinkData[] = [
    {
      name: 'Twitch',
      url: 'https://www.twitch.tv/reydelfin25',
      icon: <FaTwitch />,
      // El morado de Twitch
      color: '#9146FF' 
    },
    {
      name: 'Kick',
      url: 'https://kick.com/reydelfin',
      icon: <SiKick />,
      // Verde neón de tu marca
      color: '#00E065'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@nico_sblack',
      icon: <SiTiktok />,
      // Blanco para TikTok
      color: '#ffffff'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nicoouyiblack/',
      icon: <FaInstagram />,
      // Gradiente o rosa de Instagram
      color: '#E1306C'
    },
  ];

  return (
    <div className="container">
      {/* Fondo de luz decorativo detrás del perfil */}
      <div className="glow-effect"></div>

      {/* Sección de Perfil */}
      <header className="profile-section">
        <div className="profile-frame">
          <img 
            src="FotoPerfil.png" 
            alt="ReyDelfin" 
            className="profile-pic" 
          />
        </div>
        <h1>ReyDelfin</h1>
        <p>🔴 En vivo cuando me acuerdo 🤪</p>
      </header>

      {/* Lista de Links */}
      <main className="links-list">
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-card"
            // Pasamos el color como variable CSS para usarlo en el hover
            style={{ '--hover-color': link.color } as React.CSSProperties} 
          >
            <span className="icon">{link.icon}</span>
            <span className="label">{link.name}</span>
            {/* Espaciador para centrar visualmente el texto */}
            <span style={{width: 20}}></span> 
          </a>
        ))}
      </main>
      
      <footer>
        <p>© 2025 BTZ</p>
      </footer>
    </div>
  );
}

export default App;