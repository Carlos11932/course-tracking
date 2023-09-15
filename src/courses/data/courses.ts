import { Course } from '../../types/course'

export const courses: Course[] = [
{
    'id': 1,
    'name':'React course', 
    'type':'front-end', 
    'minutes':330,
    'isFinished': [],
    'blocks': [
        {
            'id': 1,
            'name': 'Introduction to React',
            'content': 'This is the introduction to React block',
            'minutes': 30,
            'isFinished': false
        },
        {
            'id': 2,
            'name': 'React Components',
            'content': 'This block covers the basics of React components',
            'minutes': 60,
            'isFinished': false
        },
        {
            'id': 3,
            'name': 'React State Management',
            'content': 'This block covers React state management',
            'minutes': 120,
            'isFinished': false
        },
        {
            'id': 4,
            'name': 'React Hooks',
            'content': 'This block covers React hooks',
            'minutes': 45,
            'isFinished': false
        },
        {
            'id': 5,
            'name': 'React Router',
            'content': 'This block covers React router',
            'minutes': 75,
            'isFinished': false
        }
    ],
    'students': [
    
    ],
    'comments': [
    
    ]
},
{
    'id': 2,
    'name':'React advanced course', 
    'type':'front-end', 
    'minutes':375,
    'isFinished': [],
    'blocks': [
        {
            'id': 1,
            'name': 'Advanced React Patterns',
            'content': 'This block covers advanced React patterns',
            'minutes': 50,
            'isFinished': false
        },
        {
            'id': 2,
            'name': 'React Performance Optimization',
            'content': 'This block covers React performance optimization',
            'minutes': 90,
            'isFinished': false
        },
        {
            'id': 3,
            'name': 'React and TypeScript',
            'content': 'This block covers using TypeScript with React',
            'minutes': 120,
            'isFinished': false
        },
        {
            'id': 4,
            'name': 'React Context API',
            'content': 'This block covers React Context API',
            'minutes': 35,
            'isFinished': false
        },
        {
            'id': 5,
            'name': 'React Testing',
            'content': 'This block covers testing in React',
            'minutes': 80,
            'isFinished': false
        }
    ]
},
{
    'id': 3,
    'name':'TypeScript course', 
    'type':'front-end', 
    'minutes':385,
    'isFinished': [],
    'blocks': [
    {
        'id': 1,
        'name': 'Introduction to TypeScript',
        'content': 'This is the introduction to TypeScript block',
        'minutes': 120,
        'isFinished': false
    },
    {
        'id': 2,
        'name': 'TypeScript Variables',
        'content': 'This block covers TypeScript variables',
        'minutes': 45,
        'isFinished': false
    },
    {
        'id': 3,
        'name': 'TypeScript Functions',
        'content': 'This block covers TypeScript functions',
        'minutes': 60,
        'isFinished': false
    },
    {
        'id': 4,
        'name': 'TypeScript Interfaces',
        'content': 'This block covers TypeScript interfaces',
        'minutes': 80,
        'isFinished': false
    },
    {
        'id': 5,
        'name': 'TypeScript Classes',
        'content': 'This block covers TypeScript classes',
        'minutes': 80,
        'isFinished': false
    }
    ],
    'students': []
},
{
    'id': 4,
    'name':'Java Course', 
    'type':'back-end', 
    'minutes':365,
    'isFinished': [],
    'blocks': [
    {
        'id': 1,
        'name': 'Java basics',
        'content': 'This is the Java basics block',
        'minutes': 120,
        'isFinished': false
    },
    {
        'id': 2,
        'name': 'Java OOP',
        'content': 'This block covers Java Object Oriented Programming',
        'minutes': 90,
        'isFinished': false
    },
    {
        'id': 3,
        'name': 'Java Data Structures',
        'content': 'This block covers Java data structures',
        'minutes': 75,
        'isFinished': false
    },
    {
        'id': 4,
        'name': 'Java Algorithms',
        'content': 'This block covers Java algorithms',
        'minutes': 80,
        'isFinished': false
    }
    ]
}
]