import ProfileImg from '@public/img/profile.svg'

export const INTRO_KO = {
    name: '최원석',
    about: '소통과 성장을 중요시 하는 프론트엔드 개발자',
    profileImg: <ProfileImg />,
    summary: '개발은 소통에서 부터 시작한다고 생각합니다.\n원활한 소통은 다양한 시각에서 문제를 해결할 수 있고, 좋은 결과를 만들 수 있는 힘이 된다 생각합니다.\n좋은 결과를 만들기 위해 꾸준히 개발 공부를 하고 있습니다.',
    email: 'cocopang178@gmail.com',
    education: [
        {
            id: 0,
            title: '광운대학교',
            degree: '소프트웨어학부',
            startDate: '2018.03',
            endDate: '2024.02',
        },
        {
            id: 1,
            title: '멋쟁이 사자처럼대학',
            degree: '프론트 엔드 파트 수료',
            startDate: '2022.01',
            endDate: '2022.12',
        },
        {
            id: 2,
            title: 'Google Developer Student Clubs.KW',
            degree: '프론트엔드 CORE(운영진)',
            startDate: '2023.09',
            endDate: '2024.08',
        }
    ],
    skills: ['Javascript', 'Typescript', 'React.js', 'Next.js'],
} as const;
