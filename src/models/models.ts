export interface ForecastDay {
    date: string,
    code: number,
    minDayTempC: number,
    maxDayTempC: number,
    generatedPVEnergyKWH: number
}

export interface Summary {
    avgPressure: number,
    avgSunTimeExposure: number,
    minWeekTempC: number,
    maxWeekTempC: number,
    description: BooleanMap
}

interface BooleanMap {
    [key: string]: boolean;
}