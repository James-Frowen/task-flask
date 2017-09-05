import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<HeaderProps> = (props) => {
    return (
        <header style={{ backgroundColor: "red", height: "32px" }} >
            <nav>
                <ul>
                    <li onClick={() => console.log(location.href)}>
                        <Link to="/">Home</Link>
                        <Link to="/CreateTask">CreateTask</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

Header.defaultProps = {
};

type HeaderProps = {
};
