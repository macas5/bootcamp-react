import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({linkArray}) => {
    
  const mappedLinks = linkArray.map((link) => {
    return (
    <Link className='link' to={link.path}>
        <span>{link.name}</span>
    </Link>
    )
  });

  return (
    <div className="navBar">
        {mappedLinks}
    </div>
  )
}

export default NavBar