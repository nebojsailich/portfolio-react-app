import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";

export default {
  name: "Nebojsa Ilic",
  title: "Junior Front-End Developer ",

  birthday: "09 May 1987",
  email: "nebojsa87ilic@gmail.com",

  socials: {
    GitHub: {
      link: "https://github.com/nebojsailich/",
      text: "GitHub",
      icon: <GitHubIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/nebojsa-ilic87/",
      text: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com/shone_ftg_wcs/",
      text: "Instagram",
      icon: <InstagramIcon />,
    },
  },

  about:
    "My name is Nebojsa Ilic, I live in Belgrade and in 2020 I decided to pursue a career in programming. \n I started with several online courses to get a feel for what direction I’d like to take and was drawn to front-end programming. \n I liked it because of it merged design, animation and all other visual components through programming. \n In 2021 I completed my certification for front-end developers at the Belgrade Institute of Technology (BIT), which was a great experience that drove my love of programming further and helped me realize my wish to have a career in the field. \n In order to deepen my knowledge of the field I am currently interested in joining a team as an intern, to assist where I can and further my understanding of programming. \n In my free time I enjoy working on music production and am an active DJ on the Belgrade club scene. \n Feel free to reach out if you’d like to work together!",

  experiences: [
    {
      title: "Sim Solution",
      date: "2018 - Project",
      description:
        "Belgrade, Serbia Production of Advertisements for Philip Morris and British American Tobacco.",
    },

    {
      title: "CleanGrad (Berg - Belgium / Godollo - Hungary)",
      date: "January 2019 - May 2020",
      description:
        "A company that cooperates with many factories across Europe, for the production of pharmaceuticals, laboratories, microelectronic companies, sterile production, operating theaters and hospitals, food industry.",
    },

    {
      title: "Perollo ",
      date: "November 2013 - January 2016 ",
      description:
        "Work in the production of advertisements of all kinds, assembly, installation, field work, work in graphics and workshop.",
    },

    {
      title: "Zvezdara Theater",
      date: "November 2012 - August 2013 ",
      description:
        " Decorator-Technical Service - Responsible for the decor, props, as well as accompanying devices and equipment for the smooth performance of the play.",
    },

    {
      title: "Theater “Atelje 212”",
      date: "October 2011 - November 2012",
      description:
        " Decorator-Technical Service - Responsible for the decor, props, as well as accompanying devices and equipment for the smooth performance of the play.",
    },
  ],

  educations: [
    {
      title: "Belgrade Institute of Technology - BIT",
      date: "Belgrade, Serbia 2021 ",
      description:
        "Front End Boot Camp / Attended a 10 week long (400 hours) bootcamp for front-end web development. During thebootcamp we had 9 hours of lectures and practical work every day with additional tasks and projects.",
    },

    {
      title: "High School ‘Technical School GSP’",
      date: "Belgrade, Serbia 2008",
      description: "Driver",
    },
  ],

  services: [
    {
      title: "Web",
      description: "I am a Junior Web Developer",
      icon: <DeveloperBoardIcon />,
    },
  ],

  skills: [
    {
      title: "Front-End",
      description: ["Html", "Css / Sass", "Bootstrap5", "Javascript", "React"],
    },

    {
      title: "Source Control",
      description: ["Git", "GitHub"],
    },
  ],

  projects: [
    {
      tag: "Bootstrap5",
      image:
        "https://kupichitay.com.ua/wp-content/uploads/2019/07/Eloquent-JavaScript.jpg",
      title: "Book Review Eloquent Javascript ",
      caption: "Bootstrap5 Project",
      description:
        "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications. This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of JavaScript and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope. A host of new exercises have also been added to test your skills and keep you on track.",
      links: [
        { link: "https://book-review-bs5.netlify.app/", text: "Open Project" },
      ],
    },

    {
      tag: "React",
      image:
        "https://i0.wp.com/www.styleshout.com/wp-content/uploads/2019/02/color-tools-thumb.jpg?fit=1050%2C788&ssl=1",
      title: "Color Generator",
      caption: "Hex Color Generator / React Project",
      description:
        "A color hex code is a hexadecimal way to represent a color in RGB format by combining three values – the amounts of red, green and blue in a particular shade of color. These color hex codes have been an integral part of HTML for web design, and remain a key way of representing color formats digitally.",
      links: [
        {
          link: "https://colors-generator-react.netlify.app/",
          text: "Open Project",
        },
      ],
    },

    {
      tag: "React",
      image: "https://gizmocrunch.com/wp-content/uploads/2020/11/329633.jpg",
      title: "Movie - Watchlist",
      caption: "Movie - Watchlist / React Project",
      description:
        "Movie Watchlist using React, implementing React Hooks, Context API, storing data in localStorage and fetching data from an external API (The Movie Database)",
      links: [
        {
          link: "https://movie-watchlist-app.netlify.app/",
          text: "Open Project",
        },
      ],
    },
  ],
};
