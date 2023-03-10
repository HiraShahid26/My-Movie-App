export interface MovieType {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    release_date: string;
}

export interface DetailsType {
    language: string;
    title: string;
    popularity: number;
    release_date: string
    poster_path: string;
    overview: string;
}