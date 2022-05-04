import Rect from "../utils/rect";
import Vector2D from "../utils/vector2d";
import Particle from "./particle";
import { Play } from "./state";

export default abstract class Entity {
    /**
     * 位置
     */
    loc: Vector2D;
    /**
     * 碰撞箱 （判定点大小）
     */
    rect: Rect;
    /**
     * 血量
     * 对于玩家来说，血量就是命数，每次被打中扣掉1
     */
    health: number;
    /**
     * 生物发出的弹幕粒子
     */
    danmakus: Particle[] = [];

    /**
     * 开火任务id
     */
    private fireTaskId: number = -1;

    constructor(loc: Vector2D, rect: Rect = { width: 20, height: 20 }, health: number = 6) {
        this.loc = loc;
        this.rect = rect;
        this.health = health;
    }

    /**
     * 初始化开火任务
     * @return 任务id
     */
    abstract initFireTask(state: Play): number;

    /**
     * 初始化移动任务
     * @return 任务id
     */
    abstract initMoveTask(state: Play): void;

    /**
     * 渲染自己
     * @param state 状态
     */
    abstract renderSelf(state: Play): void;

    /**
     * 渲染实体以及其发射的所有弹幕
     * 并再次同时清算打中其他实体的弹幕
     * @param state 
     */
    render(state: Play) {
        this.beforeRender(state);
        this.danmakus.forEach(d => d.render(state.canvas, state.ctx));
        this.renderSelf(state);
    }

    private beforeRender(state: Play) {
        // 自己以外的全部实体
        const entitys = state.enemys.concat(state.player).filter(e => e !== this);
        this.danmakus = this.danmakus.filter(d => d.loc.x > state.canvas.width || d.loc.x < 0 || d.loc.y > state.canvas.height || d.loc.y < 0);
        entitys.forEach(e => {
            this.danmakus.forEach(d => {
                if (isCollide(e, d)) {
                    // 注销弹幕
                    this.danmakus.splice(this.danmakus.indexOf(d), 1);
                    // 扣血
                    e.damage(1, state);
                }
            })
        })
    }

    private damage(damage: number, state: Play) {
        this.health -= damage;
        if (this.health <= 0) {
            this.onDeath(state);
        }
    }

    /**
     * 生命周期方法
     * 实体出生时
     * @param state 状态
     */
    onSpawn(state: Play) {
        this.fireTaskId = this.initFireTask(state);
    }

    /**
     * 生命周期方法
     * 实体死亡时
     * @param state 状态
     */
    onDeath(state: Play) {
        clearInterval(this.fireTaskId);
    }
}

function isCollide(entity: Entity, particle: Particle): boolean {
    const { x, y } = particle.loc;
    const { width, height } = particle.rect;
    return Math.max(x, entity.loc.x) <= Math.min(x + width, entity.loc.x + entity.rect.width) 
        && Math.max(y, entity.loc.y) <= Math.min(y + height, entity.loc.y + entity.rect.height)
}