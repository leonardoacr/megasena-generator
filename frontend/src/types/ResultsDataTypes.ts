export interface IData {
    [key: string]: string;
    your_game: string;
    correct_guesses: string;
    game_number: string;
    past_result: string;
    data: string;
    type_of_prize: string;
}

export interface IResultsStateData {
    data: IData | null;
    isLoading: boolean;
    isError: boolean;
}