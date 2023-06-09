export type Diploma = {
    id?:number;
    series: string;
    number:string;
    lastName:string;
    firstName:string;
    patronymic:string;
    dateBirth:string;
    sex:'Мужской' | 'Женский';
    snils:string;
    citizenship:string;
    typeEducation: 'Высшее образование' | 'Средне специальное образование' ;
    studentId:number;
  };
  