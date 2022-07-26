import { Country } from "./country.interface";

export interface User {
    name: string;
    pass: string;
    promotion: Boolean
    email: string;
    country: Country;
    city: string;
}