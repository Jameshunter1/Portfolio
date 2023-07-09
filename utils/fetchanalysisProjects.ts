import { AnalysisProject } from "../typings";


export const fetchAnalysisProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAnalysisProject`);
  const data = await res.json();
  const analysisProjects: AnalysisProject[] = data.projects;

  return analysisProjects;
};