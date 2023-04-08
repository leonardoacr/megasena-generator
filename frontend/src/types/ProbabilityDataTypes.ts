export interface IProbabilityData {
    [key: string]: number[];
    upper_limit_array: number[];
    new_probability_array: number[];
    new_probability_percentage_array: number[];
}

export interface IProbabilityStateData {
    probabilityData: IProbabilityData;
}