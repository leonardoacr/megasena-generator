import { GraphData } from "./GraphsTypes";

export interface IDashboardData {
    [key: string]: number[];
    first_x: number[];
    first_y: number[];
    second_x: number[];
    second_y: number[];
    third_x: number[];
    third_y: number[];
    fourth_x: number[];
    fourth_y: number[];
    fifth_x: number[];
    fifth_y: number[];
    sixth_x: number[];
    sixth_y: number[];
}

export interface IDashboardStateData {
    dashboardData: IDashboardData;
    isLoading: boolean;
    isError: boolean;
}

export interface DashboardProps {
    graphData: GraphData[];
}

export interface IDashboardContext {
    graphData: {
        xKey: string;
        yKey: string;
        title: string;
        index: number;
    };
    chartLabelColor: string;
    chartBackgroundColor: string;
    chartBorderColor: string;
    xLabel: string;
    yLabel: string;
    passDashboardData: IDashboardData;
    setGraphData: (
        xKey: string,
        yKey: string,
        title: string,
        index: number
    ) => void;
    setPassDashboardData: (dashboardData: IDashboardData) => void;
}