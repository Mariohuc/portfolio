const portfolio = [
    {
        id: 0,
        projectName: "EDUGRÁFICAS 3D",
        url: "https://mariohuc.github.io/edugraficas3d/#/home",
        image: "projects/edugraficas.png",
        projectDetail: "This Angular project is intended for students to learn about mathematical 3D surfaces through visualization. Three.js was used to render the displayed 3D graphics and Material for styling the user menus.",
        repoLink: "https://github.com/Mariohuc/edugraficas3d",
        technologiesUsed: [
            {
                tech: "Three.js"
            },
            {
                tech: "Angular"
            },
            {
                tech: "Math.js"
            },
            {
                tech: "Angular Material"
            },
        ]
    },
    {
        id: 1,
        projectName: "CALCAR",
        url: "",
        image: "projects/calcar.png",
        projectDetail: "This project is like the mobile application version of the previous project, since it was developed in Unity 3D and ARCore was used to visualize the 3D objects.",
        repoLink: "https://github.com/Mariohuc/AppArcoreCalcar",
        technologiesUsed: [
            {
                tech: "Unity"
            },
            {
                tech: "C#"
            },
            {
                tech: "ARCore"
            },
            {
                tech: "Android"
            },
        ]
    },
    {
        id: 2,
        projectName: "SISIDOX",
        url: "https://sisidoxpro.web.app/#/",
        image: "projects/sisidoxpro.png",
        projectDetail: "This is a web application meant for providing medical teleconsultation service, which sought to contribute to reducing COVID-19 infections within hospitals in Arequipa.",
        repoLink: "https://github.com/Mariohuc/sisidox-vue-app",
        technologiesUsed: [
            {
                tech: "Vue"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "PWA"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "Firebase"
            },
            {
                tech: "Vuetify"
            },
        ]
    },
    
    /* {
        id: 1,
        projectName: "Otawix",
        url: "https://b2c.otawix.com/",
        image: "projects/otawix.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "MUI"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "Spatay",
        url: "https://spatay.com/",
        image: "projects/spatay.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    }, */
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
