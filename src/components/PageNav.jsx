import {NavLink} from 'react-router-dom'
import styles from './PageNav.module.css'
import Logo from './Logo'
function PageNav() {
      return (
        <nav className={styles.nav}>
          <Logo/>
          <ul>
            <li>
              <NavLink to="/Pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/Product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/login" className={styles.ctaLink}>LOGIN</NavLink>
            </li>
          </ul>
        </nav>
      );
}

export default PageNav;
