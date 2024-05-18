import ExpandingMenu from './ExpandingMenu';
import './header.css'

function Header () {

    return (
            <div id="top">
                <div id="menu_bar">
                    <ExpandingMenu name='Home' page='/'/>
                    <ExpandingMenu name='About Me' page='/about'/>
                    <ExpandingMenu name='Nallify' page='/nallify'/>
                </div>
            </div>
    )
}
export default Header