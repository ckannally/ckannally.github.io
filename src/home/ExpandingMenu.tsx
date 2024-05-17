import React, { useState } from 'react';
import './ExpandingMenu.css'

interface ExpandingMenuProps {
    name: string;
}

const ExpandingMenu: React.FC<ExpandingMenuProps> = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='expanding-menu'>
            <div className="my_button" onClick={toggleMenu}>{name}</div>
            {isOpen && (
                <ul className='menu-items'>
                </ul>
            )}
        </div>
    );
};

export default ExpandingMenu;