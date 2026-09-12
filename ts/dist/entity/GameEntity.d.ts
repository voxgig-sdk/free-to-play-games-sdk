import { FreeToPlayGamesEntityBase } from '../FreeToPlayGamesEntityBase';
import type { FreeToPlayGamesSDK } from '../FreeToPlayGamesSDK';
import type { Control } from '../types';
import type { Game, GameListMatch } from '../FreeToPlayGamesTypes';
declare class GameEntity extends FreeToPlayGamesEntityBase<Game> {
    constructor(client: FreeToPlayGamesSDK, entopts: any);
    make(this: GameEntity): GameEntity;
    list(this: any, reqmatch?: GameListMatch, ctrl?: Control): Promise<GameEntity[]>;
}
export { GameEntity };
