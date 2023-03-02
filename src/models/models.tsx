export interface MovieType {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    release_date: string;
}

export interface CategoryType {
    id: number
    name: string
}

export interface DetailsType {
    language: string;
    title: string;
    popularity: number;
    release_date: string
    backdrop_path: string;
}