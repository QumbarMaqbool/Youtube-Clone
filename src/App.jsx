import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Card from './components/Card';
import Navigator from './components/Navigator';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Theme from './components/Theme';

function App() {

  let menuItems = ['Menu','news','entertainment','sports','children','Menu','news','entertainment','sports','children','Menu','news','entertainment','sports','children','Menu','news','sports','children','Menu','news','Menu','news','entertainment','sports','children','Menu','news','entertainment','sports','children','Menu','news','entertainment','sports','children','Menu','news','sports','children','Menu','news']

  const sideMenu = [
    { title: 'Your Channel', icon: 'src/assets/channel.png' },
    { title: 'History', icon: 'src/assets/history.png' },
    { title: 'Playlists', icon: 'src/assets/playlist.png' },
    { title: 'Your Videos', icon: 'src/assets/vid.png' },
    { title: 'Watch Later', icon: 'src/assets/later.png' },
    { title: 'Liked Videos', icon: 'src/assets/like.png' },
    { title: 'Your Clips', icon: 'src/assets/clip.png' }
  ]

  return (
    <>
      <Navbar/>
      <Menu menu={menuItems}/>
      <div className="grid-container">
        <Navigator items={sideMenu}/>
        <Card/>
      </div>
    </>
  )
}

export default App
