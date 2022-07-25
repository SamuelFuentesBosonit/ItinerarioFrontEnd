import { Country } from "./country.interface";

export interface Usser {
    name: string;
    pass: string;
    email: string;
    country: Country;
    city: string[];
}