import {
  mobile,
  backend,
  creator,
  design,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  firebase,
  git,
  figma,
  docker,
  meta,
  starbucks,
  cleversys,
  cyonm,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "proj",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Criador de Conteúdo",
    icon: creator,
  },
  {
    title: "Designer Criativo",
    icon: design,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Clever Systems LTDA",
    icon: cleversys,
    iconBg: "#FAFAFA",
    date: "Jul 2021 - Mai 2022",
    points: [
      "Desenvolvimento e manutenção de web applicações usando React.js e outras tecnologias relacionadas.",
      "Colaboração com um time incluindo designer, product manager e desenvolvedor banck-end na criação de soluções para midia indoor, totems de atendimento e sistema de chamadas.",
      "Implementando design responsivo, usando biblioteca MaterialUI focando especialmente na orientação mobile first.",
      "Aplicação de metologia ágil no fluxo de trabalho na empresa, usando tecnicas de Scrum e framework Click-Up.",
    ],
  },
  {
    title: "Projeto Acadêmico React.js",
    company_name: "Clever Systems LTDA",
    icon: cleversys,
    iconBg: "#FAFAFA",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Desenvolvimento e manutenção de web applicações usando React.js e outras tecnologias relacionadas.",
      "Colaboração com um time incluindo designer, product manager e desenvolvedor banck-end na criação de uma solução Dashboard para visualização e controle (todo o CRUD) de variáveis de um sistema de gerenciamento e automatização de um gerenciador de mídias indoor.",
      "Implementando design responsivo já utilizado pela empresa, usando biblioteca MaterialUI focando em desktop.",
      "Aplicação de metologia ágil no fluxo de trabalho na empresa, usando tecnicas de Scrum e framework Click-Up.",
    ],
  },
  {
    title: "Projeto Acadêmico C#",
    company_name: "Cyonm Informatica",
    icon: cyonm,
    iconBg: "#FAFAFA",
    date: "Ago 2022 - Dez 2022",
    points: [
      "Desenvolvimento e manutenção de uma aplicação Windows form em C#, com Web API e SQL Server.",
      "Colaboração com um time de desenvolvedorese product manager na criação de uma solução na forma de um centralizador de consulta a 3 Web APIs do nicho de GeoLocalização, retornando valores de lat, long, coordenadas, CEP, endereço e etc.",
      "Implementando usando Windows Forms.",
      "Aplicação de metologia ágil no fluxo do projeto usando tecnicas de Scrum em reuniões semanais e diárias.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuserdescsrc_link.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Telegram Covi-19 Bot",
    desc: "Um projeto pessoal de Bot de Telegram focado feito em 2021 focado em fornecer informações sobre COVID-19, desenvolvido utilizando JavaScript, para manter as pessoas atualizadas sobre a situação da pandemia. O bot oferece uma interface intuitiva e interativa para os usuários obterem dados sobre locais postos de vacinação, máscaras recomendadas, cuidados e profilaxia, taxas de vacinação e outras estatísticas relevantes. Seu design eficiente permitem que os usuários naveguem facilmente por informações cruciais na ponta dos dedos através desse bot de Telegram, fornecendo uma visão abrangente e confiável do cenário atual da COVID-19.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "telegram",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/50382278/151471843-19707ae0-1a2c-4a1e-978b-745c0d13cfe4.png",
    src_link: "https://github.com/usbangelo/covid19-telegramBot-nodejs",
    proj_link: "https://telegram.me/CovidDFBot",
  },
  {
    name: "Job IT",
    desc: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    src_link: "https://github.com/",
    proj_link: "",
  },
  {
    name: "Trip Guide",
    desc: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    src_link: "https://github.com/",
    proj_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
