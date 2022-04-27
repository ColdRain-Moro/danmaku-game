import Rect from "../utils/rect";
import Vector2D from "../utils/vector2d";
import Particle from "./particle";

export default class Entity {
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

    constructor(loc: Vector2D, rect: Rect = { width: 20, height: 20 }, health: number = 6) {
        this.loc = loc;
        this.rect = rect;
        this.health = health;
    }

    beforeRender(canvas: HTMLCanvasElement, entitys: Entity[]) {
        this.danmakus = this.danmakus.filter(d => d.loc.x > canvas.width || d.loc.x < 0 || d.loc.y > canvas.height || d.loc.y < 0);
        entitys.forEach(e => {
            this.danmakus.forEach(d => {
                if (isCollide(e, d)) {
                    // 注销弹幕
                    this.danmakus.splice(this.danmakus.indexOf(d), 1);
                }
            })
        })
    }
}

function isCollide(entity: Entity, particle: Particle): boolean {
    const { x, y } = particle.loc;
    const { width, height } = particle.rect;
    return Math.max(x, entity.loc.x) <= Math.min(x + width, entity.loc.x + entity.rect.width) 
        && Math.max(y, entity.loc.y) <= Math.min(y + height, entity.loc.y + entity.rect.height)
}