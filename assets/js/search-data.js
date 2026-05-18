// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-学术成果",
          title: "学术成果",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/zh/publications/";
          },
        },{id: "nav-cv",
          title: "Cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-cv",
          title: "Cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/zh/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-有关于半人马负重辅助机器人的相关成果-design-modeling-control-and-evaluation-of-a-wearable-centaur-robot-for-load-carriage-walking-assistance-被南方科技大学新闻网报道-阅读更多",
          title: '有关于半人马负重辅助机器人的相关成果“Design, Modeling, Control, and Evaluation of a Wearable Centaur Robot for Load-carriage Walking...',
          description: "",
          section: "News",},{id: "news-our-ijrr-paper-design-modeling-control-and-evaluation-of-a-wearable-centaur-robot-for-load-carriage-walking-assistance-was-covered-by-sustech-news-read-more",
          title: 'Our IJRR paper “Design, Modeling, Control, and Evaluation of a Wearable Centaur Robot...',
          description: "",
          section: "News",},{id: "news-我们的半人马机器人登上南方科技大学官网首页轮播宣传视频-本地存档-首页截图-视频片段",
          title: '我们的半人马机器人登上南方科技大学官网首页轮播宣传视频。本地存档：首页截图 · 视频片段。',
          description: "",
          section: "News",},{id: "news-our-centaur-robot-is-now-featured-in-the-rolling-promotional-video-on-the-sustech-official-homepage-archived-homepage-screenshot-video-clip",
          title: 'Our Centaur robot is now featured in the rolling promotional video on the...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "research_projects-limited-footholds-locomotion-control-for-quadruped-robots",
          title: 'Limited footholds locomotion control for quadruped robots',
          description: "Vision-based quadruped locomotion control over sparse and limited footholds using object detection",
          section: "Research_projects",handler: () => {
              window.location.href = "/research_projects/Quadruped/";
            },},{id: "research_projects-human-centaur-locomotion-control-via-rl-and-human-motion-generation",
          title: 'Human–Centaur locomotion control via RL and human motion generation',
          description: "Perception-free multi-terrain locomotion policy for Human-Centaur system via Reinforement learning",
          section: "Research_projects",handler: () => {
              window.location.href = "/research_projects/centaur_robot/";
            },},{id: "research_projects-example-research-project",
          title: 'Example Research Project',
          description: "This is an example research project that can be completed or in progress.",
          section: "Research_projects",handler: () => {
              window.location.href = "/research_projects/example_project/";
            },},{id: "research_projects-你的研究项目标题",
          title: '你的研究项目标题',
          description: "项目描述（会显示在标题下方，斜体）",
          section: "Research_projects",handler: () => {
              window.location.href = "/research_projects/template/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:{"%65%6D%61%69%6C"=>"%31%32%31%33%31%30%39%34@%6D%61%69%6C.%73%75%73%74%65%63%68.%65%64%75.%63%6E", "%6C%6F%67%6F"=>"%68%74%74%70%73://%63%64%6E.%73%69%6D%70%6C%65%69%63%6F%6E%73.%6F%72%67/%67%6D%61%69%6C"}", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user={"id"=>"EivJugcAAAAJ", "logo"=>"https://cdn.simpleicons.org/googlescholar"}", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/{"id"=>"0000-0002-0166-5835", "logo"=>"https://cdn.simpleicons.org/orcid"}", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/%7B%22url%22=%3E%22/assets/pdf/CV_ZHIXIN%20TU.pdf%22,%20%22logo%22=%3E%22/assets/img/cv.png%22%7D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
