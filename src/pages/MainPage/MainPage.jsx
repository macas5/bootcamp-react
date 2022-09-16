import NavBar from '../../components/NavBar/NavBar'
import './MainPage.css'

const linkArray = [
  {name: 'Home', path: '/'},
  {name: 'About us', path: '/'},
  {name: 'Contact us', path: '/'},
  {name: 'Login', path: '/'},
  {name: 'Register', path: '/'}
]

const MainPage = () => {
  return (
    <NavBar linkArray={linkArray}/>
  )
}

export default MainPage