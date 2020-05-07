import { Gender } from "./gender";

export interface Friend {
  id: number | void;
  name: string;
  surname: string;
  age: number;
  gender: Gender;
  city?: string; 
}