import { Ground } from '../src/model/ground'
import { MajorStar } from '../src/model/majorStar'
import { MinorStar } from '../src/model/minorStar'
import { Sky } from '../src/model/sky'
import { StarDerivative } from '../src/model/starDerivative'
import { Runtime } from './../src/model/runtime'

describe('Test runtime', () => {
    it('Test runtime', () => {
        const runtimeStarLocation = Runtime.getRuntimeStarsLocation(Sky.get(0))
        expect(runtimeStarLocation.get(MinorStar.MINOR_STAR_EARN)).toBe(Ground.getByName('寅'))
        expect(runtimeStarLocation.get(MinorStar.MINOR_STAR_BENEFACTOR_MAN)).toBe(Ground.getByName('丑'))
        expect(runtimeStarLocation.get(MinorStar.MINOR_STAR_BENEFACTOR_WOMAN)).toBe(Ground.getByName('未'))
        expect(runtimeStarLocation.get(MinorStar.MINOR_STAR_CLEVER)).toBe(Ground.getByName('巳'))
        expect(runtimeStarLocation.get(MinorStar.MINOR_STAR_SKILL)).toBe(Ground.getByName('酉'))
        expect(runtimeStarLocation.get(MinorStar.MINOR_STAR_COMPETITION)).toBe(Ground.getByName('卯'))
        expect(runtimeStarLocation.get(MinorStar.MINOR_STAR_HINDRANCE)).toBe(Ground.getByName('丑'))

        const expectMap: (MajorStar | MinorStar)[][] = [
            [MajorStar.MAJOR_STAR_FIRE, MajorStar.MAJOR_STAR_PIONEER, MajorStar.MAJOR_STAR_GOLD, MajorStar.MAJOR_STAR_SUN],
            [MajorStar.MAJOR_STAR_CHANGE, MajorStar.MAJOR_STAR_RULE, MajorStar.MAJOR_STAR_EMPEROR, MajorStar.MAJOR_STAR_MOON],
            [MajorStar.MAJOR_STAR_ENJOYMENT, MajorStar.MAJOR_STAR_CHANGE, MinorStar.MINOR_STAR_CLEVER, MajorStar.MAJOR_STAR_FIRE],
            [MajorStar.MAJOR_STAR_MOON, MajorStar.MAJOR_STAR_ENJOYMENT, MajorStar.MAJOR_STAR_CHANGE, MajorStar.MAJOR_STAR_ARGUMENT],
            [MajorStar.MAJOR_STAR_GREED, MajorStar.MAJOR_STAR_MOON, MajorStar.MAJOR_STAR_SUN, MajorStar.MAJOR_STAR_CHANGE],
            [MajorStar.MAJOR_STAR_GOLD, MajorStar.MAJOR_STAR_GREED, MajorStar.MAJOR_STAR_RULE, MinorStar.MINOR_STAR_SKILL],
            [MajorStar.MAJOR_STAR_SUN, MajorStar.MAJOR_STAR_GOLD, MajorStar.MAJOR_STAR_TREASURY, MajorStar.MAJOR_STAR_ENJOYMENT],
            [MajorStar.MAJOR_STAR_ARGUMENT, MajorStar.MAJOR_STAR_SUN, MinorStar.MINOR_STAR_SKILL, MinorStar.MINOR_STAR_CLEVER],
            [MajorStar.MAJOR_STAR_RULE, MajorStar.MAJOR_STAR_EMPEROR, MajorStar.MAJOR_STAR_TREASURY, MajorStar.MAJOR_STAR_GOLD],
            [MajorStar.MAJOR_STAR_PIONEER, MajorStar.MAJOR_STAR_ARGUMENT, MajorStar.MAJOR_STAR_MOON, MajorStar.MAJOR_STAR_GREED],
        ]

        for (let i = 0; i < 10; i++) {
            const sky = Sky.get(i)
            const map = Runtime.getDerivativeMapOf(sky)
            expect(map.get(StarDerivative.WEALTHINESS)).toBe(expectMap[i][0])
            expect(map.get(StarDerivative.POWER)).toBe(expectMap[i][1])
            expect(map.get(StarDerivative.FAME)).toBe(expectMap[i][2])
            expect(map.get(StarDerivative.PROBLEM)).toBe(expectMap[i][3])

            expect(Runtime.getDerivativeOf(StarDerivative.WEALTHINESS, sky)).toBe(expectMap[i][0])
            expect(Runtime.getDerivativeOf(StarDerivative.POWER, sky)).toBe(expectMap[i][1])
            expect(Runtime.getDerivativeOf(StarDerivative.FAME, sky)).toBe(expectMap[i][2])
            expect(Runtime.getDerivativeOf(StarDerivative.PROBLEM, sky)).toBe(expectMap[i][3])
        }
    })
})
