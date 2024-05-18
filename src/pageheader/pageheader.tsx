import './pageheader.css'

interface ExpandingMenuProps {
    name: string;
}

const PageHeader: React.FC<ExpandingMenuProps> = ({ name }) => {    

    return (
        <>
        <div className='sub_header'>
            <p>{name}</p>
        </div>
        </>
    );
};

export default PageHeader;
