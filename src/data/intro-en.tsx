import ProfileImg from '@public/img/profile.svg'

export const INTRO_EN = {
    name: 'Wonseok Choi',
    about: 'Front-end developers who value communication and growth',
    profileImg: <ProfileImg />,
    summary: 'I believe that development starts with communication\nI think that good communication can solve problems from different perspectives and create good results.\nI am constantly studying development to create good results',
    email: 'cocopang178@gmail.com',
    education: [
        {
            id: 0,
            title: 'Kwangwoon University',
            degree: 'Faculty of Software',
            startDate: '2018.03',
            endDate: '2024.02',
        },
        {
            id: 1,
            title: 'Likelion Univ',
            degree: 'Complete Front-end Training',
            startDate: '2022.01',
            endDate: '2022.12',
        },
        {
            id: 2,
            title: 'Google Developer Student Clubs.KW',
            degree: 'Front-end CORE(Operations staff)',
            startDate: '2023.09',
            endDate: '2024.08',
        }
    ],
    skills: ['Javascript', 'Typescript', 'React.js', 'Next.js'],
} as const;
