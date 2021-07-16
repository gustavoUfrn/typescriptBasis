import { Request, Response} from "express";
import CreateCourseService from "./CreateCourseService";

export function CreateCourse(request: Request, response: Response){
    CreateCourseService.execute("nodeJS", 10 , "Gustavo");

    return response.send();
}