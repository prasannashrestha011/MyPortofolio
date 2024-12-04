const NavItems=[
    {name:"Home",link:"home"},
    {name:"About",link:"skills"},
    {name:"Contact",link:"contact"},
    {name:"Projects",link:"projects"}
]
const IntroDescs=[
    "Interested in backend development.",
    "I build things for the web  applications."
]
const SkillsItems=[
    {header:"Frontend",skills:[
        '/icons/svgs/nextjs.svg',
          '/icons/svgs/react.svg',
          '/icons/svgs/tailwind.svg',
          '/icons/svgs/redux.svg'
    ]
    },
    {
        header:"Backend",
        skills:[
             '/icons/svgs/spring.svg',
            '/icons/svgs/express.svg',
            `https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/Group%2025%20(2).png`,
            '/icons/svgs/nodejs.svg',
            '/icons/svgs/postgres.svg',
           
        ]
    },
    {
        header:'Languages',
        skills:[
            '/icons/svgs/java.svg',
             '/icons/svgs/typescript.svg',
            '/icons/svgs/go.svg',
            '/icons/svgs/csharp.svg',
           
        ]
    }
]
const ProjectItems=[
  
    {
        name:"Comics Web",
        imgSrc:"/ImageSource/comicweb.png",
        language:"/icons/svgs/nextjs.svg",
        githubUrl:"https://github.com/prasannashrestha011/Comic-web-app",
        des:`
        A comic website where you can read several Marvel books. All the images are stored in a GitHub repository.
        `
    },
    {
        name:"3d game",
        imgSrc:"/ImageSource/3dgame.png",
        language:"/icons/svgs/csharp.svg",
        githubUrl:"https://github.com/prasannashrestha011/Ericka-Archer",
        des:`
        A basic 3D shooter game made in Unity. This game includes guns and cars.
        `
    },
    {
        name:"Api-Testing",
        imgSrc:"/ImageSource/api-testing.png",
        language:"/icons/svgs/csharp.svg",
        githubUrl:"https://github.com/prasannashrestha011/Api-Testing-",
        des:`
            A desktop application made in c# that will assists users in testing their API data. It has similar functionality to Postman.
            `
    },
    {
        name:'Audio player',
        imgSrc:"/ImageSource/audioplayer.png",
        language:"/icons/svgs/csharp.svg",
        githubUrl:"https://github.com/prasannashrestha011/AudioPlayer",
        des:`
             "An audio player developed almost from scratch. It uses a tree view to display all the user's playlists and audio files.
            `
    }
]
export {NavItems,IntroDescs,SkillsItems,ProjectItems}