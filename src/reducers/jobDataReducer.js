import types from "../actions/types.js";

//Strictly for performance reasons. When i deploy, takes too long to get initial r
//results because server has been sleeping.

const initialData = [
  {
    companyName: "Telelanguage",
    created: 1655102377000,
    description:
      "Be a part of an international language service provider Seeking motivated individuals to assist in providing excellent services for clients. You do not need to be bilingual to apply . Looking for talented, energetic, and friendly individuals to help provide the best services possible to clients. Telelanguage provides language services in over 300 languages and needs agents to help connect English-speaking customers with interpreters. Remote agents are responsible for connecting Hospitals, 911s,…",
    title: "FT Customer Service Representative / Fully Work From Home",
    id: "3223766905",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3223766905?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=5030DB5055A6F4DE95A2AE47C64781729DC232D1",
    categoryTag: "customer-services-jobs",
  },
  {
    companyName: "Pinata",
    created: 1655505602000,
    description:
      "Pinata is seeking a highly talented, results-oriented Customer Support Specialist to join their team. This role will wear many hats to help ensure the highest level of customer support while proactively problem-solving when any issues arise. You will take on responsibility for the customer experience on both the renter and the property management side Preferred Qualifications: Self-motivated - You are willing to work independently but are comfortable asking for help when needed Bachelor's degre…",
    title: "FT Customer Experience Specialist (Work From Home)",
    id: "3238195371",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3238195371?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=7B865FD39E20838F9B43937DFD56208F7ABD60E2",
    categoryTag: "it-jobs",
  },
  {
    companyName: "Westime",
    created: 1657264456000,
    description:
      "Job Description Company: Westime is one of the largest luxury watch retailers in the United States, with a home base in Beverly Hills, CA. As an authorized dealer or distributor of many fine brands, Westime runs a number of retail stores as well as a website that offers e-commerce sales for high-end luxury goods. Westime is currently seeking to expand its digital footprint including expansion of its website as well as further development into e-commerce capabilities. Job Description: This role …",
    title: "Lead Full-Stack Web Developer For Major Luxury Retailer Group",
    id: "3302223878",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3302223878?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=7452EFA6518DDC7665B7789359FCC44A0F028096",
    categoryTag: "it-jobs",
  },
  {
    companyName: "CareRev",
    created: 1657775847000,
    description:
      "Position: ER Registered Nurse RN - Contract Assignment CareRev is the future of work in healthcare. With our mobile app, you’re just a few clicks away from creating an ideal work schedule that fits your life and pays the bills. CareRev is proud to pay the highest rates in the industry not once, but twice a week via direct deposit. Signing up is simple. Once you’ve applied, passed your interview, and completed registration, you’ll be ready to book shifts, work, and get paid. It’s that easy ‍ Req…",
    title: "Registered Nurse RN, ER",
    id: "3318169250",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3318169250?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=9E67CA50DF66FAB81C75AC070E9CCB40181B87DE",
    categoryTag: "healthcare-nursing-jobs",
  },
  {
    companyName: "Hermandad Mexicana Nacional",
    created: 1657420363000,
    description:
      "ADMINSITRATIVE ASSISTANT Hermandad Mexicana Nacional (HMN) a nonprofit community base organization with a headquarter office in North Hollywood, California is currently looking for a Part Time Administrative Assistant who will be working under the direction and supervision of the Executive Director. Some of the duties include but are not limited to the following: assisting in fundraising activities, proposal writing and program development, submit forms and reports to corporations and corporati…",
    title: "Administrative Assitance",
    id: "3307358192",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3307358192?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=09768759FD31EBC3AB3067C254B56B715BB757E6",
    categoryTag: "admin-jobs",
  },
  {
    companyName: "Costco Wholesale Corporation",
    created: 1657711320000,
    description:
      "Garnishes, weighs, wraps, labels and merchandises bakery productsBaker, Retail, Grocery",
    title: "Bakery Wrapper",
    id: "3316100841",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3316100841?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=460F44EC9A11F233EE03B7F4B092711F02499123",
    categoryTag: "retail-jobs",
  },
  {
    companyName: "Ross Stores, Inc.",
    created: 1657076784000,
    description:
      "Welcome to Ross Stores, Inc., where our differences make us stronger At Ross and dds, inclusion is a way of life. We care about our Associates and the communities we serve and we value their differences. We are committed to building diverse teams and an inclusive culture. We respect and celebrate the diversity of backgrounds, identities, and ideas of those who work and shop with us. Come join us as we continue our diversity, equality and inclusion journey GENERAL PURPOSE: This position provides…",
    title: "Store Protection Specialist",
    id: "3294380625",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3294380625?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=65F6FC6EF31A9DE48966A91976BAE9956474F6E2",
    categoryTag: "retail-jobs",
  },
  {
    companyName: "MID Construction",
    created: 1656711557000,
    description:
      "Job Description MID Construction Group, Inc. is LA’s fastest growing general contractor and developer. Currently, we have 25 ongoing jobs with several more in the pipeline. Having said that, we are looking to hire an experienced Head of Construction Project Manager to join our growing team. If you are hard working, and you want to be a part of a team that is energetic, and ambitious, MID Construction Group is a perfect option for you. Head of Construction Project Management responsibilities inc…",
    title: "Head of Construction Project Management",
    id: "3282059776",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3282059776?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=420D6A8AF7F78448B27CA20505DA5BECF72E08E3",
    categoryTag: "trade-construction-jobs",
  },
  {
    companyName: "Northside Imports",
    created: 1657265050000,
    description:
      "Job Description Here at Northside Imports inc. we are seeking multiple warehouse drivers to join our team we are a family owned European and German auto parts company. If the job description meets what you're looking for please don't hesitate, apply and join our family ​Responsibilities: Deliver products to customer locations in a timely manner Load and unload vehicle Collect on unpaid orders and shipments Inspect and monitor delivery vehicle Maintain accurate inventory of packages and material…",
    title: "Delivery Driver Auto Parts",
    id: "3302266915",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3302266915?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=AA8B47A8E244DA447D381BCA597110F9C2F2E3BF",
    categoryTag: "sales-jobs",
  },
  {
    companyName: "CareRev",
    created: 1657775844000,
    description:
      "Position: Registered Nurse RN, PACU CareRev is the future of work in healthcare. With our mobile app, you’re just a few clicks away from creating an ideal work schedule that fits your life and pays the bills. CareRev is proud to pay the highest rates in the industry not once, but twice a week via direct deposit. Signing up is simple. Once you’ve applied, passed your interview, and completed registration, you’ll be ready to book shifts, work, and get paid. It’s that easy ‍ Requirements for the R…",
    title: "Registered Nurse RN, PACU",
    id: "3318168874",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "full_time",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3318168874?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=178C90F5D440FAC20157946ABAA8A41DD681A22A",
    categoryTag: "healthcare-nursing-jobs",
  },
  {
    companyName: "99 Cents Only Stores",
    created: 1656759969000,
    description:
      "Our Promise to you is OPPORTUNITY Join Us at the 99 and together we'll grow your skills, develop your career and build your best future Essentials Qualifications Now Hiring, Weekly Pay, Full Benefits At 99 Cents Only Stores, LLC, we are recruitinAssistant Store Manager, Store, Store Manager, Assistant, Customer Service, Manager",
    title: "Assistant Store Manager- Store 315",
    id: "3283679506",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3283679506?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=FB56DE01ED5D12772E56BA7EA05233F2B6E2460C",
    categoryTag: "customer-services-jobs",
  },
  {
    companyName: "Precision Castparts Corporation",
    created: 1657134812000,
    description:
      "Administers customer service activities of the Sales department which are an integral part of the customer value proposition for satisfying customer needs regarding any aspect of the quote and order fulfillment process. Investigates and resolves custSales, Inside Sales, Associate, Customer Service, Production, Skills",
    title: "Inside Sales Rep (Sales Associate)",
    id: "3296445075",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3296445075?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=01A5C1FAB91B92D5A4266854D2F6DFAF4FEA7AC1",
    categoryTag: "sales-jobs",
  },
  {
    companyName: "Raising Cane's",
    created: 1656057501000,
    description:
      "Overview: GENERAL SUMMARY: The General Manager provides strategic direction for their restaurant. This manager must maintain operations and drive results his/her restaurant, through people development, sales and profit growth. The manager must hire, train and develop Crewmembers and Managers that share the Raising Cane's values and culture. The Manager must convey the Cane's culture to his/her crew and be a creative team player who likes to work hard, have fun, and show sincere dedication to Ra…",
    title: "General Manager - Restaurant - North Hollywood",
    id: "3257137463",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "full_time",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3257137463?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=6CCC6344ECB564C2ACF67ABC3D43F9EA6AB18D2E",
    categoryTag: "hospitality-catering-jobs",
  },
  {
    companyName: "Keyple",
    created: 1657575968000,
    description:
      "Job Description Check us out at www.Keyple.com At Keyple , our priority is YOU . That's why we are committed to creating a healthy, flexible, and productive work environment that allows for both a fulfilling career and the ability to meet your life responsibilities. Our career coaches will partner with you every step of the way to find the right job assignment, resource or tools to help you achieve your work-life balance goals - so you can focus on what matters most. Job Description: Full Time …",
    title:
      "Nurse Instructor - Career/Life Balance - Flexible Shifts - Great Pay",
    id: "3312128375",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3312128375?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=2FA0C24248891244610BEAC788BE9331DEC9FEA7",
    categoryTag: "teaching-jobs",
  },
  {
    companyName: "Costco Wholesale Corp.",
    created: 1657560789000,
    description:
      "Costco Wholesale Corp. - 11428 SHERMAN WAY [Retail Associate / Store Receiver / Team Member] As a Stocker with Costco, you will: Move stock from the backroom to the sales floor; Stock and straighten merchandise for sale in the warehouse; Clear and clean aisles, backroom and receiving area. Costco offers great jobs, great pay, great benefits and a great place to work and believes future executive officers start out by working as a StockerBe Valued >>",
    title: "Inventory Clerk",
    id: "3311303990",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: "",
    minSalary: "",
    contractTime: "full_time",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3311303990?se=8J3DGiME7RGu4XFgwOOl0g&utm_medium=api&utm_source=92a35e33&v=66D1B30F33460AE345305F0C900B072A8A0BF87F",
    categoryTag: "retail-jobs",
  },
];
const jobDataReducer = (state = initialData, action) => {
  switch (action.type) {
    case types.FETCH_JOB_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default jobDataReducer;
