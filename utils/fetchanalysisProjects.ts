import { AnalysisProject } from "../typings"

export const fetchanalysisProject = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getanalysisProjects`);

    const data = await res.json()
    const AnalysisProject: AnalysisProject[] = data.projects;

    return AnalysisProject;
}