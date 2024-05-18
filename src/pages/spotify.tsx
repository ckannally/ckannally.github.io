import PageHeader from "../pageheader/pageheader";
import './spotify.css';
import graph from '../../src/assets/graph.svg'; // Ensure this path is correct
import loop from '../../src/assets/nallifyLoop.mp3'

function Nallify() {
    return (
        <>
            <PageHeader name="Nallify" />
            <div className="nallify-container">
                <img src={graph} alt="Graph description" className="graph-image" />
                <audio src={loop} autoPlay loop />
            </div>
        </>
    );
}

export default Nallify;
