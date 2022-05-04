import Vector2D from "../utils/vector2d";
import { Actor } from "./actor";
import Entity from "./entity";
import { Play } from "./state";

export default class Player extends Entity {

    /**
     * bomb 剩余次数
     */
    bomb: number = 6;

    /**
     * 得分
     */
    score: number = 0;

    /**
     * 选择的角色
     */
    actor: Actor;

    constructor(loc: Vector2D, actor: Actor) {
        super(loc, { height: 5, width: 5 }, 6);
        this.actor = actor;
    }

    initFireTask(state: Play): number {
        return this.actor.initFireTask(state);
    }        

    renderSelf(state: Play): void {
        throw new Error("Method not implemented.");
    }

    initMoveTask(state: Play): number {
        throw new Error("Method not implemented.");
    }

    onDeath(state: Play): void {
        super.onDeath(state);
        state.onStop();
    }
}