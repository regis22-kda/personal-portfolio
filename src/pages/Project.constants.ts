export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio showcasing projects and skills, built with React, TypeScript, and Ant Design. Designed with a clean UI and responsive layout to provide an engaging user experience.",
      image: "https://via.placeholder.com/400x200?text=Portfolio",
      tags: ["React", "TypeScript", "AntD"],
      github: "https://github.com/rheganandar/portfolio",
      demo: "https://portfolio-link.com",
    },
    {
      title: "Jago Control Board (Jacob)",
      description:
        "A microfrontend-based control panel for internal banking operations, built as an enhanced successor to the Branch Teller System (BTS). Developed using React, TypeScript, and Single-spa for modular and scalable architecture.",
      image: "https://via.placeholder.com/400x200?text=Jacob",
      tags: ["React", "TypeScript", "AntD", "Single-spa"],
      github: "https://github.com/rheganandar/",
      demo: "https://portfolio-link.com",
    },
    {
      title: "Bank Jago App",
      description:
        "Contributed to the development of core features in Bank Jago’s mobile banking application, focusing on secure, user-friendly financial services. Built using Flutter for cross-platform support.",
      image: "https://via.placeholder.com/400x200?text=Bank+Jago",
      tags: ["Flutter"],
      github: "https://github.com/rheganandar/",
      demo: "#",
    },
    {
      title: "Branch Teller System (BTS)",
      description:
        "An internal banking system designed for branch level operations and transaction management. Developed to streamline workflows and improve efficiency within bank branches.",
      image: "https://via.placeholder.com/400x200?text=BTS",
      tags: ["Flutter, NodeJS, MongoDB"],
      github: "https://github.com/rheganandar/",
      demo: "#",
    },
  ];
  