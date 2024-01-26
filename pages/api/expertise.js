const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled Full stack developer with appreciable experience in building robust web applications using SQL/MongoDB databases, Express.js, React.js, and Node.js. I possess a good understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'Scrum and Jira',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I've used Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    /* {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    }, */
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "I usually take some time on weekend or at nights and contribute into opensource or personal projects. It gives me opportunity to learn from best developer's practices and also gives me a chance to implement or use tools that didn't get to develop or use at work.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
