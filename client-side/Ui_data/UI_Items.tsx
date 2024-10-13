const NavItems=[
    {name:"Home",link:"home"},
    {name:"About",link:"skills"},
    {name:"Contact",link:"contact"},
    {name:"Projects",link:"projects"}
]
const SkillsItems=[
    {header:"Frontend",skills:[
        `https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/dotnet.png`,
        `https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/SVGRepo_iconCarrier.png`,
        `https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/pngwing.com.png`
    ]
    },
    {
        header:"Backend",
        skills:[
            `https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/icons8-express-js-96.png`,
            `https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/go-programming-language-icon.png`,
            `https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/postgresql.248x256.png`,
            `https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/Group%20(1).png`
        ]
    },
    {
        header:'Languages',
        skills:[
            `https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/typescriptaasdf.png`,
            `https://raw.githubusercontent.com/prasannashrestha011/ImageRepository/main/uploads/c-sharp-c.456x512.png`
        ]
    }
]
const ProjectItems=[
    {
        name:"GitHub Repository Card",
        imgSrc:"/ImageSource/gitrepocard.png",
        language:"/icons/nextjs.png",
        githubUrl:"https://github.com/prasannashrestha011/GitRepoInfoCard",
        des:`
            An SVG card that displays the latest repository information of a user by fetching data from GitHub's API.
        `
    },
    {
        name:"Comics Web",
        imgSrc:"/ImageSource/comicweb.png",
        language:"/icons/nextjs.png",
        githubUrl:"https://github.com/prasannashrestha011/Comic-web-app",
        des:`
        A comic website where you can read several Marvel books. All the images are stored in a GitHub repository.
        `
    },
    {
        name:"3d game",
        imgSrc:"/ImageSource/3dgame.png",
        language:"/icons/csharp.png",
        githubUrl:"https://github.com/prasannashrestha011/Ericka-Archer",
        des:`
        A basic 3D shooter game made in Unity. This game includes guns and cars.
        `
    },
    {
        name:"Api-Testing",
        imgSrc:"/ImageSource/api-testing.png",
        language:"/icons/csharp.png",
        githubUrl:"https://github.com/prasannashrestha011/Api-Testing-",
        des:`
            A desktop application made in c# that will assists users in testing their API data. It has similar functionality to Postaman.
            `
    },
    {
        name:'Audio player',
        imgSrc:"/ImageSource/audioplayer.png",
        language:"/icons/csharp.png",
        githubUrl:"https://github.com/prasannashrestha011/AudioPlayer",
        des:`
             "An audio player developed almost from scratch. It uses a tree view to display all the user's playlists and audio files.
            `
    }
]
export {NavItems,SkillsItems,ProjectItems}