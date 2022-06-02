import React from 'react';

const Instructions =React.memo((props) => {
    return (
        <div>
            <div style={{ background: 'black', color: 'yellow', padding: "1rem" }}>
                <p>Follow the instructions above as closely as possible</p>
            </div>
        </div>
    );
})

export default Instructions;