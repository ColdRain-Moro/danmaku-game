export default class Vector2D {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(v: Vector2D): Vector2D {
        return new Vector2D(this.x + v.x, this.y + v.y);
    }

    sub(v: Vector2D): Vector2D {
        return new Vector2D(this.x - v.x, this.y - v.y);
    }

    rotate(angle: number): Vector2D {
        const rad = angle * Math.PI / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        return new Vector2D(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
    }

    distance(v: Vector2D): number {
        return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2));
    }
}