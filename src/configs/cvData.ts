import { ReactNode } from "react";

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description?: string | string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

// Education data
export const education: TimelineItem[] = [
  {
    title: "High School",
    subtitle: "Vocational High School 4 Padalarang",
    period: "2015 - 2018",
  },
];

// Experience data
export const experience: TimelineItem[] = [
    {
        title: "Software Engineer",
        subtitle: "PT Bank Jago Tbk",
        period: "2023 - Present",
        description:["Continuosly contributed to the project as a Software Engineer, adept in both mobile and full-stack development using Flutter, ReactJS, Typescript, and NodeJS.",
                "Collaborated closely with the team to enhance cross-platform compability and optimize.",
                "Participating on task access such as Refinement to break down the task with story point"
        ]
      },
    {
        title: "Software Engineer",
        subtitle: "PT. Smooets Teknologi Outsourcing",
        period: "2020 - 2023",
        description:["Contribute to frontend and mobile development for Bank Jago Project, excelling as a dynamic Software Engineer.",
                "Specialized in FLutter, driving cross-platform development.",
                "Work closely with Product Team"
        ]
      },
  {
    title: "Frontend Developer",
    subtitle: "Ultimo Solution",
    period: "2019 - 2020",
    description:
      "UI Development for web applications as a Junior Frontend Developer with a .NET specialization, enhancing user interaction and design.",
  },
  {
    title: "Ruby On Rails Developer",
    subtitle: "41Studio",
    period: "2018-2019",
    description:
      "Developed features and work in team with Ruby on Rails.",
  },
];

// Skills data
export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "AntD", "Dart", "Flutter"],
    color: "blue",
  },
  {
    title: "Testing",
    skills: ["Jest", "E2E Testing", "Cypress"],
    color: "red",
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL"],
    color: "yellow",
  },
  {
    title: "Other",
    skills: ["Git", "Agile", "Test Driven Development"],
    color: "green",
  },
];
