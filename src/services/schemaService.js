export class SchemaService {
  static cardsSchema = [
    {
      id: 1,
      type: 'profile',
      picSrc: '',
      name: 'Elad Sheskin',
      role: 'Fullstack Developer',
      gitName: 'mockCheckout',
      aboutHeader: 'About',
      aboutText: "Developing since 2015. Originaly LAMP stack, continued to MERN and MEVN following market demand.My last adventure included Ahoy!, an online yacht insurance platform for the US market.",
      classNameList: 'business-card-container animate__animated animate__fadeInLeft'
    },
    {
      id: 2,
      type: 'mockCheckout',
      picSrc: 'ticket',
      name: 'Mock Checkout',
      role: 'Sample Project',
      gitName: 'mockCheckout',
      aboutHeader: 'Task',
      aboutText: "Create a mock checkout page for buying tickets to a show. Users should have the ability to select a show from a list of upcoming shows, select the quantity, enter their basic billing information (you don't need to actually accept real credit card data, just simulate how this part should work), and see their final cost with fees before checking out.",
      classNameList: 'business-card-container-left animate__animated animate__fadeInRight'

    },
    {
      id: 3,
      type: 'dropDownNavbar',
      picSrc: 'menu-key',
      name: 'Dropdown Menu',
      role: 'Sample Project',
      gitName: 'mockCheckout',
      aboutHeader: 'Task',
      aboutText: "Create an dropdown menu that gets a JSON object as input, and uses recursion to include nested dropdown menus as needed. No need to handle overlapping issues.",
      classNameList: 'business-card-container-left animate__animated animate__fadeInRight'
    },
    {
      id: 4,
      type: 'sendTokens',
      picSrc: 'send-eth',
      name: 'Send ETH',
      role: 'Sample Project',
      gitName: 'sendTokens',
      aboutHeader: 'Task',
      aboutText: "Create an ETH payment gateway. Include connection to MetaMask and a tool to check if an ETH address is valid.",
      classNameList: 'business-card-container-left animate__animated animate__fadeInRight'
    },
    {
      id: 5,
      type: 'counter',
      picSrc: 'send-eth',
      name: 'Counter',
      role: 'Sample Project',
      gitName: 'sendTokens',
      aboutHeader: 'Task',
      aboutText: "Create a counter.",
      classNameList: 'business-card-container-left animate__animated animate__fadeInRight'
    },
  ];
  static get getCardsSchema() {
    return this.cardsSchema;
  }
}