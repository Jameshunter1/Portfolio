interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: image;
    _type: "reference";
  };
}
export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  description: string;
  title: string;
}
export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  description: string;
  image: Image;


}

export interface DevelopmentProject extends SanityBody {
  _type: "developmentProjects";
  image: Image;
  summary: string;
  title: string;
  technologies: Technology[];
  url: string;
  sourceCodeUrl: string;
}
export interface AnalysisProject extends SanityBody {
  _type: "analysisProjects";
  image: Image;
  summary: string;
  title: string;
  technologies: Technology[];
  url: string;
  sourceCodeUrl: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
