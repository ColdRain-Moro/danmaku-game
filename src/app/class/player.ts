import Vector2D from "../utils/vector2d";
import { Actor } from "./actor";
import Entity from "./entity";

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
}