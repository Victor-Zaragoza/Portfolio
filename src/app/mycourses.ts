import{Course} from './course';

export const Courses: Course[]=[
    {
        name: 'Introduction to Cybersecurity',
        shortDescription: 'Explore the exciting field of cybersecurity and why cybersecurity is a future-proof career.',
        acquiredKnowledge: `In my first approach to security I was able to learn about the various levels of protection, 
                            about foundational principles for protective information, various types of malware, categories 
                            of software vulnerabilities, IDS and IPS, security best practices, among many other topics that have 
                            introduced me to the world of cybersecurity and they motivate me to learn all these topics in depth`,
        platform: 'CISCO Networking Academy',
        duration: '6 Hours',
        img: ['assets/Courses/course1.png']
    },
    {
        name: 'Start Kali Linux, Ethical Hacking and Penetration Testing',
        shortDescription: '',
        acquiredKnowledge: `Learn the basics of what ethical hacking and penetration testing. Install VirtualBox and gain 
                            the ability to run Kali Linux in any environment. See what to do to create the virtual environment and learn 
                            the basics of the Linux terminal.`,
        platform: 'Udemy',
        duration: '4 Hours',
        img: ['assets/Courses/course1.png']
    },
    {
        name: 'Hack Yourself First: How to go on the Cyber-Offense',
        shortDescription: '',
        acquiredKnowledge: `This course comes at security from the view of the attacker in that their entry point is typically the browser. 
                            They have a website they want to probe for security risks and this is how they go about it.`,
        platform: 'pluralsight',
        duration: '4 Hours',
        img: ['assets/Courses/plural.png']
    },
]