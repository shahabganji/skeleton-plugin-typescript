import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';
export declare class Users {
    private http;
    heading: string;
    users: any[];
    constructor(http: HttpClient);
    activate(): Promise<any>;
}
