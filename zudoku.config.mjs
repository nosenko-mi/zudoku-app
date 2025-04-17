/** @type {import('zudoku').ZudokuConfig} */
const config = {
  basePath: "/sn-api-docs",
  topNavigation: [
    { id: "about", label: "About" },
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
    { id: "srs", label: "Software Requirement Specification", default: "srs/purpose"},
    { id: "thesis", label: "Thesis"}
  ],
  sidebar: {
    srs: [
      {
        type: "category",
        label: "Introduction",
        items: ["srs/purpose", "srs/scope", "srs/overview"],
      },
      {
        type: "doc",
        label: "General description",
        id: "srs/general_description",
      },
      {
        type: "doc",
        label: "Functional Requirements",
        id: "srs/functional_requirements",
      },
      {
        type: "doc",
        label: "Interface Requirements",
        id: "srs/interface_requirements",
      },
      {
        type: "doc",
        label: "Performance Requirements",
        id: "srs/performance_requirements",
      },
      {
        type: "doc",
        label: "Design Constraints",
        id: "srs/design_constraints",
      },
      {
        type: "doc",
        label: "Non-Functional Attributes",
        id: "srs/non_functional_attributes",
      },
      {
        type: "doc",
        label: "Appendices",
        id: "srs/appendices",
      }
    ],
    docs: [
      {
        type: "category",
        label: "Installation",
        items: ["docs/installation"],
      },
      {
        type: "category",
        label: "Source code",
        items: ["docs/source"],
      },
      {
        type: "category",
        label: "About",
        items: ["docs/about"],
      },
    ],
  },
  redirects: [{ from: "/", to: "/about" }],
  src:{
    files: "/pages/**/*.{md,mdx}",
  },
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
  about: {
    input: "/pages/about.md",
  },
  thesis: {
    input: "/pages/thesis.md",
  }
};

export default config;
