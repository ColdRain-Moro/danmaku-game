import { Actor } from "./actor";
import Entity from "./entity";
import Player from "./player";

export interface Prepared {
    /**
     * 选择的角色
     */
    selectedActor: Actor;
}

export interface Play {
    /**
     * 敌人
     */
    enemys: Entity[];
    /**
     * 玩家
     */
    player: Player;
    
}