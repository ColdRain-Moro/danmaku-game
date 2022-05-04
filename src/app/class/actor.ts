import { Play } from "./state";

export interface Actor {
    avatar: string;
    name: string;

    /**
     * 符卡
     */
    bomb?(): void;

    /**
     * 初始化开火任务
     * @returns 定时任务id
     */
    initFireTask(state: Play): number;
}

export const Reimu: Actor = {
    avatar: "",
    name: "博丽灵梦",
    initFireTask: () => {
        throw new Error("Function not implemented.");
    }
}

export const Marisa: Actor = {
    avatar: "",
    name: "雾雨魔理沙",
    initFireTask: () => {
        throw new Error("Function not implemented.");
    }
}