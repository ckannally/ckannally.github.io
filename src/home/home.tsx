import './home.css'
import ExpandingMenu from './ExpandingMenu';

function Header () {

    return (
            <div id="top">
                <div id="menu_bar">
                    <ExpandingMenu name='About Me' />
                    <ExpandingMenu name='Research' />
                    <ExpandingMenu name='Miss Luna' />
                    <ExpandingMenu name='Cooking' />
                    <ExpandingMenu name='Backcountry' />
                    <ExpandingMenu name='Horticulture' />
                    <ExpandingMenu name='Fly Fishing' />
                    <ExpandingMenu name='Skiing' />
                </div>
            </div>
    )

}
export default Header