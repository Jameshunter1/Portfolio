export default {
  name: "analysisProjects",
  title: "AnalysisProject",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },

    {
      name: "url",
      title: "url",
      type: "url",
    },
    {
      name: "sourceCodeUrl",
      title: "Source Code URL",
      type: "url",
    },
  ],
};