import React from 'react';

const ErrorMessage = ({ children }) => {
    return (
        <div
            style={{
                width: '100%',
                padding: 10,
                marginBottom: 10,
                backgroundColor: 'red',
                color: 'white',
                textAlign: 'center'
            }}>
            {children}
        </div >
    );
};

export default ErrorMessage;