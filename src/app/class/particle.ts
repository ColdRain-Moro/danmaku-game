import Rect from "../utils/rect";
import Vector2D from "../utils/vector2d";

// 粒子
export default interface Particle {
    /**
     * 位置
     */
    loc: Vector2D;
    /**
     * 速度
     */
    velocity: Vector2D;
    /**
     * 碰撞箱
     */
    rect: Rect;

    /**
     * 渲染粒子
     */
    render: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void;
    
}