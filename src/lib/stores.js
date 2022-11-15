import { writable } from 'svelte/store';

export const isActiveData = writable({
    about: "active",
    resume: "deactive",
    portfolio: "deactive",
    blog: "deactive",
    contact: "deactive",
});

export const portfolio_category = [
    "all",
    "web",
    "app",
    "ai",
    "other",
    "coming soon",
];
export const portfolio_content = [
  {
    datacategory: "web",
    src: "/images/Bmical.png",
    alt: "BMI Calculator",
    target: "/portfolio/BMI calculator/index.html",
  },

  {
    datacategory: "web",
    src: "/images/registration.png",
    alt: "Regestration Form",
    target: "/portfolio/Regestration form /index.html",
  },

  {
    datacategory: "web",
    src: "/images/ToDo.png",
    alt: "To Do List",
    target: "/portfolio/todolist/index.html",
  },

  {
    datacategory: "web",
    src: "/images/cityskyline.png",
    alt: "City Skyline Design",
    target: "/portfolio/cityskyline/index.html",
  },

  {
    datacategory: "web",
    src: "/images/Techdoc.png",
    alt: "Tech Documentation",
    target: "/portfolio/Tech Documentation page/index.html",
  },

  {
    datacategory: "other",
    src: "/images/hotelmenu.png",
    alt: "Hotel Menu",
    target: "/portfolio/csshotelmenu/index.html",
  },

  {
    datacategory: "other",
    src: "/images/o-balancesheet.png",
    alt: "Balancesheet ",
    target: "/portfolio/balance sheet/index.html",
  },

  {
    datacategory: "web",
    src: "/images/alarm.png",
    alt: "Alarm Clock",
    target: "/portfolio/Alarm Clock in JavaScript/index.html",
  },

  {
    datacategory: "web",
    src: "/images/BG color.png",
    alt: "Background Color Changer & Glow Buttons + icons",
    target: "/portfolio/Background changer, Hower & Glow Buttons /index.html",
  },

  {
    datacategory: "web",
    src: "/images/Quote.png",
    alt: "Random Quote Generator",
    target: "/portfolio/Quote Generator/index.html",
  },

  {
    datacategory: "coming soon",
    src: "/images/catapp.png",
    alt: "Cat App",
    target: "/portfolio/catAppproject/index.html",
  },
];

export const modalContent = writable({ src: "", alt: "", text: "", isActive: false });

export const testimonials = [
  {
    src: "images/avatar-1.png",
    alt: "Arun Raj",
    testimonial: `Plug into the power of GOD - Read BIBLE `,
  },
  {
    src: "images/avatar-2.png",
    alt: "Jessica ",
    testimonial:
      "For all have sinned and come short of the glory of GOD.- Romans 3:23, Admit that you have a need !",
  },
];

export const profile = {
    'name': 'Arun Raj',
    'email': 'riderarunraj@gmail.com',
    'mobile': '(+91) 909-408-1117',
    'role': 'Full Stack Developer',
    'linkedin': 'https://www.linkedin.com/in/arun-raj-19a48b93',
    'github': 'https://github.com/Hungrycoddie',
    'twitter': 'https://twitter.com/arunrajrider',
    'instagram': 'https://www.instagram.com/arun05raj/',
    'youtube': 'https://www.youtube.com',
    'whatsapp': 'https://wa.me/qr/LTLX5XLIZSIMK1',
    'telegram': '(+91) 934-404-4295',
    'location': 'Chennai, Tamil Nadu, IN.',
    'birthday': 'May 05 1995',
};


export const sideBarInfo = {
  profile: [
    { icon: "mail-outline", name: "Email", value: profile.email },
    { icon: "phone-portrait-outline", name: "Mobile", value: profile.mobile },
    { icon: "location-outline", name: "location", value: profile.location },
    { icon: "paper-plane-outline", name: "telegram", value: profile.telegram },
    { icon: "calendar-outline", name: "birthday", value: profile.birthday},
  ],
  // ,{icon:"phone-portrait-outline",name:"Mobile",value:profile.mobile}
  // ,{icon:"calendar-outline",name:"Birthday",value:"Sep 29,2000"}
  social: [
    { icon: "logo-linkedin", value: profile.linkedin },
    { icon: "logo-twitter", value: profile.twitter },
    { icon: "logo-instagram", value: profile.instagram },
    { icon: "logo-github", value: profile.github },
    { icon: "logo-youtube", value: profile.youtube },
    { icon: "logo-whatsapp", value: profile.whatsapp },
    // { icon: "logo-twitter", value: profile.twitter }
  ],
};


export const education = [
    {
        'name': 'Federal Institute of Science And Technology',
        'shortname': 'FISAT',
        'location': 'Angamaly',
        'start': '2019',
        'end': '2023',
        'courses': [
            'Data Structures',
            'Algorithms',
            'Object Oriented Programming',
            'Web Development',
            'Database Management',
            'Software Engineering',
            'Computer Networks',
            'Computer Graphics',
            'Formal Language and Automata Theory',
            'Compiler Design',
        ],
        'description': 'B.Tech in Computer Science & Engineering with major in Machine Learning',
        'url': 'https://www.fisat.ac.in/',
    }, {
        'name': 'Don Bosco Senior Secondary School',
        'shortname': 'Don Bosco',
        'location': 'Vaduthala',
        'start': '2017',
        'end': '2019',
        'description': 'High School with major in Computer Science',
        'url': 'https://donboscoschoolvaduthala.edu.in/',
    },
]

export const experiences = [
    {
        'name': 'ACM FISAT',
        'location': 'Angamaly, Kerala, India',
        'role': 'Event Head',
        'type': 'Volunteer',
        'start': '11/21',
        'end': 'present',
        'description': ['Designed, Developed & Coordinated the website for the ICEFOSS, an open source initiative from FISAT CSE', 'Designed & Developed the website for the Hackfit, a national Hackathon conducted by ICEFOSS', 'Conducted training sessions for python, git, and basics of web development for junior CSE students'],
        'url': 'https://verzeo.com/',
    }, {
        'name': 'Verzeo',
        'location': 'Bengaluru, Karnataka, India',
        'role': 'ReactJS Intern',
        'type': 'Internship',
        'start': '11/21',
        'end': '02/22',
        'description': ['Created a website using React router', 'Designed and coded a React-based “To Do” web app to enable users to keep track of tasks', 'Worked with react redux to store data in the application'],
        'url': 'https://verzeo.com/',
    }
]

export const services = [
  {
    src: "images/icon-design.svg",
    alt: "design icon",
    title: "Web design",
    desc: "The most modern and high-quality design made at a professional level.",
  },
  {
    src: "images/icon-dev.svg",
    alt: "Web development icon",
    title: "Full Stack Cloud Developer",
    desc: "High-quality deployment of sites at the professional level.",
  },
  {
    src: "images/icon-photo.svg",
    alt: "camera icon",
    title: "Artificial Intelligence",
    desc: "Learning ML and DL from deeplearning.ai & MIT OCW.",
  },
  {
    src: "images/icon-app.svg",
    alt: "mobile app icon",
    title: "Mobile apps",
    desc: "Basic development of applications for iOS and Android.",
  },
];

export const projects = [
    {
        'company': 'FISAT',
        'title': 'KEAM college predictor',
        'location': 'Mookkannoor, Angamaly, Kerala',
        'role': 'Web Developer',
        'type': ['Open Source', 'Frontend', 'Backend', 'Full Stack'],
        'start': '08/21',
        'end': '09/21',
        'language': ['Python', 'HTML', 'CSS'],
        'framework': ['Django'],
        'description': 'Predict college based on Kerala Entrance Rank using historical metrics',
        'url': 'https://github.com/FISAT-PROJECTS/keam-project',
    },
    {
        'company': 'Meilisearch',
        'title': 'Paris based Open Source Search Engine Startup',
        'location': 'Paris, Ile-de-France, France',
        'role': 'Open Source Contributor',
        'type': ['Open Source', 'Backend'],
        'start': '10/21',
        'end': '11/21',
        'language': ['Go'],
        'description': 'Added functionality to return search results based on index for the Golang backend',
        'url': 'https://github.com/meilisearch/meilisearch-go/pull/224',
    },
    {
        'company': '',
        'title': 'Maze',
        'location': 'Kochi, Kerala',
        'role': 'Freelance',
        'type': ['Open Source', 'Frontend'],
        'start': '02/21',
        'end': '03/21',
        'language': ['Java'],
        'framework': [],
        'description': 'GUI based Path finding algorithm using BFS & DFS',
        'url': 'https://github.com/Joel-Nickson/Maze-in-java',
    },
    {
        'company': 'Co Science',
        'title': 'Telegom',
        'location': 'Kochi, Kerala',
        'role': 'Backend Developer',
        'type': ['Open Source', 'Backend'],
        'start': '05/21',
        'end': '12/21',
        'language': ['Go'],
        'framework': [],
        'description': 'Minimalistic Telegram Bot backend made with Gorilla Web toolkit',
        'url': 'https://github.com/Co-Science/tele-go-m',
    },
]

export const projectsComingSoon = [
    {
        'company': '',
        'title': '',
        'type': ['Open Source', 'Frontend', 'Backend', 'Full Stack'],
        'start': '8/21',
        'end': '',
        'language': ['JavaScript', 'HTML', 'CSS', 'PHP'],
        'framework': ['Angular', 'Laravel'],
        'description': 'Web dev Internship',
        'url': '',
    },
    {
        'company': 'FISAT',
        'title': '',
        'type': ['Web', 'Frontend'],
        'start': '7/21',
        'end': '',
        'language': ['JavaScript', 'HTML', 'CSS'],
        'framework': ['ReactJS', 'NextJS'],
        'description': '',
        'url': '',
    },
    {
        'company': 'Microsoft',
        'title': 'Intern',
        'type': ['Web', 'Frontend'],
        'start': '7/21',
        'end': '',
        'language': [],
        'framework': [],
        'description': '',
        'url': '',
    },
]

export const skills = ['JavaScript', 'ReactJS', 'Angular', 'Svelte', 'NodeJS', 'Golang', 'Python', 'Django', 'HTML', 'CSS', 'Git', 'Java', 'C', 'Dart', 'Flutter',]

export const selectSkills = [
    {
        'name': 'Python',
        'value': '90',
        'level': 'Expert',
        'url': 'https://www.python.org/',
    },
    {
        'name': 'HTML',
        'value': '90',
        'level': 'Expert',
        'url': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        'name': 'CSS',
        'value': '90',
        'level': 'Expert',
        'url': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        'name': 'Git',
        'value': '80',
        'level': 'Intermediate',
        'url': 'https://git-scm.com/',
    },
    {
        'name': 'Golang',
        'value': '80',
        'level': 'Intermediate',
        'url': 'https://golang.org/',
    },
    {
        'name': 'JavaScript',
        'value': '70',
        'level': 'Intermediate',
        'url': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        'name': 'Java',
        'value': '60',
        'level': 'Intermediate',
        'url': 'https://www.java.com/',
    },
    {
        'name': 'ReactJS',
        'value': '60',
        'level': 'Intermediate',
        'url': 'https://reactjs.org/',
    },
    {
        'name': 'Svelte',
        'value': '60',
        'level': 'Beginner',
        'url': 'https://svelte.dev/',
    },
]