import React from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const LoginBtn = () => {
    return (
        <React.Fragment>
            <Link href={`/signingUp`} passHref>
                <Button color="inherit">Login</Button>
            </Link>
            <Button color="inherit">Admin</Button>
        </React.Fragment>
    );
}

export default LoginBtn;
