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
      aboutHeader: 'About',
      aboutText: "The task is to create a mock checkout page for buying tickets to a show. Users should have the ability to select a show from a list of upcoming shows, select the quantity, enter their basic billing information (you don't need to actually accept real credit card data, just simulate how this part should work), and see their final cost with fees before checking out.It should look like TicketMaster's website checkout page as reference).",
      classNameList: 'business-card-container-left animate__animated animate__fadeInRight'

    },
    {
      id: 3,
      type: 'dropDownNavbar',
      picSrc: 'menu-key',
      name: 'Dropdown Menu',
      role: 'Sample Project',
      gitName: 'mockCheckout',
      aboutHeader: 'About',
      aboutText: "The task is to create an dropdown menu that gets a JSON object as input, and uses recursion to include nested dropdwon menus as needed.No need to solve overlapping issues.",
      classNameList: 'business-card-container-left animate__animated animate__fadeInRight'
    },
    {
      id: 4,
      type: 'sendTokens',
      picSrc: 'send-eth',
      name: 'Send ETH',
      role: 'Sample Project',
      gitName: 'mockCheckout',
      aboutHeader: 'About',
      aboutText: "The task is to create an ETH payment gateway",
      classNameList: 'business-card-container-left animate__animated animate__fadeInRight'
    },
  ];
  static get getCardsSchema() {
    return this.cardsSchema;
  }
}