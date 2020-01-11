import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div>404 - Not Found. <Link to="/">Go Home</Link></div>
    );
}

export default NotFoundPage;