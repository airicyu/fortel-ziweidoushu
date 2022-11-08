import { Ground } from '../model/ground'
import { Sky } from '../model/sky'

export class CalendarType {
    key: string
    displayName: string
    constructor(key: string, displayName: string) {
        this.key = key
        this.displayName = displayName
    }

    toJSON() {
        return this.displayName
    }

    toString(): string {
        return this.displayName
    }

    static SOLAR = Object.freeze(new CalendarType('SOLAR', '公曆'))
    static LUNAR = Object.freeze(new CalendarType('LUNAR', '農曆'))
}

export declare type Calendar = {
    solar2lunar: (
        solarYear: number,
        solarMonth: number,
        solarDay: number,
    ) => {
        lunarYear: number
        lunarMonth: number
        lunarDay: number
        isLeapMonth: boolean
        yearSky: Sky
        yearGround: Ground
        monthSky: Sky
        monthGround: Ground
        daySky: Sky
        dayGround: Ground
    }

    lunar2solar: (
        lunarYear: number,
        lunarMonth: number,
        lunarDay: number,
        isLeapMonth: boolean,
    ) => {
        solarYear: number
        solarMonth: number
        solarDay: number
    }

    lunarSkyGround: (
        lunarYear: number,
        lunarMonth: number,
        lunarDay: number,
        isLeapMonth: boolean,
    ) => {
        yearSky: Sky
        yearGround: Ground
        monthSky: Sky
        monthGround: Ground
        daySky: Sky
        dayGround: Ground
    }
}
