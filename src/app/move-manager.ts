import Entity from "./class/entity";
import { Play } from "./class/state";
import { currentState } from "./main";

const enemys: Entity[] = []

let enemyMoveTaskId;

export function initMoveManager() {
    enemyMoveTaskId = setInterval(() => {
        
    }, 16)
}

export function initPlayerMove() {

}

export function initEnemyMove(entity: Entity) {
    enemys.push(entity);
}