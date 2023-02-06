import{Project} from './project';

export const Projects: Project[]=[
    {
        name: 'MatchUAA',
        shortDescription: 'Dating application focused only for students of my university. You make a registration with personal information and preferences and you can start searching among the dating options.',
        longDescription: `Team project consisting of a dating application only at my university. I was in charge of developing the entire backend in Node JS using Express, the program has a complete crud and a basic chat.
                            The project still has a lot to improve to be functional `,
        technologies: 'Angular, NodeJS, Express, MySQL',
        linkGit: 'https://github.com/UAA-Proyectos/UaaParejasBackEnd.git',
        linkHost: '', 
        img: ['assets/Projects/matchuaa1.png','assets/Projects/matchuaa2.png', 'assets/Projects/matchuaa3.png', 'assets/Projects/matchuaa4.png', 'assets/Projects/matchuaa5.png', 'assets/Projects/matchuaa6.png']
    },
    {
        name: 'Grocery Store',
        shortDescription: 'Online Grocery Store deploy on Firebase, with user registration, CRUD for the admin, location via google maps and the possibility of being exported to Android and IOS.',
        longDescription: `Personal project based on various courses and Ionic documentation. As an administrator we can explore the store, add new products and edit their data. We can also see the pending orders and change their status. As users, we can register, assign our address with google maps, buy products, view our shopping cart and view our shopping history.
        This project is made with Ionic, which allows us to use a capacitor, so this app is ready to be exported to Android Studio and Xcode to be deployed as a mobile application. `,
        technologies: 'Ionic, Angular, Firebase, Capacitor and Bootstrap',
        linkGit: 'https://github.com/Victor-Zaragoza/OnlineStore.git',
        linkHost: 'https://grocerystoree.web.app/', 
        img: ['assets/Projects/grocery1.png','assets/Projects/grocery2.png', 'assets/Projects/grocery3.png', 'assets/Projects/grocery4.png', 'assets/Projects/grocery5.png', 'assets/Projects/grocery6.png', 'assets/Projects/grocery7.png']
    },
    {
        name: 'Heroes Encyclopedia',
        shortDescription: 'Encyclopedia of various superheroes in which you can learn information such as their origins, to which universe they belong and the date of their first appearance.',
        longDescription: 'Personal project of a web page created with Angular, bootstrap and deploy on GitHub Pages. This project it´s a simple encyclopedia of various superheros, with a superheros searcher.',
        technologies: 'Angular, Bootstrap and GitHub Pages',
        linkGit: 'https://github.com/Victor-Zaragoza/ProyHeroes.git',
        linkHost: 'https://victor-zaragoza.github.io/ProyHeroes/home', 
        img: ['assets/Projects/heroes1.png', 'assets/Projects/heroes2.png', 'assets/Projects/heroes3.png', 'assets/Projects/heroes4.png',]
    },
    // {
    //     name: 'Hardware store',
    //     description: '',
    //     technologies: 'Angular, Firebase, NodeJs',
    //     linkGit: 'https://github.com/Victor-Zaragoza/FerreteriaDonPepe.git',
    //     linkHost: 'https://ferreteria-c749.web.app/', 
    //     img: []
    // },
    {
        name: 'Hotel Managment',
        shortDescription: 'Hotel check-in simulator in which the administrator can register new clients, check out and access hotel data.',
        longDescription: 'Team project using Java, Apache and MySQL. In this system, the administrator is able to register a new guest, assign a room according to their needs, generate a PDF with the guests data when they check out, in addition to having access to various hotel information, such as guest information and occupation data. All information is managed through a SQL database.',
        technologies: 'Java, Apache and MySQL',
        linkGit: 'https://github.com/Victor-Zaragoza/HotelManagement_.git',
        linkHost: '', 
        img: ['assets/Projects/Hotel1.png', 'assets/Projects/Hotel2.png', 'assets/Projects/Hotel3.png','assets/Projects/Hotel4.png','assets/Projects/Hotel5.png']
    },
    {
        name: 'Food Delivery Simulator',
        shortDescription: 'Food Delivery simulator in which you can access a list of various restaurants and types of food in which you could simulate ordering food through the shopping cart.',
        longDescription: 'Team project carried out entirely in the backend language PHP, in which the interface shows various sections where we can see food by type or by restaurant in which we can add to the shopping cart and finally simulate the purchase. As an administrator we are able to edit users, restaurants and dishes, as well as add and delete them. All information about dishes and users is managed in a SQL database.',
        technologies: 'PHP, JavaScript, HTML, CSS, Apache, MySQL',
        linkGit: 'https://github.com/Victor-Zaragoza/fasfu.git',
        linkHost: '', 
        img: ['assets/Projects/fasfu1.png', 'assets/Projects/fasfu2.png', 'assets/Projects/fasfu3.png', 'assets/Projects/fasfu4.png', 'assets/Projects/fasfu5.png', 'assets/Projects/fasfu6.png']
    },
    {
        name: 'Drag and drop  game',
        shortDescription: 'Game for children in which they drag animals to their habitat.',
        longDescription: 'Small project using only JavaScript, HTML, CSS and Bootstrap. Using the JavaScript drag and drop functionality it is possible for the player to drag various animals into their habitat.',
        technologies: 'Javascript, HTML, Bootstrap',
        linkGit: 'https://github.com/Victor-Zaragoza/RalphElArrastrador.git',
        linkHost: '', 
        img: ['assets/Projects/drop1.png', 'assets/Projects/drop2.png', 'assets/Projects/drop3.png']
    }
]