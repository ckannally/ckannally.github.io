import React from 'react';
import './ExpandingMenu.css'
import { useNavigate } from 'react-router-dom';

interface ExpandingMenuProps {
    name: string;
    page: string;
}

const ExpandingMenu: React.FC<ExpandingMenuProps> = ({ name, page }) => {    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(page);
    };

    return (
        <div className='expanding-menu'>
            <div className="my_button" onClick={handleClick}>{name}</div>
        </div>
    );
};

export default ExpandingMenu;
