import React from 'react';
import { useRouter } from 'next/router';

const Error = ({ statusCode }) => {

    const router = useRouter();

    return (
        <div className="flex items-center justify-center">
            <h1>Error</h1>
        </div>
    )
}

interface IGetInitialProps {
    res: any,
    err: any
}

Error.getInitialProps = ({ res, err }: IGetInitialProps) => {
    res
}

export default Error
