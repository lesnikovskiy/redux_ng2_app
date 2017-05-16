import { Injectable } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { IAppState } from "../store";

export const FILTER_COURSES = 'courses/FILTER';

@Injectable()
export class CourseActions {
    constructor(
        private ngRedux: NgRedux<IAppState>
    ) {}

    filterCourses(searchText: string) {
        this.ngRedux.dispatch({
            type: FILTER_COURSES,
            searchText
        });
    }
}