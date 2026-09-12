export interface Game {
    description?: string;
    developer?: string;
    freetogame_profile_url?: string;
    game_url?: string;
    genre?: string;
    id?: number;
    minimum_system_requirements?: Record<string, any>;
    platform?: string;
    publisher?: string;
    release_date?: string;
    screenshots?: any[];
    short_description?: string;
    status?: string;
    thumbnail?: string;
    title?: string;
}
export interface GameListMatch {
    category?: string;
    platform?: string;
    sort_by?: string;
}
