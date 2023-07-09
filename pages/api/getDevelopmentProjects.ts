import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { DevelopmentProject } from "../../typings";

const query = groq`
*[_type =="developmentProjects"]{
    ...,
    technologies[]->
}`;

type Data = {
  developmentProjects: DevelopmentProject[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const developmentProjects: DevelopmentProject[] = await sanityClient.fetch(query);

  res.status(200).json({ developmentProjects});
}
