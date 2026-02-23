export const archiveSettings = {
  title: "Academic Archive",
  subtitle:
    "A searchable archive of degree projects, outputs, and reflections grouped by theme and demonstrated skills.",
  includePrivateByDefault: false,
};

export const archivePosts = [
  {
    slug: "gis-capstone-habitat-modeling",
    title: "GIS Capstone: Cattle Habitat Preference Modeling",
    date: "2026-01-12",
    degree: "Master of Geomatics for Environmental Management (MGEM)",
    course: "Capstone Project",
    theme: "Geospatial Modeling",
    keySkills: ["R", "ArcGIS Pro", "Cartography", "Spatial Modeling"],
    tags: ["habitat", "gps-tracking", "rangeland", "modeling"],
    markdownPath: "/archive-posts/gis-capstone-habitat-modeling.md",
    outputs: [
      {
        label: "Seasonal Habitat Map Atlas",
        note:
          "Static cartographic deliverable showcased in the post narrative.",
      },
      {
        label: "Methods Note",
        note: "Concise methods summary written for mixed technical audiences.",
      },
    ],
    isPrivate: false,
  },
  {
    slug: "remote-sensing-land-cover-change",
    title: "Remote Sensing Studio: Land Cover Change Detection",
    date: "2025-11-03",
    degree: "Master of Geomatics for Environmental Management (MGEM)",
    course: "Remote Sensing Studio",
    theme: "Remote Sensing",
    keySkills: [
      "Google Earth Engine",
      "Python",
      "Change Detection",
      "Data Visualization",
    ],
    tags: ["landsat", "sentinel", "ndvi", "change-detection"],
    markdownPath: "/archive-posts/remote-sensing-land-cover-change.md",
    outputs: [
      {
        label: "NDVI Trend Visuals",
        note:
          "Time-series figures interpreting vegetation trends over study years.",
      },
      {
        label: "Priority Zone Map",
        note: "Map product summarizing highest-change zones for follow-up.",
      },
    ],
    isPrivate: false,
  },
  {
    slug: "policy-gis-decision-support-private",
    title: "Policy + GIS Decision Support (Private Draft)",
    date: "2025-10-08",
    degree: "BA Environment & Sustainability",
    course: "Environmental Policy Studio",
    theme: "Policy & Planning",
    keySkills: ["Policy Analysis", "Scenario Design", "GIS"],
    tags: ["policy", "decision-support", "scenario"],
    markdownPath: "/archive-posts/policy-gis-decision-support-private.md",
    outputs: [
      {
        label: "Scenario Comparison Matrix",
        note: "Draft matrix pending review.",
      },
    ],
    isPrivate: true,
  },
];

export const themeOrder = [
  "Geospatial Modeling",
  "Remote Sensing",
  "Policy & Planning",
];
