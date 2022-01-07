import React, { useState, useEffect } from 'react';

const Repositories = () => {

    const [repos, setRepos] = useState<any[]>([]);
    const arr: string[] = [];

    useEffect(() => {
        fetchRepos();
    }, []);

    const fetchRepos = async () => {
        let data = await fetch("https://api.github.com/users/Drackin/repos");
        let repositories = await data.json();
        setRepos(repositories);
    }

    return (
        <div className="<lg:min-h-screen bg-gray-900 space-y-4 w-full flex flex-col text-white justify-center mt-10">
            <h1 className="text-4xl text-center">Repositories</h1>

            <div className="lg:grid lg:grid-cols-3 gap-3 <lg:space-y-5 m-0 p-0 <lg:w-[20rem] w-[90%] min-h-1/3 self-center">
                {repos.map((repo, i) => (
                    <div key={i} className="justify-between rounded-xl items-center flex flex-col bg-dark-400 select-none">
                        <a href={`https://github.com/Drackin/${repo.name}`} className="">
                            <img src={`https://github-readme-stats.vercel.app/api/pin/?username=Drackin&repo=${repo.name}&theme=dark`} alt={repo.name} className="w-1000" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Repositories
