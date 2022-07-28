import { Country } from "./country.interface";

export interface User {
    name: string;
    pass: string;
    promotion: boolean;
    mail: string;
    country: string;
    city: string;
    id: string;
}