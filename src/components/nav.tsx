'use client'
import { Button, ButtonGroup, Flex, IconButton, Link } from '@chakra-ui/react'
import React from 'react'
import GithubIcon from '@public/icon/github-icon.svg'
import LinkedinIcon from '@public/icon/linkedin-icon.svg'
import LanguageButton from './about_function/language-button'
import { usePathname } from 'next/navigation'
import { NavInterface } from 'types'

const localePathList = ['/about'];
const navList = [
    { id: 0, name: 'Post', href: '/post' },
    { id: 1, name: 'About', href: '/about' },
]
const Nav = () => {
    const pathName = usePathname();
    const isLocalePath = localePathList.some((path) => pathName.startsWith(path));
    return (
        <Flex
            bg='#ffffff'
            minWidth='max-content'
            justifyContent='space-between'
            alignItems='center'
            p='20px 80px 20px 80px'
            borderColor='#CECECE'
            borderBottomWidth={0.8}
        >
            <ButtonGroup gap={6}>
                {navList.map((e: NavInterface) => {
                    return (
                        <Link href={e.href} key={e.id}>
                            <Button size='xs' p={4} borderRadius={10}>
                                {e.name}
                            </Button>
                        </Link>
                    )
                })}
            </ButtonGroup>
            {isLocalePath && <LanguageButton />}

            <ButtonGroup gap={8}>
                <IconButton colorScheme='white' aria-label='Github' icon={<GithubIcon width={40} height={40} />} />
                <IconButton colorScheme='white' aria-label=' Github' icon={<LinkedinIcon width={40} height={40} />} />
            </ButtonGroup>
        </Flex>
    )
}

export default Nav