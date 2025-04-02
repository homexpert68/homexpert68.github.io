import {
    IconBook,
    IconChartPie3,
    IconChevronDown,
    IconCode,
    IconCoin,
    IconFingerprint,
    IconNotification,
} from '@tabler/icons-react';
import {
    Box,
    Burger,
    Center,
    Collapse,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './MainLayout.module.css';

const menus = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Our Expertise',
        href: '/expertise',
    },
    {
        title: 'Projects',
        href: '/projects',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
]

const mockdata = [
    {
        title: 'Group Overview',
        href: '/group-overview',
    },
    {
        title: 'Awards, Certifications & Recognitions',
        href: '/awards-certifications-recognitions',
    },
    {
        title: 'Our People',
        href: '/our-people',
    },
];

const mockdata2 = [
    {
        title: 'Construction',
        href: '/construction',
    },
    {
        title: 'Building Materials',
        href: '/building-materials',
    },
    {
        title: 'Agriculture',
        href: '/agriculture',
    },
    {
        title: 'Property Development',
        href: '/property-development',
    },
    {
        title: 'Technology',
        href: '/technology',
    },
    {
        title: 'Consulting',
        href: '/consulting',
    },


];


export function MainLayout({ children }) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const [linksOpened2, { toggle: toggleLinks2 }] = useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <a href={item.href} className={classes.link}>
                <Text size="sm" fw={500}>
                    {item.title}
                </Text>
            </a>
        </UnstyledButton>
    ));

    const links2 = mockdata2.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <a href={item.href} className={classes.link}>
                <Text size="sm" fw={500}>
                    {item.title}
                </Text>
            </a>
        </UnstyledButton>
    ));

    return (
        <Box pb={120}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    {/* <MantineLogo size={30} /> */}
                    <img src={'https://www.sagagroup.com/wp-content/uploads/2021/03/Saga-Group-Logo-1.png'} alt="Saga Group" />

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <a href={menus[0].href} className={classes.link}>
                            {menus[0].title}
                        </a>
                        <HoverCard width={200} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href={menus[1].href} className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            {menus[1].title}
                                        </Box>
                                        <IconChevronDown size={16} color={theme.colors.blue[6]} />
                                    </Center>
                                </a>
                            </HoverCard.Target>
                            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                <SimpleGrid cols={1} spacing={0}>
                                    {links}
                                </SimpleGrid>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <HoverCard width={200} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href={menus[2].href} className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            {menus[2].title}
                                        </Box>
                                        <IconChevronDown size={16} color={theme.colors.blue[6]} />
                                    </Center>
                                </a>
                            </HoverCard.Target>
                            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                <SimpleGrid cols={1} spacing={0}>
                                    {links2}
                                </SimpleGrid>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <a href={menus[3].href} className={classes.link}>
                            {menus[3].title}
                        </a>
                        <a href={menus[4].href} className={classes.link}>
                            {menus[4].title}
                        </a>
                    </Group>


                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>
            {children}
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Saga Group"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px" mx="-md">
                    <Divider my="sm" />

                    <a href={menus[0].href} className={classes.link}>
                        {menus[0].title}
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                {menus[1].title}
                            </Box>
                            <IconChevronDown size={16} color={theme.colors.blue[6]} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <UnstyledButton className={classes.link} onClick={toggleLinks2}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                {menus[2].title}
                            </Box>
                            <IconChevronDown size={16} color={theme.colors.blue[6]} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened2}>{links2}</Collapse>
                    <a href={menus[3].href} className={classes.link}>
                        {menus[3].title}
                    </a>
                    <a href={menus[4].href} className={classes.link}>
                        {menus[4].title}
                    </a>

                </ScrollArea>
            </Drawer>
        </Box>
    );
}