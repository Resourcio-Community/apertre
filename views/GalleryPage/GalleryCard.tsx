import { Project } from "models/gallery.model";
import Card from "../../components/BasicCard";

type ProjectProps = {
    projects: Project[];
}

export default function GalleryCard({ projects }: ProjectProps) {
    return (
        <>
            {projects.map((project: Project) => (
                <Card
                    key={project.key}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    buttonText={project.buttonText}
                    buttonhref={project.buttonHref}
                />
            ))}
        </>
    );
};
