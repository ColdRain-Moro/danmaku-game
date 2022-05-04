import "../css/style.css"
import { Actor, Reimu } from "./class/actor"
import Particle from './class/particle'
import Player from "./class/player"
import { State, Prepared, Play, Failure, Victory } from "./class/state"
import { initPlay, render } from "./play"
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
        document.querySelector<HTMLElement>("#prepared")!.style.display = "none"
        document.querySelector<HTMLElement>("#play")!.style.display = "block"
        currentState = newPlayState((currentState as Prepared).selectedActor, render)
        currentState.onStart()
      },
      selectedActor: Reimu
    }
}

export function newPlayState(actor: Actor, renderTask: (state: Play) => void): Play {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    let taskId: number;
    return {
        onStart() {
            initPlay()
            taskId = window.requestAnimationFrame(() => renderTask(currentState as Play))
        },
        onStop() {
            window.cancelAnimationFrame(taskId)
            document.querySelector<HTMLElement>("#play")!.style.display = "none"
            const state = currentState as Play
            if (state.win) {
                currentState = newVictoryState(state.player.score)
                document.querySelector<HTMLElement>("#victory")!.style.display = "block"
            } else {
                currentState = newFailureState(state.player.score)
                document.querySelector<HTMLElement>("#failure")!.style.display = "block"
            }
        },
        enemys: [],
        player: new Player(new Vector2D(512, 600), actor),
        canvas,
        ctx,
        win: true
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