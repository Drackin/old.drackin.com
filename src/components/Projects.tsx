import React from 'react';

function Projects() {

  const projects = [
    {
      name: "Zacron-Bot",
      description: "Very Useful Discord Bot. It Contains Music, Moderation, Entertainment, Logo, Backup, Configurable, General and More...",
      image: "https://cdn.discordapp.com/avatars/816268609181450260/d75a11a841cd6f45e66ffc0bfccfe29b.png?size=4096",
      link: [
        "Add Your Server",
        "https://discord.com/oauth2/authorize?client_id=816268609181450260&scope=bot&permissions=805314622"
      ]
    },
    {
      name: "Reponse App",
      description: "An App Where You Can Create Your Server, Build a Community, Meet Your Friends, Message, Talk and More.",
      image: "https://i.vgy.me/QI8XPM.png",
      link: [
        "Go to Website",
        "https://reponse.app/"
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

  return (
    <div id="projects" className="mobile:min-h-screen lg:h-full mt-5 space-y-4 w-full flex flex-col text-white">
      <h1 className="text-4xl text-center">Projects</h1>

      <div className="flex mobile:flex-col gap-5 mobile:space-y-5 m-0 p-0 mobile:w-[20rem] w-[65%] min-h-full self-center">
        {projects.map((project, i) => (
          <div key={i} className="w-[17rem] border border-[#222] mobile:min-h-[26rem] lg:h-[25rem] justify-between rounded-xl flex flex-col bg-[#181818] select-none self-center">

            <div className="h-[70%] flex flex-col items-center space-y-3 mt-5"> {/* Project Content */}
              <img src={project.image} alt={project.name} className="w-30 rounded-xl" />
              <h1 className="text-2xl">{project.name}</h1>
              <p className="text-center px-4">{project.description}</p>
            </div>

            <div className="lg:h-[10%] mobile:min-h-[3rem] border-t border-[#111] w-full text-center flex items-center justify-center"> {/* Project Link */}
              <a href={project.link[1]}>{project.link[0]}</a>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects