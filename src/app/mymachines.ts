import{Machine} from './machine';

export const Machines: Machine[]=[
    {
        name: 'PhotoBomb',
        shortDescription: 'Machine with ports 22 and 80 open. The web server contains a JS file where we get the username and password to access a private path and from here start digging for the flags.',
        longDescription: `In progresssss`,
        technologies: 'Nmap, BurpSuite, Revshell',
        img: ['assets/Machines/PhotoBomb.png']
    },
    {
        name: 'Templated',
        shortDescription: 'Challenge in which we must abuse a flusk/jinja2 vulnerability. We start by using the "{{}}" syntax in the URL, where python evaluates the contents of the brackets before appearing in the HTML of the web page.',
        longDescription: `In progressss `,
        technologies: 'CyberChef, Documentation, BurpSuite',
        img: ['assets/Machines/Templated.png']
    },
    {
        name: 'PhoneBook',
        shortDescription: 'Web challenge with LDAP injection vulnerability that should allow us to obtain credentials and then the flag.',
        longDescription: `In progressss `,
        technologies: 'Documentation, John The Ripper',
        img: ['assets/Machines/Phonebook.png']
    },
]