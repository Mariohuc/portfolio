const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "National University of San Agustín",
        degree: "BS, Computer System Engineering",
        detail:
          "Bachelor's Degree in Computer System Engineering from National University of San Agustín.",
        year: "2012-2019",
      },
      /* {
                id: 1,
                title: 'Peshawar Model Degree College',
                degree: 'HSSC, Pre Engineering',
                detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
                year: '2015-2017'
            },
            {
                id: 2,
                title: 'Falcon Academy',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
                year: '2013-2015'
            }, */
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Smart Reasons",
        role: "Full-stack Developer",
        url: "https://www.sweatworks.com/",
        desc: "As part of development and support team implementing solutions for the company's proprietary ERP",
        year: "03/2024 - present",
        location: "Perú, Arequipa",
      },
      {
        id: 2,
        title: "Sweatworks",
        role: "Full-stack Developer",
        url: "https://www.sweatworks.com/",
        desc: "As part of different teams implementing solutions for Y7 studios and company's own products",
        year: "01/2022 - 01/2023",
        location: "Arlington, United States",
      },
      {
        id: 3,
        title: "MDP Consulting S.A.C",
        role: "Full-stack Developer",
        url: "no website",
        desc: "As part of a development team implementing solutions for Niubiz",
        year: "05/2021 - 12/2021",
        location: "Lima, Perú",
      },
      {
        id: 4,
        title: "Self-employed",
        role: "Freelance",
        url: "no website",
        desc: "As an independent developer I built web applications with Laravel and Node.js mainly",
        year: "03/2019 - 03/2021",
        location: "Arequipa, Perú",
      },
      {
        id: 5,
        title: "CITECCAL Arequipa",
        role: "Internee",
        url: "no website",
        desc: "As part of an internship team of 5 people for the development of the sales and production module of the CITEccal ERP system",
        year: "09/2019 - 01/2020",
        location: "Arequipa, Perú",
      },
      {
        id: 6,
        title: "ZOODEX Research Center",
        role: "Research Assistant",
        url: "http://citesoft.unsa.edu.pe:8003/zoodex.html",
        desc: "Contributed to the development of user menus for augmented reality applications in Unity",
        year: "03/2018 - 10/2018",
        location: "Arequipa, Perú",
      },
      {
        id: 7,
        title: "Alimentos Procesados S.A",
        role: "Technical Assistant",
        url: "no website",
        desc: "As a technical assistant I did inventory work and kept the equipment working properly",
        year: "01/2018 - 03/2018",
        location: "Arequipa, Perú",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
