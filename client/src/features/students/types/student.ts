import { Diploma } from "./diploma";

export type Student = {
    "id": number;
    "firstName": string;
    "lastName": string;
    "patronymic":string;
    "email":string;
    "gitHub": string;
    "status": boolean;
    "avatar": string;
    "telephone": string;
    "GroupStudents": GroupStudent[];
    "Diploma": Diploma[];
  };
  export type GroupStudent={
    id:number;
    status:string;
    Group:Group;
    Phase:Phase;
  }
  export type Group={
    "name":string;
    "startDate": string;
    "expirationDate":string;
  }
  export type Phase={
    name:string;
  }