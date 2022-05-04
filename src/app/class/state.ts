import { Actor } from "./actor";
import Entity from "./entity";
import Player from "./player";

export interface State {
    /**
     * 生命周期hook
     * onStart
     */
    onStart(): void;

    /**
     * 生命周期hook
     * onStop
     */
    onStop(): void;
}

export interface Prepared extends State {
    /**
     * 选择的角色
     */
    selectedActor: Actor;
}

export interface Play extends State {
    /**
     * 敌人
     */
    enemys: Entity[];
    /**
     * 玩家
     */
    player: Player;

    /**
     * 画布
     */
    canvas: HTMLCanvasElement;

    /**
     * 画笔
     */
    ctx: CanvasRenderingContext2D;

    /**
     * 结果
     */
    win: boolean;
}

export interface Failure extends State {
    /**
     * 得分
     */
    scoreFailure: number;
}

export interface Victory extends State {
    /**
     * 得分
     */
    scoreVictory: number;

}