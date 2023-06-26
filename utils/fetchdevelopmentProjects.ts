import { DevelopmentProject } from "../typings"

export const fetchdevelopmentProject = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getdevelopmentProjects`);

    const data = await res.json()
    const DevelopmentProject: DevelopmentProject[] = data.projects;

    return DevelopmentProject;
}