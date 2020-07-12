import { CharacterStatsDTO } from "./CharacterStatsDTO";


export interface CharacterDTO {
    name: string;
    level: number;
    stats: CharacterStatsDTO
}
