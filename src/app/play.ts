import { Play } from "./class/state";

let moveTaskId: number;

// 加入敌人和玩家
export function initPlay() {
    
}

export function render(state: Play) {
    const {canvas, ctx} = state;
    // 清屏
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 绘制
    state.enemys
        .concat(state.player)
        .forEach(e => e.render(state));
}