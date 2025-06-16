import { DeepPartial } from 'typeorm';
import {
  Users,
  Building,
  Department,
  Lab,
  Hall,
  Office,
  Cafeteria,
  Shopping,
  ScienceType,
  Classes,
  Registration,
  NavigationPath,
  Parking,
  College,
  Dormitory,
  Library
} from 'src/db/entities';
import { BuildingType, collegesEnum, GenderType, UserRole } from '../enums';
import { CafeteriaType } from '../enums/cafeteria_type.enum';
import { DormitoryType } from '../enums/dormitory-type.enum';
import { AdministrativeUnitEnum } from '../enums/adminstrative-unit.enum';
import { AdministrativeUnit } from 'src/db/entities/adminstrative-unit.entity';

export const users: DeepPartial<Users>[] = [
  {
    id: 1,
    name: 'Melkamu Mesene',
    email: 'superAdmin@gmail.com',
    phoneNumber: '0960948969',
    password: '0000000',
  },
  {
    id: 2,
    name: 'Antenhe Sileshi',
    email: 'antenhesileshi@gmail.com',
    phoneNumber: '0987654321',
    password: '0000000',
    role: UserRole.Admin,
  },
  {
    id: 3,
    name: 'Solomon Abebe',
    email: 'solomon@example.com',
    phoneNumber: '1122334455',
    password: '0000000',
    role: UserRole.User,
  },
];

export const buildings: DeepPartial<Building>[] = [
  {
    id: 1,
    name: 'Main Library',
    block:104,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,
    description: 'Main academic library building',
  },{
    id: 2,
    name: 'No2 Library',
    block:101,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,
    description: 'No2 academic library building',
  },{
    id: 3,
    name: 'New Building',
    block:200,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,
    description: 'students class room  building',
  },{
    // technology registration building
    id: 4,
    name: 'Tech Registration Building',
    block:26,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'Tech Registration Building',
  } ,
  {
    id: 5,
    name: 'Socail Sceince Registration Building 25',
    block:25,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'Scoail Sceince Registration Building',
  } ,{
    id:6,
    name: 'Stundent dormitory  610',
    block:610,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'students dormitory for Male ',
  },
  {
    id:7,
    name: 'Stundent dormitory 611',
    block:611,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'students dormitory for Male ',
  },{
    id:8,
    name: 'Stundent dormitory 27',
    block:27,
    type: BuildingType.single,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'students dormitory for disapled  Male',
  },{
    id:9,
    name: 'Stundent dormitory 30',
    block:30,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'students dormitory for Female ',
  },{
    id:10,
    name: 'Stundent dormitory 31',
    block:31,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'students dormitory for Female ',
  },
  {
    id: 11,
    name: 'No1 Library',
    block:105,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,
    description: 'No1 academic library building',
  },
  {
    id: 12,
    name: 'Digital Research Library',
    block:106,
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75, 
    description: 'Digital Research Library',
  },
  {
    id: 13,
    name: 'Building 706',
    block:706,
    type: BuildingType.single,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'IT ,SW Building ',
    },
     {
    id: 14,
    name: 'Building 701',
    block:701,
    type: BuildingType.single,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'IT ,SW,ME Building ',
    },
    {
      id:15,
      name: 'Building 606',
      type:BuildingType.single,
      block:606,
      latitude: 9.03,
      longitude: 38.75,    
      description: 'IT ,SW,CE lab Building ',
    },{
      id:16,
      name: 'Building 605',
      type:BuildingType.single,
      block:605,
      latitude:10.1,
      longitude:39.1,
      description:'ME COTM Building'
    }
];
// Seeder data for Science Types (with numeric ids)
export const scienceTypes: DeepPartial<ScienceType>[] = [
  {
    id: 1, // Numeric ID
    scienceTypeName: 'Natural Science',
  },
  {
    id: 2, // Numeric ID
    scienceTypeName: 'Social Science',
  },
  {
    id: 3, // Numeric ID
    scienceTypeName: 'Health Science',
  },
];
// Seeder data for Faculties (with numeric ids)
// Seeder data for Colleges with scienceTypeId (using numeric relation)
export const colleges: DeepPartial<College>[] = [
  {
    id: 1, // Numeric ID
    name: collegesEnum.AgricultureCollege,
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 2, // Numeric ID
    name: collegesEnum.CollegeOfBusinessAndEconomics,
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 3, // Numeric ID
    name: collegesEnum.HealthCollege,
    scienceType: { id: 3 }, // Health Science type
  },
  {
    id: 4, // Numeric ID
    name: collegesEnum.LandAdministrationCollege,
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 5, // Numeric ID
    name: collegesEnum.LawSchool,
    scienceType: { id: 1 }, // Natural science type
  },
  {
    id: 6, // Numeric ID
    name: collegesEnum.NaturalScienceCollege,
    scienceType: { id: 1 }, // Natural Science type
  },
  {
    id: 7, // Numeric ID
    name: collegesEnum.CollegeOfEducationAndBehavioralStudies,
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 8, // Numeric ID
    name:collegesEnum.SocialScienceCollege,
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 9, // Numeric ID
    name: collegesEnum.TechnologyOfInstitution,
    scienceType: { id: 1 }, // Natural Science type
  },
];
export const adminstrativeUnits: DeepPartial<AdministrativeUnit>[] = [
  {
    id: 1,
    name: AdministrativeUnitEnum.ACADEMIC_EXECUTIVE,
  },
  { id: 2, name: AdministrativeUnitEnum.ACADEMIC_VICE_PRESIDENT },
  {
    id: 3,
    name: AdministrativeUnitEnum.ADMINISTRATION_VICE_PRESIDENT,
  },
  {
    id: 4,
    name: AdministrativeUnitEnum.AUDIT,
  },
  {
    id: 5,
    name: AdministrativeUnitEnum.RESEARCH_AND_COMMUNITY_SERVICE,
  },
  {
    id: 6,
    name: AdministrativeUnitEnum.FINANCE_AND_BUDGET_ADMINISTRATOR,
  },
  {
    id: 7,
    name: AdministrativeUnitEnum.CAMPUS_SECURITY_AND_SAFETY,
  },
  {
    id: 8,
    name: AdministrativeUnitEnum.GENDER_AND_HIV_UNIT,
  },
  {
    id: 9,
    name: AdministrativeUnitEnum.CAMPUS_BEAUTY_AND_CLEANLINESS,
  },
  {
    id: 10,
    name: AdministrativeUnitEnum.PROCUREMENT_ADMINISTRATOR,
  },
  {
    id: 11,
    name: AdministrativeUnitEnum.ICT,
  },
  {
    id: 12,
    name: AdministrativeUnitEnum.TRANSFORMATION_AND_GOOD_GOVERNANCE,
  },
  {
    id: 13,
    name: AdministrativeUnitEnum.LIBRARY,
  },
  {
    id: 14,
    name: AdministrativeUnitEnum.COMMUNITY_RADIO,
  },
  {
    id: 15,
    name: AdministrativeUnitEnum.PROPERTY_AND_GENERAL_SERVICES,
  },
  {
    id: 16,
    name: AdministrativeUnitEnum.PLAN_ATTENDANCE_AND_EVALUATION,
  },
  {
    id: 17,
    name: AdministrativeUnitEnum.POSTGRADUATE_SCHOOL,
  },
  {
    id: 18,
    name: AdministrativeUnitEnum.PRESIDENT_LEGAL_ADVISOR,
  },
  {
    id: 19,
    name: AdministrativeUnitEnum.PROJECT_LEGAL_ADVISOR,
  },
  {
    id: 20,
    name: AdministrativeUnitEnum.REGISTRAR,
  },
  {
    id: 21,
    name: AdministrativeUnitEnum.STUDENT_SERVICES_AND_DISCIPLINE,
  },
  {
    id: 22,
    name: AdministrativeUnitEnum.MAINTENANCE_PLANT,
  },
];
// Seeder data for Departments (with numeric ids)
export const departments: DeepPartial<Department>[] = [
  {
    id: 1, // Numeric ID
    name: 'Software Engineering',
    college: { id: 9 }, // Replace with actual College ID
    
  },
  {
    id: 2, // Numeric ID
    name: 'Civil Engineering',
    college: { id: 9 }, // Replace with actual College ID

  },
  {
    id: 3, // Numeric ID
    name: 'Hydraulic Engineering',
    college: { id: 9 }, // Replace with actual College ID

  },
  {
    id: 4, // Numeric ID
    name: 'COTM',
    college: { id: 9 }, // Replace with actual College ID

  },
  {
    id: 5, // Numeric ID
    name: 'Electrical Engineering',
    college: { id: 9 }, // Replace with actual College ID

  },
  {
    id: 6, // Numeric ID
    name: 'Mechanical Engineering',
    college: { id: 9 }, // Replace with actual College ID
    
  },
  {
    id: 7, // Numeric ID
    name: 'Computer Science Department',
    college: { id: 9 }, // Replace with actual College ID
    
  },
];

export const halls: DeepPartial<Hall>[] = [
  {
    id: 1,
    name: 'Main Hall',
    capacity: 200,
    description: 'Used for events and lectures',
  },{
    id: 2,
    name: 'Yoftha Negusa Hall',
    capacity: 200,
    description: 'Used for events and lectures',
  },
];

export const labs: DeepPartial<Lab>[] = [
  {
    id: 1,
    name: 'AI Lab',
    headOfLab: 'Markos Abebe',
    building: { id: 15 },
    floorNumber: 1,
    roomNumber: 101,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
    },
  },{
   id: 2,
    name: ' Lab 1',
    headOfLab: 'Mr kasaya worku',
    building: { id: 15 },
    floorNumber: 1,
    roomNumber: 102,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
  }
},
{
   id: 3,
    name: ' Lab 2',
    headOfLab: 'Mr. Melkamu Abata',
    building: { id: 15 },
    floorNumber: 1,
    roomNumber: 104,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
  }
},
{
   id: 4,
    name: ' Lab 3',
    headOfLab: 'Mr. Yontanae Awoka',
    building: { id: 15 },
    floorNumber: 1,
    roomNumber: 103,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
  }
},
{
   id: 5,
    name: ' Lab 4',
    headOfLab: 'w.r Mentwabe Bahilue',
    building: { id: 15 },
    floorNumber: 1,
    roomNumber: 105,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
  }
},
{
   id: 6,
    name: ' Lab 5',
    headOfLab: 'w.r  Selamawete Anmawe',
    building: { id: 15 },
    floorNumber: 1,
    roomNumber: 110,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
  }
}
];
export const offices: DeepPartial<Office>[] = [
  {
    id: 1,
    name: 'Software Dean Office',
    fullName:'Mr. Yayhudar.T',
    phoneNumber: '0960948969',
    email: 'yahyhudr@gmail.com',
    floorNumber: 1,
    roomNumber: 100,
   operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
    },
    building: { id: 13},

  },
  {
    id: 2,
    name: 'IT Dean Office',
    fullName:'Mr. Abera Mola',
    phoneNumber: '0960948969',
    email: 'baya@gmail.com',
    floorNumber: 101,
    roomNumber: 1,
   operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
    },
    building: { id: 13 },

  },  
  {
    id: 3,
    name: 'associtation Office',
    fullName:'Mr Legealme Abera',
    phoneNumber: '0960948969',
    email: 'legalme@gmail.com',
    floorNumber: 103,
    roomNumber: 1,
   operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
    },
    building: { id: 13 },

  },{
    id: 3,
    name: 'Incopation Offfcie',
    fullName:'Mr.asefa bogeal',
    phoneNumber: '0960948969',
    email: 'asefa@gmail.com',
    floorNumber: 1,
    roomNumber: 104,
   operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
    },
    building: { id: 13 }, 
  }
];

export const cafeterias: DeepPartial<Cafeteria>[] = [
  {
    id: 1,
    name: 'Central Cafeteria',
    type: CafeteriaType.Government,
    description: 'Main student cafeteria',
    capacity: 100,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
    },
  },
  {
    id: 2,
    name: 'AGRO Cafeteria',
    type: CafeteriaType.InPerson,
    description: 'Student cafeteria',
    capacity: 100,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
    },
  },
  {
    id: 3,
    name: 'Cafeteria of the DMU Employees',
    type: CafeteriaType.Government,
    description: 'Student cafeteria',
    capacity: 100,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
    },
  },{
    id: 4,
    name: 'Habeshs Cafeteria',
    type: CafeteriaType.InPerson, 
    description: 'Student cafeteria', 
    capacity: 100,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
    },
  },{
    id: 5,
    name: 'Mesrake  Cafeteria',
    type: CafeteriaType.InPerson,
    description: 'Student cafeteria',
    capacity: 100,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
    },
  }
];

export const shoppings: DeepPartial<Shopping>[] = [
  {
    id: 1,
    shoppingName: 'Campus Store',
    capacity: 100,
    description: 'Provides books, supplies and snacks',
  },{
    id: 2,
    shoppingName: 'Cafeteria Store',
    capacity: 100,
    description: 'printer House',
  },{
    id: 3,
    shoppingName: 'Office Store',
    capacity: 100,
    description: 'Office Store',
  }
];
export const dormitories: DeepPartial<Dormitory>[] = [
    {
    id: 1,
    gender: GenderType.Female,
    dormitory_type: DormitoryType.NonSNP,
    number_of_student: 360,
    number_of_room: 60,
    building: { id: 10},
  },
    {
    id: 2,
    gender: GenderType.Female,
    dormitory_type: DormitoryType.NonSNP,
    number_of_student: 360,
    number_of_room: 60,
    building: { id: 9 },
  },
    {
    id: 3,
    gender: GenderType.Male,
    dormitory_type: DormitoryType.SNP,
    number_of_student: 360,
    number_of_room: 60,
    building: { id: 8 },
  },
    {
    id: 4,
    gender: GenderType.Male,
    dormitory_type: DormitoryType.NonSNP,
    number_of_student: 360,
    number_of_room: 60,
    building: { id: 6},
  },{
    id: 5,
    gender: GenderType.Male,
    dormitory_type: DormitoryType.NonSNP,
    number_of_student: 360,
    number_of_room: 60,
    building: { id: 7 },
  },
];
export const classes: DeepPartial<Classes>[] = [
  {
    id: 1,
    name: 'New Bilding class 101',
    building: { id: 3 },
    floorNumber: 1,
    roomType: 'Classroom',
    roomNumber: 101,
  },{
    id: 2,
    name: 'New Bilding class 102',
    building: { id: 3 },
    floorNumber: 1,
    roomType: 'Classroom',
    roomNumber: 102,
  },{
    id: 3,
    name: 'New Bilding class 103',
    building: { id: 3 },
    floorNumber: 1,
    roomType: 'Classroom',
    roomNumber: 103,
  },{

    id: 4,
    name: 'New Bilding class 104',
    building: { id: 3 },
    floorNumber: 1,
    roomType: 'Classroom',
    roomNumber: 104,
  }
];
export const libraries: DeepPartial<Library>[] = [
  {
    name: 'Main Library',
    headOfLibrary: 'Dr. Amanuel Tekle',
    building: { id: 1 }, // Assuming Building with id 1 exists
    capacity: 200,
    operationalTime: {
      morning: { open: '08:00', closing: '12:00' },
      afternoon: { open: '13:00', closing: '17:00' },
      night: { open: '18:00', closing: '21:00' },
    },
  },
  {
    name: 'No2 Library',
    headOfLibrary: 'Mrs. Betalhame Belay',
    building: { id: 2 },
    capacity: 150,
    operationalTime: {
      morning: { open: '07:30', closing: '11:30' },
      afternoon: { open: '12:30', closing: '16:30' },
      night: { open: '17:30', closing: '20:00' },
    },
  },
  {
    name: 'No1 Library',
    headOfLibrary: 'Mr. Selam Belay',
    building: { id: 11 },
    capacity: 150,
    operationalTime: {
      morning: { open: '07:30', closing: '11:30' },
      afternoon: { open: '12:30', closing: '16:30' },
      night: { open: '17:30', closing: '20:00' },
    },
  },
  {
    name: 'Digital Research Library',
    headOfLibrary: 'Mr. Henok Alemu',
    building: { id: 12 },
    capacity: 100,
    operationalTime: {
      morning: { open: '09:00', closing: '12:00' },
      afternoon: { open: '13:00', closing: '17:00' },
      night: { open: '18:00', closing: '22:00' },
    },
  },
];

export const registrations: DeepPartial<Registration>[] = [
  {
    id: 1,
   name: 'Habtamue Abebe',
   email: 'habtamu@gmail.com',
   phoneNumber:'0960948969',
   floorNumber: 1,
   roomNumber: 1,
   building: { id: 4 },
   department: { id: 1 },
   scienceType: { id: 1 },
  },
];

// export const navigationPaths: DeepPartial<NavigationPath>[] = [
//   {
//     id: 1,
//   fromBuilding:
//     {
//       id: 1,
//       name: 'Main Library',
//       type: BuildingType.rectangle,
//       latitude: 9.03,
//       longitude: 38.75,
//       description: 'Main academic library building',
//     },
//   toBuilding:
//     {
//       id: 2,
//       name: 'No2 Library',
//       type: BuildingType.rectangle,
//       latitude: 9.03,
//       longitude: 38.75,
//       description: 'No2 academic library building',
//     },    
//   },
// ];

export const parkings: DeepPartial<Parking>[] = [
  {
    id: 1,
    parkingName: 'North Parking Lot',
    capacity: 100,
    description: 'Near the faculty building',
  },{
    id: 2,
    parkingName: 'South Parking Lot',
    capacity: 100,
    description: 'Near the faculty building',
  },{
    id: 3,
    parkingName: 'East Parking Lot',
    capacity: 100,
    description: 'Near the faculty building',
  }
];
