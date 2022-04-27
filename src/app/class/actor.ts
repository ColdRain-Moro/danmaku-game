export interface Actor {
    avatar: string;
    name: string;

    /**
     * 开火方法
     * @param ctx 
     */
    fire?(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;

    /**
     * 符卡
     * @param ctx 
     */
    bomb?(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void;
}

export const Reimu: Actor = {
    avatar: "",
    name: "博丽灵梦",
}

export const Marisa: Actor = {
    avatar: "",
    name: "雾雨魔理沙",
}