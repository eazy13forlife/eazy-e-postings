import types from "../actions/types.js";

//This initial jobData is strictly for demo/visual reasons while we wait for
//actual job data response. I want to show the UI right away.
const initialData = [
  {
    companyName: "Product Review Jobs",
    created: 1673242948000,
    description:
      "Compensation: Varies per assignment. Up to $500 per week. Location: Remote (USA) Company: ProductReviewJobs Thank you for your interest in becoming a Paid Product Tester. This opportunity is for completing market research opportunities with independent brands via online or phone. Online studies typically take 15 minutes, while telephone interviews may take 30-60 minutes each session. Compensation varies per study. Please complete your profile to view projects available to you. Notes on Product …",
    title: "Paid Product Tester",
    id: "3835827661",
    state: "US",
    jobLocation: "North Hills, Los Angeles County",
    maxSalary: 51638.57,
    minSalary: 51638.57,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3835827661?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=F110860260A7E78D3F68F0A72DAD2779EFB6B8F9",
    categoryTag: "scientific-qa-jobs",
  },
  {
    companyName: "Product Review Jobs",
    created: 1673242946000,
    description:
      "Compensation: Varies per assignment. Up to $500 per week. Location: Remote (USA) Company: ProductReviewJobs Thank you for your interest in becoming a Paid Product Tester. This opportunity is for completing market research opportunities with independent brands via online or phone. Online studies typically take 15 minutes, while telephone interviews may take 30-60 minutes each session. Compensation varies per study. Please complete your profile to view projects available to you. Notes on Product …",
    title: "Paid Product Tester",
    id: "3835827204",
    state: "US",
    jobLocation: "West Toluca Lake, Los Angeles County",
    maxSalary: 47874.93,
    minSalary: 47874.93,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3835827204?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=D5EC910ED03BE3B610AD72D6D3E56586D1536C6F",
    categoryTag: "scientific-qa-jobs",
  },
  {
    companyName: "Product Review Jobs",
    created: 1673242943000,
    description:
      "Compensation: Varies per assignment. Up to $500 per week. Location: Remote (USA) Company: ProductReviewJobs Thank you for your interest in becoming a Paid Product Tester. This opportunity is for completing market research opportunities with independent brands via online or phone. Online studies typically take 15 minutes, while telephone interviews may take 30-60 minutes each session. Compensation varies per study. Please complete your profile to view projects available to you. Notes on Product …",
    title: "Paid Product Tester",
    id: "3835826502",
    state: "US",
    jobLocation: "North Hollywood, Los Angeles County",
    maxSalary: 47686.78,
    minSalary: 47686.78,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3835826502?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=D89898F380D8FBBF7A3DEA115C78186EF19A9333",
    categoryTag: "scientific-qa-jobs",
  },
  {
    companyName: "Product Review Jobs",
    created: 1673242943000,
    description:
      "Compensation: Varies per assignment. Up to $500 per week. Location: Remote (USA) Company: ProductReviewJobs Thank you for your interest in becoming a Paid Product Tester. This opportunity is for completing market research opportunities with independent brands via online or phone. Online studies typically take 15 minutes, while telephone interviews may take 30-60 minutes each session. Compensation varies per study. Please complete your profile to view projects available to you. Notes on Product …",
    title: "Paid Product Tester",
    id: "3835826307",
    state: "US",
    jobLocation: "Farmer Market, Los Angeles County",
    maxSalary: 60836.86,
    minSalary: 60836.86,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3835826307?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=BBCB0999B439A46674E745AD9E6C05947D0CE280",
    categoryTag: "scientific-qa-jobs",
  },
  {
    companyName: "Product Review Jobs",
    created: 1673242943000,
    description:
      "Compensation: Varies per assignment. Up to $500 per week. Location: Remote (USA) Company: ProductReviewJobs Thank you for your interest in becoming a Paid Product Tester. This opportunity is for completing market research opportunities with independent brands via online or phone. Online studies typically take 15 minutes, while telephone interviews may take 30-60 minutes each session. Compensation varies per study. Please complete your profile to view projects available to you. Notes on Product …",
    title: "Paid Product Tester",
    id: "3835826473",
    state: "US",
    jobLocation: "Valley Glen, Los Angeles County",
    maxSalary: 53646.48,
    minSalary: 53646.48,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3835826473?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=477D79DA5E64EB956B5752FB9586D626621EBF5B",
    categoryTag: "scientific-qa-jobs",
  },
  {
    companyName: "The Walt Disney Company ",
    created: 1676387903000,
    description:
      "The Walt Disney Company is seeking an attorney with strong transactional skills to join its Corporate Governance and Securities Regulation team. You’d be a key member of a fast-paced team that supports the Company’s Board of Directors and manages securities, general corporate, transactional and corporate governance matters. This position will support all aspects of governance and securities law compliance and disclosure matters, including: advising on compliance with Delaware corporate law; the…",
    title: "Counsel – Securities & Corporate Governance",
    id: "3925418769",
    state: "US",
    jobLocation: "Starlight Hills, Los Angeles County",
    maxSalary: 86682.11,
    minSalary: 86682.11,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3925418769?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=B3F13D30A6B7B7426F072A17CA3FCD94B528552F",
    categoryTag: "legal-jobs",
  },
  {
    companyName: "MV Transportation",
    created: 1675466090000,
    description:
      "Responsibilities: Let MV Transportation expand your toolbox Do you want a stable career with great and steady pay, a set schedule, and outstanding benefits? Would you like to work with a company that invests in your growth? Then join the MV Transportation team. Start on the path in under 5 minutes by reading the job description and submitting your application. MV Transportation is now hiring experienced Mechanics in your area Who You Are: As a Mechanic, you will perform preventative maintenance…",
    title: "Diesel Mechanic",
    id: "3901063272",
    state: "US",
    jobLocation: "Canoga Park, Los Angeles County",
    maxSalary: 44092.93,
    minSalary: 44092.93,
    contractTime: "full_time",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3901063272?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=24BC03CF75D187A8F7C4361574B4DED0D14B70BA",
    categoryTag: "engineering-jobs",
  },
  {
    companyName: "Servicon Systems",
    created: 1675888012000,
    description:
      "WHO WE ARE: We are women-owned and operated, with nearly 50 years of expertise as a leading environmental solutions provider, focused on infection prevention for complex facilities. As a local, privately held company, we are agile and can maneuver quickly to support the needs of our people and clients. Our goal is to become a trusted partner, not outsourced vendor. One of our greatest strengths is our Culture of Caring. From our CEO to the front-line staff, Servicon embodies our vision of creat…",
    title: "EVS Cleaning Technician I",
    id: "3914075774",
    state: "US",
    jobLocation: "Universal City, Los Angeles County",
    maxSalary: 34004.75,
    minSalary: 34004.75,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3914075774?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=06F2558208D20A31CE6C4ECADDB607C863285644",
    categoryTag: "domestic-help-cleaning-jobs",
  },
  {
    companyName: "MV Transportation",
    created: 1675466087000,
    description:
      "Responsibilities: Let MV Transportation expand your toolbox Do you want a stable career with great and steady pay, a set schedule, and outstanding benefits? Would you like to work with a company that invests in your growth? Then join the MV Transportation team. Start on the path in under 5 minutes by reading the job description and submitting your application. MV Transportation is now hiring experienced Mechanics in your area Who You Are: As a Mechanic, you will perform preventative maintenance…",
    title: "Mechanic - Automotive",
    id: "3901063113",
    state: "US",
    jobLocation: "Magnolia Park, Los Angeles County",
    maxSalary: 51162.54,
    minSalary: 51162.54,
    contractTime: "full_time",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3901063113?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=C947A1EC0A0F107DFCE738C8760FE7F01EE98958",
    categoryTag: "engineering-jobs",
  },
  {
    companyName: "Product Review Jobs",
    created: 1673242946000,
    description:
      "Compensation: Varies per assignment. Up to $500 per week. Location: Remote (USA) Company: ProductReviewJobs Thank you for your interest in becoming a Paid Product Tester. This opportunity is for completing market research opportunities with independent brands via online or phone. Online studies typically take 15 minutes, while telephone interviews may take 30-60 minutes each session. Compensation varies per study. Please complete your profile to view projects available to you. Notes on Product …",
    title: "Paid Product Tester",
    id: "3835827202",
    state: "US",
    jobLocation: "Mission Hills, Los Angeles County",
    maxSalary: 48168.99,
    minSalary: 48168.99,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3835827202?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=8102A9CDCBF3C034CB3EEB70AF373906AE287985",
    categoryTag: "scientific-qa-jobs",
  },
  {
    companyName: "MV Transportation",
    created: 1675466089000,
    description:
      "Responsibilities: Let MV Transportation expand your toolbox Do you want a stable career with great and steady pay, a set schedule, and outstanding benefits? Would you like to work with a company that invests in your growth? Then join the MV Transportation team. Start on the path in under 5 minutes by reading the job description and submitting your application. MV Transportation is now hiring experienced Mechanics in your area Who You Are: As a Mechanic, you will perform preventative maintenance…",
    title: "Mechanic - Automotive",
    id: "3901063229",
    state: "US",
    jobLocation: "Briggs, Los Angeles County",
    maxSalary: 64463.01,
    minSalary: 64463.01,
    contractTime: "full_time",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3901063229?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=C6DDE6AECFB9578B362D54F69C8A543E230EE67B",
    categoryTag: "engineering-jobs",
  },
  {
    companyName: "Servicon Systems",
    created: 1675888014000,
    description:
      "WHO WE ARE: We are women-owned and operated, with nearly 50 years of expertise as a leading environmental solutions provider, focused on infection prevention for complex facilities. As a local, privately held company, we are agile and can maneuver quickly to support the needs of our people and clients. Our goal is to become a trusted partner, not outsourced vendor. One of our greatest strengths is our Culture of Caring. From our CEO to the front-line staff, Servicon embodies our vision of creat…",
    title: "EVS Cleaning Technician I",
    id: "3914075997",
    state: "US",
    jobLocation: "Briggs, Los Angeles County",
    maxSalary: 43547.65,
    minSalary: 43547.65,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3914075997?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=2CD2C8FE44C4D39E710C2D4094DFF8CDCC043D93",
    categoryTag: "domestic-help-cleaning-jobs",
  },
  {
    companyName: "Servicon Systems",
    created: 1675887990000,
    description:
      "WHO WE ARE: We are women-owned and operated, with nearly 50 years of expertise as a leading environmental solutions provider, focused on infection prevention for complex facilities. As a local, privately held company, we are agile and can maneuver quickly to support the needs of our people and clients. Our goal is to become a trusted partner, not outsourced vendor. One of our greatest strengths is our Culture of Caring. From our CEO to the front-line staff, Servicon embodies our vision of creat…",
    title: "Housekeeper",
    id: "3914074800",
    state: "US",
    jobLocation: "Woodland Hills, Los Angeles County",
    maxSalary: 42292.2,
    minSalary: 42292.2,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3914074800?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=15ED12503626A8630ABEA509E2D1E32513419C51",
    categoryTag: "domestic-help-cleaning-jobs",
  },
  {
    companyName: "Aya Healthcare",
    created: 1676580560000,
    description:
      "Access Exclusive Cath Lab Tech Jobs at Top-Rated Educational Facilities in California We have immediate openings for the following: Cath Lab Tech in California. Make $3852/week - $4009/week. Required Qualifications: California state license Why work a contract school-based job with Aya Healthcare? Higher compensation: We negotiate on your behalf. Work-life balance: Contracts are up to 40 hours per week, with workdays ending mid-late afternoon and weekends off Employee advocate: Our team will en…",
    title: "Travel Nursing - Cath Lab Tech - $3852/week - $4009/week",
    id: "3929609414",
    state: "US",
    jobLocation: "Universal City, Los Angeles County",
    maxSalary: 80096.77,
    minSalary: 80096.77,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3929609414?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=25007B3BD4F91BDA11940727B9F3CE28CC4E14D4",
    categoryTag: "healthcare-nursing-jobs",
  },
  {
    companyName: "Servicon Systems",
    created: 1675887990000,
    description:
      "WHO WE ARE: We are women-owned and operated, with nearly 50 years of expertise as a leading environmental solutions provider, focused on infection prevention for complex facilities. As a local, privately held company, we are agile and can maneuver quickly to support the needs of our people and clients. Our goal is to become a trusted partner, not outsourced vendor. One of our greatest strengths is our Culture of Caring. From our CEO to the front-line staff, Servicon embodies our vision of creat…",
    title: "Housekeeper",
    id: "3914074811",
    state: "US",
    jobLocation: "Studio City, Los Angeles County",
    maxSalary: 38693.84,
    minSalary: 38693.84,
    contractTime: "",
    redirectUrl:
      "https://www.adzuna.com/land/ad/3914074811?se=boMIF6au7RGs8S8fVCr16Q&utm_medium=api&utm_source=92a35e33&v=9046FB90FE67A30E83A77B8E283BDD6A7617CEDA",
    categoryTag: "domestic-help-cleaning-jobs",
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
