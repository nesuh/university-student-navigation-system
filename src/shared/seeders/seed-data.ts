import { DeepPartial } from 'typeorm';
import {
  Users,
  Building,
  Faculty,
  Department,
  Lab,
  Hall,
  Office,
  Cafeteria,
  Shopping,
  ScienceType,
  Field,
  Classes,
  Registration,
  NavigationPath,
  Parking,
  College,
  Dormitory
} from 'src/db/entities';
import { BuildingType, GenderType, UserRole } from '../enums';
import { CafeteriaType } from '../enums/cafeteria_type.enum';
import { DormitoryType } from '../enums/dormitory-type.enum';

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
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,
    description: 'Main academic library building',
  },{
    id: 2,
    name: 'No2 Library',
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,
    description: 'No2 academic library building',
  },{
    id: 3,
    name: 'New Building',
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,
    description: 'students class room  building',
  },{
    // technology registration building
    id: 4,
    name: 'Tech Registration Building',
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'Tech Registration Building',
  } ,
  {
    id: 5,
    name: 'Socail Sceince Registration Building',
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'Scoail Sceince Registration Building',
  } ,{
    id:6,
    name: 'Stundent dormitory  606',
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'students dormitory for Male ',
  },
  {
    id:7,
    name: 'Stundent dormitory 607',
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'students dormitory for Male ',
  },{
    id:8,
    name: 'Stundent dormitory 27',
    type: BuildingType.single,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'students dormitory for disapled  Male',
  },{
    id:9,
    name: 'Stundent dormitory 45',
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'students dormitory for Female ',
  },{
    id:10,
    name: 'Stundent dormitory 46',
    type: BuildingType.rectangle,
    latitude: 9.03,
    longitude: 38.75,    
    description: 'students dormitory for Female ',
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
    name: 'Agriculture College',
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 2, // Numeric ID
    name: 'College of Business and Economics',
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 3, // Numeric ID
    name: 'Health College',
    scienceType: { id: 3 }, // Health Science type
  },
  {
    id: 4, // Numeric ID
    name: 'Land Administration College',
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 5, // Numeric ID
    name: 'Law School',
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 6, // Numeric ID
    name: 'Natural Science College',
    scienceType: { id: 1 }, // Natural Science type
  },
  {
    id: 7, // Numeric ID
    name: 'College of Education and Behavioral Studies',
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 8, // Numeric ID
    name: 'Social Science College',
    scienceType: { id: 2 }, // Social Science type
  },
  {
    id: 9, // Numeric ID
    name: 'Technology of Institution',
    scienceType: { id: 1 }, // Natural Science type
  },
];


export const faculties: DeepPartial<Faculty>[] = [
   {
    id: 1, // Numeric ID
    name: 'Engineering Faculty',
    scienceType: { id: 1 },
    college: { id: 9 }, // Replace with actual College ID
  },
  {
    id: 2, // Numeric ID
    name: 'Computer Science Faculty',
    scienceType: { id: 1 },
    college: { id: 9 }, // Replace with actual College ID
  },
];

// Seeder data for Departments (with numeric ids)
export const departments: DeepPartial<Department>[] = [
  {
    id: 1, // Numeric ID
    name: 'Software Engineering',
    college: { id: 9 }, // Replace with actual College ID
    faculty: { id: 1 }, // Replace with actual Faculty ID
  },
  {
    id: 2, // Numeric ID
    name: 'Civil Engineering',
    college: { id: 9 }, // Replace with actual College ID
    faculty: { id: 1 }, // Replace with actual Faculty ID
  },
  {
    id: 3, // Numeric ID
    name: 'Hydraulic Engineering',
    college: { id: 9 }, // Replace with actual College ID
    faculty: { id: 1 }, // Replace with actual Faculty ID

  },
  {
    id: 4, // Numeric ID
    name: 'COTM',
    college: { id: 9 }, // Replace with actual College ID
    faculty: { id: 1 }, // Replace with actual Faculty ID

  },
  {
    id: 5, // Numeric ID
    name: 'Electrical Engineering',
    college: { id: 9 }, // Replace with actual College ID
    faculty: { id: 1 }, // Replace with actual Faculty ID

  },
  {
    id: 6, // Numeric ID
    name: 'Mechanical Engineering',
    college: { id: 9 }, // Replace with actual College ID
    faculty: { id: 1 }, // Replace with actual Faculty ID
  },
  {
    id: 7, // Numeric ID
    name: 'Computer Science Department',
    college: { id: 9 }, // Replace with actual College ID
    faculty: { id: 1 }, // Replace with actual Faculty ID
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
    building: { id: 1 },
    floorNumber: 1,
    roomNumber: 1,
    operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
      night: { open: '09:00', closing: '17:00' },
    },
  },
];
export const offices: DeepPartial<Office>[] = [
  {
    id: 1,
    name: 'Dean Office',
    phoneNumber: '0960948969',
    email: 'yahyhudr@gmail.com',
    floorNumber: 1,
    roomNumber: 1,
   operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
    },
    building: { id: 1 },

  },
  {
    id: 2,
    name: 'Assistance Proffcier Office',
    phoneNumber: '0960948969',
    email: 'baya@gmail.com',
    floorNumber: 1,
    roomNumber: 1,
   operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
    },
    building: { id: 2 },

  },  
  {
    id: 3,
    name: 'associtation Office',
    phoneNumber: '0960948969',
    email: 'legalme@gmail.com',
    floorNumber: 1,
    roomNumber: 1,
   operationalTime: {
      morning: { open: '09:00', closing: '17:00' },
      afternoon: { open: '09:00', closing: '17:00' },
    },
    building: { id: 2 },

  },
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
   faculty: { id: 1 },
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
