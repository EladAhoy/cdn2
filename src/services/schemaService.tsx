export class SchemaService {
  static cardsSchema = [
    {
      id: 1,
      type: "profile",
      picSrc: "",
      name: "Elad Sheskin",
      role: "Fullstack Developer",
      gitName: "mockCheckout",
      aboutHeader: "About",
      aboutText:
        "Developing since 2015. Originaly LAMP stack, continued to MERN and MEVN following market demand.My last adventure included Ahoy!, an online yacht insurance platform for the US market.",
      classNameList: "business-card-container-left",
    },
    {
      id: 8,
      type: "aicLookup",
      picSrc: "",
      name: "AIC Lookup",
      role: "Node.js, Express, React",
      gitName: "aic-lookup",
      gitLink: "https://github.com/shes-dev/aic-lookup",
      aboutHeader: "About",
      aboutText:
        "AIC Lookup is a web app that allows users to search for an artist by name and get back a list of artworks that match the search term. The user needs to login. The app uses the AIC API to get the data.",
      classNameList: "business-card-container-left",
    },
    {
      id: 9,
      type: "displayContent",
      picSrc: "",
      name: "First Aid App",
      role: "PHP,Javascript,HTML,CSS",
      gitName: "firstAid",
      gitLink: "https://github.com/shes-dev/FirstAid",
      aboutHeader: "About",
      aboutText:
        "Displays course notes summary, allowed additional data uploading and comments via plugin.",
      classNameList: "business-card-container-left",
    },
    {
      id: 2,
      type: "mockCheckout",
      picSrc: "ticket",
      name: "Mock Checkout",
      role: "Sample Project",
      gitName: "mockCheckout",
      gitLink:
        "https://github.com/ShesdevSoftwareDevelopment/cdn2/blob/shesdev/src/components/CheckoutPage.tsx",
      aboutHeader: "Task",
      aboutText:
        "Create a mock checkout page for buying tickets to a show. Users should have the ability to select a show from a list of upcoming shows, select the quantity, enter their basic billing information (you don't need to actually accept real credit card data, just simulate how this part should work), and see their final cost with fees before checking out.",
      classNameList: "business-card-container-left",
    },
    {
      id: 3,
      type: "dropDownNavbar",
      picSrc: "menu-key",
      name: "Dropdown Menu",
      role: "Recursion",
      gitName: "mockCheckout",
      aboutHeader: "Task",
      aboutText:
        "Create an dropdown menu that gets a JSON object as input, and uses recursion to include nested dropdown menus as needed. No need to handle overlapping issues.",
      classNameList: "business-card-container-left",
    },
    {
      id: 4,
      type: "sendTokens",
      picSrc: "send-eth",
      name: "Send ETH",
      role: "Blockchain, ETH",
      gitName: "sendTokens",
      gitLink:
        "https://github.com/ShesdevSoftwareDevelopment/cdn2/blob/shesdev/src/components/SendTokens.tsx",
      aboutHeader: "Task",
      aboutText:
        "Create an ETH payment gateway. Include connection to MetaMask and a tool to check if an ETH address is valid.",
      classNameList: "business-card-container-left",
    },
    {
      id: 5,
      type: "counter",
      picSrc: "send-eth",
      name: "Counter",
      role: "React, Redux",
      gitName: "sendTokens",
      aboutHeader: "Task",
      aboutText: "Create a counter.",
      classNameList: "business-card-container-left",
    },
    {
      id: 6,
      type: "redwoodBlog",
      picSrc: "",
      name: "Blog Site",
      role: "RedwoodJS",
      gitName: "sendTokens",
      gitLink: "https://github.com/ShesdevSoftwareDevelopment/redwoodjs-blog",
      aboutHeader: "Stack",
      aboutText:
        "React, Jamstack, GraphQL, Prisma, TypeScript, Jest, Storybook, deployed on Netlify.",
      classNameList: "business-card-container-left",
    },
    {
      id: 7,
      type: "Explainit Online",
      picSrc: "",
      name: "Explainit Online",
      role: "PHP, MySql, Javascript, HTML, CSS",
      gitName: "explainit",
      gitLink: "https://github.com/shes-dev/ExplainIt",
      aboutHeader: "About",
      aboutText:
        "As a Full Stack Developer at Explainit, I led the development of a platform that enabled YouTube influencers to offer online courses for sale to their subscribers. This platform used the LAMP stack, with a big emphasis on security. One of the key features of the platform was that videos were available to watch only from allowed IP addresses, ensuring that the content was protected and only accessible to paying customers. I also designed and implemented a login system from scratch, ensuring that user data was kept secure. The platform had both end customers and YouTube influencers as clients, and I worked closely with a team of designers to ensure that the platform met the needs of both groups. I also collaborated with other developers to integrate third-party services and APIs, such as payment gateways and email marketing tools. Overall, my experience at Explainit taught me how to develop a complex platform from scratch using the LAMP stack, with a strong emphasis on security and a focus on meeting the needs of both end customers and influencers. I gained valuable experience in full-stack development, project management, and collaboration, and I am excited to bring these skills to my next challenge.",
      classNameList: "business-card-container-left",
    },
  ];
  static get getCardsSchema() {
    return this.cardsSchema;
  }
}