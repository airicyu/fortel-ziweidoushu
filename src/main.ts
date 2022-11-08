import { Calendar } from './calendar/calender'
import { defaultCalendar } from './calendar/defaultCalendar'
import { BoardCriteria, CellsScope } from './criteria/boardCriteria'
import { DestinyConfigBuilder } from './util/destinyConfigBuilder'
import { Cell, BorrowCell } from './model/cell'
import { DayTimeGround } from './model/dayTimeGround'
import { DestinyBoard } from './model/destinyBoard'
import { ConfigType, DestinyConfig, Gender } from './model/destinyConfig'
import { Ground } from './model/ground'
import { LifeStage } from './model/lifeStage'
import { MajorStar } from './model/majorStar'
import { MiniStar } from './model/miniStar'
import { MinorStar } from './model/minorStar'
import { Element, Direction, Luckiness, ShadowLight } from './model/miscEnums'
import { Runtime } from './model/runtime'
import { Sky } from './model/sky'
import { StarDerivative } from './model/starDerivative'
import { Temple } from './model/temple'
import { destinyConfigTextParser } from './util/destinyConfigTextParser'
import { starByName, starByKey } from './util/starUtil'

const config = {
    DestinyConfig,
    ConfigType: {
        Ground: ConfigType.GROUND,
        Sky: ConfigType.SKY,
        HUMAN: ConfigType.HUMAN,
    },
    Gender: {
        M: Gender.M,
        F: Gender.F,
    },
    DayTimeGround,
    DestinyConfigBuilder,
    destinyConfigTextParser,
}

// prettier-ignore
const fortel = {
    // config
    config,
    // criteria
    BoardCriteria, CellsScope,
    // model classes
    Sky, Ground, DestinyBoard,
    Cell, BorrowCell, Temple,
    MajorStar, MinorStar, MiniStar,
    StarDerivative, Runtime,
    // misc enums
    LifeStage, Element, Luckiness, ShadowLight, Direction,
    // calendar
    defaultCalendar,
    // util
    starByName, starByKey
}

export default fortel

// prettier-ignore
export {
    // config
    config,
    // criteria
    BoardCriteria, CellsScope,
    // model classes
    Sky, Ground, DestinyBoard,
    Cell, BorrowCell, Temple,
    MajorStar, MinorStar, MiniStar,
    StarDerivative, Runtime,
    // misc enums
    LifeStage, Element, Luckiness, ShadowLight, Direction,
    // calendar
    defaultCalendar,
    // util
    starByName, starByKey
}

export type { Calendar }
