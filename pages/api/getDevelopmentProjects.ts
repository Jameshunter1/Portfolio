import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { DevelopmentProject } from "../../typings";

const query = groq`
*[_type =="project"]{
    ...,
    technologies[]->
}`;

type Data = {
  projects: DevelopmentProject[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: DevelopmentProject[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
