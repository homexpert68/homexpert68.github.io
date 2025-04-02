import React from 'react';
import { Container, Title, Text, Grid, Card, Image, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import content from '../../content.json';
import { MainLayout } from '../components/layouts/MainLayout';


const Projects = () => {
    const { projects } = content.pages.projects;

    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <MainLayout>
            <Container>
                {/* <Title order={2} style={{ textAlign: 'center', marginBottom: '2rem' }}> {title} </Title> */}
                {/* <Text style={{ textAlign: 'center', marginBottom: '2rem' }}> {description} </Text> */}
                <Grid gutter="xl">
                    {projects.completed.map((project) => (
                        <Grid.Col span={isMobile ? 12 : 6} key={project.title}>
                            <ProjectCard project={project} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </MainLayout>
    )
};

const ProjectCard = ({ project }) => {
    const { title, description, images } = project;
    const imageUrl = new URL(`../assets/projects/completed/${images[0]}`, import.meta.url).href
    return (
        <Card shadow="sm" p="lg">
            <Card.Section>
                {images && images.length > 0 && (
                    <Image src={imageUrl} alt={title} height={200} />
                )}
            </Card.Section>
            <Text weight={500} size="lg" mt="md"> {title} </Text>
            <Text size="sm" color="dimmed" mt="xs"> {description} </Text>
            <Button variant="light" color="blue" fullWidth mt="md">
                View Details
            </Button>
        </Card>
    )
};

export default Projects;