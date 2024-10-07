import React from 'react';
import { Link } from 'react-router-dom';

function Content() {
    const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        backgroundColor: 'lightpink',
        height: '100vh',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 60px)',
        gap: '10px',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60px',
        backgroundColor: 'lavender',
        borderRadius: '5px',
        fontWeight: 'bold',
        fontSize: '18px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div style={gridStyle}>
                {letters.map((letter) => (
                    <Link key={letter} to={`/users/${letter}`} style={linkStyle}>
                        {letter}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Content;
