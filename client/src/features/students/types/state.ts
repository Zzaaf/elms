import { Diploma } from "./diploma";
import { Student } from "./student"

export type State = {
    student:Student;
    error:undefined | string;
    diploma: Diploma | {};
    
}