const displayName = "Yuri Cunha"; // Mostrar nome
const bannerDescription = "Database Administrator do Brasil"; // Descrição do banner
const mediumUrl =
    "https://api.allorigins.win/raw?url=https://medium.com/feed/@garotogordo"; // URL do feed do Medium
const mediumFilterKeyword = ""; // Palavra-chave para filtrar o feed do Medium
const email = "garotogordo@icloud.com"; // E-mail
const githubUrl = "https://github.com/garotogordo"; // URL do GitHub
const linkedInUrl = "https://www.linkedin.com/in/ycdpp/"; // URL do LinkedIn
const resumePdfTitle = "Chua-Hui-Shun-Resume.pdf"; // Título do PDF do currículo

const projects = [{
    title: "Visualising the COVID-19 Spread in Singapore",
    description: "An interactive visualisation of the spread of COVID-19 in Singapore across time.",
    stack: ["Python", "Google Sheets API", "Tableau"],
    imgName: "singapore_covid_spread.gif",
    siteUrl: "https://public.tableau.com/shared/379FDD4MD?:display_count=n&:origin=viz_share_link",
    codeUrl: "https://github.com/huishun98/SG-COVID-data-automated",
},
{
    title: "SongDedi",
    description: "A free song dedication service suitable for weddings, parties or any event.",
    stack: ["Vue.js", "Python Flask", "Firebase", "Google Analytics"],
    imgName: "songdedi.png",
    siteUrl: "https://songdedi-admin.herokuapp.com/",
    codeUrl: "https://github.com/huishun98/songdedi-admin",
    altCodeUrl: "https://github.com/huishun98/songdedi-requests",
},
];

export {
    projects,
    mediumUrl,
    mediumFilterKeyword,
    email,
    githubUrl,
    linkedInUrl,
    displayName,
    bannerDescription,
    resumePdfTitle,
};