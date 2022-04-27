# danmaku-game

简单的车万弹幕游戏，使用`vite`创建，使用`TypeScript`编写。

## 思路 & 架构

### 生命周期

游戏从开始到结束经历的生命周期阶段

每一个生命周期阶段会持有对应的数据

#### Prepared

> 准备阶段

玩家在点击开始游戏之前经历的阶段。

在该阶段，玩家可以选择自机。

##### LifeCycle Data

~~~typescript
interface LifeCycleData.Prepared {
    selected: Actor;
}
~~~

#### Play !important

> 游玩阶段

玩家游玩游戏的阶段。

在此阶段，LifeCycleData持有玩家以及全场的敌对生物，并可以从他们的对象中获取全部弹幕，以此渲染游戏画面。

获取粒子的过程中会进行是否碰撞的判断，如果碰撞会扣除相应的血量。

也许可以做做决死？目前还是先把基础的功能做了吧。

##### LifeCycle Data

~~~typescript
interface LifeCycleData.Play {
    enemys: Entity[];
    player: Player;
}
~~~

#### Failure

> 失败阶段

玩家挑战失败的阶段。

在此阶段播放失败动画，并询问是否继续挑战。

继续挑战则跳到Play阶段。

#### Victory

> 胜利阶段

玩家挑战胜利的阶段。

逻辑同Failure阶段。







