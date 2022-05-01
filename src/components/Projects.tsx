import React from 'react';

function Projects() {

  const projects = [
    {
      name: "ESS",
      description: "ESS (Explore Solar System) a Website for Explore Solar System on Web as 3D! It's Going to Be Awesome!",
      image: "http://www.nasa.gov/sites/default/files/thumbnails/image/1806.jpeg",
      link: [
        "Go to Website",
        "https://solar.drackin.me/",
      ]
    },
    {
      name: "Merge App",
      description: "An App Where You Can Create Your Server, Build a Community, Meet Your Friends, Message, Talk and More.",
      image: "https://i.imgur.com/pW6lii3.png",
      link: [
        "Go to Website",
        "https://mergeapp.dev/"
      ]
    },
    {
      name: "TODO Master",
      description: "Take Notes, Backup, Create To-do Lists, Set Reminders, Print Your Notes to Different Files, Categorize Them and More!",
      image: "https://i.imgur.com/ZTFZxF4.png",
      link: [
        "Coming Soon",
        "#"
      ]
    }
  ]

  const projRef = React.useRef<HTMLDivElement>(null);

  const cb: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    console.log(entry);
  }

  const opts = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(cb, opts);
    if(projRef.current) return observer.observe(projRef.current);

    return () => {
      if(projRef.current) return observer.unobserve(projRef.current);
    }
  }, [projRef, opts]);

  return (
    <div id="projects" ref={projRef} className="mobile:min-h-screen lg:h-full mt-5 space-y-4 w-full flex flex-col text-white">
      <h1 className="text-4xl text-center font-jetbrains">Projects</h1>

      <div className="flex mobile:flex-col gap-5 mobile:space-y-5 m-0 p-0 mobile:w-[20rem] w-[65%] min-h-full self-center">
        {projects.map((project, i) => (
          <div key={i} className="w-[17rem] border border-[#222] mobile:min-h-[26rem] lg:h-[25rem] justify-between rounded-xl flex flex-col bg-[#181818] select-none self-center">

            <div className="h-[70%] flex flex-col items-center space-y-3 mt-5"> {/* Project Content */}
              <img src={project.image} alt={project.name} className="w-30 h-[7.5rem] object-cover object-center rounded-xl" />
              <h1 className="text-2xl font-jetbrains">{project.name}</h1>
              <p className="text-center px-4">{project.description}</p>
            </div>

            <div className="lg:h-[10%] mobile:min-h-[3rem] border-t border-[#111] w-full text-center flex items-center justify-center"> {/* Project Link */}
              <a className="underline transition duration-200" id="project-link" href={project.link[1]}>{project.link[0]}</a>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects