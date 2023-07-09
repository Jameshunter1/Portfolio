import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { AnalysisProject } from "../../typings";

const query = groq`
*[_type =="analysisProjects"]{
    ...,
    technologies[]->
}`;

type Data = {
  analysisProjects: AnalysisProject[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const analysisProjects: AnalysisProject[] = await sanityClient.fetch(query);

  res.status(200).json({ analysisProjects });
}