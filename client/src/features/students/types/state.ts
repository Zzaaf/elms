import { Diploma } from "./diploma";
import { Student } from "./student"

export type State = {
    student:Student | null;
    students:Student[];
    error:undefined | string;
    diploma: Diploma | null;
    message:string;
}