import "../css/style.css"
import { Actor, Reimu } from "./class/actor"
import Particle from './class/particle'
import Player from "./class/player"
import { State, Prepared, Play, Failure, Victory } from "./class/state"
import { initPrepared } from "./prepared"
import Vector2D from './utils/vector2d'

export let currentState: State = newPreparedState()

export function setState(state: State) {
    currentState = state
}

export function newPreparedState(): Prepared {
    return {
      onStart() {
        
      },
      onStop() {

      },
      selectedActor: Reimu
    }
}

export function newPlayState(actor: Actor, renderTask: () => void): Play {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    let taskId: number;
    return {
        onStart() {
            taskId = window.requestAnimationFrame(renderTask)
        },
        onStop() {
            window.cancelAnimationFrame(taskId)
        },
        enemys: [],
        player: new Player(new Vector2D(0, 0), actor),
        canvas,
        ctx
    }
}

export function newFailureState(scoreFailure: number): Failure {
    return {
      onStart() {
        
      },
      onStop() {
        
      },
      scoreFailure
    }
}

export function newVictoryState(scoreVictory: number): Victory {
    return {
      onStart() {

      },
      onStop() {

      },
      scoreVictory
    }
}

initPrepared()