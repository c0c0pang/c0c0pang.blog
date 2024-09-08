'use client';

import { Select } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';

const LanguageButton = () => {
    const pathName = usePathname();
    const router = useRouter();

    const isKo = pathName.endsWith('/ko');
    const isEn = pathName.endsWith('/en');


    const onChange = (value: string) => {
        console.log(value);
        if (value === 'ko') router.push(pathName.replace(/\/en$/, '/ko'));
        else router.push(pathName.replace(/\/ko$/, '/en'));
    }

    return (
        <Select
            w='100px'
            fontSize='12px'
            onChange={(e) =>
                onChange(e.currentTarget.value)}
            defaultValue={isEn ? 'en' : 'ko'}>
            <option value='ko' disabled={isKo}>한국어</option>
            <option value='en' disabled={isEn}>English</option>
        </Select>
    )
}

export default LanguageButton;