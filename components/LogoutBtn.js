import React from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const LogoutBtn = ({ handleLogout }) => {
    return (
        <React.Fragment>
            <Link href={`#`} passHref>
                <Button color="primary"
                    style={{ backgroundColor: 'white' }}
                    onClick={() => handleLogout()}
                >Logout</Button>
            </Link>
        </React.Fragment>
    );
}

export default LogoutBtn;
