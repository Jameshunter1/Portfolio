import { DevelopmentProject } from "../typings";

export const fetchDevelopmentProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getDevelopmentProject`);
  const data = await res.json();
  const developmentProjects: DevelopmentProject[] = data.projects;

  return developmentProjects;
};