// export interface Job {
//     id: string;
//     title: string;
//     description: string;
//     responsibilities: string[];
//     ideal_candidate: IdealCandidate;
//     when_where: string;
//     about: About;
//     company: string;
//     image: string;
//   }
  
//   export interface IdealCandidate {
//     age: string;
//     gender: string;
//     traits: string[];
//   }
  
//   export interface About {
//     posted_on: string;
//     deadline: string;
//     location: string;
//     start_date: string;
//     end_date: string;
//     categories: string[];
//     required_skills: string[];
//   }

//   export interface Category{
//       Design: string;
//       Technology: string;
//       Health: string;
//       Marketing: string;
//   }

export interface Job {
  applicantsCount: number;
  average_rating: number;
  categories: string[];
  createdAt: string;
  datePosted: string;
  deadline: string;
  description: string;
  endDate: string;
  id: string;
  idealCandidate: string;
  isBookmarked: boolean;
  isRolling: boolean;
  location: string[];
  logoUrl: string;
  opType: string;
  orgEmail: string;
  orgID: string;
  orgName: string;
  orgPrimaryPhone: string;
  perksAndBenefits: string | null;
  questions: string | null;
  requiredSkills: string[];
  requirements: string;
  responsibilities: string;
  startDate: string;
  status: string;
  title: string;
  total_reviews: number;
  updatedAt: string;
  viewsCount: number;
  whenAndWhere: string;
}
