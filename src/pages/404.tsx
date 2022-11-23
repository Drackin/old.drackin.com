import React, { useEffect, FC } from 'react';
import { useRouter } from 'next/router';

const Error404: FC<{ statusCode: any }> = ({ statusCode }) => {

    const router = useRouter();

    useEffect(() => {
        router.push("/");
    }, []);

    return (
        <div className="flex items-center justify-center bg-gray-900 text-white">
            <h1 className="text-4xl">{statusCode} Error</h1>
        </div>
    )
}

export default Error404;
