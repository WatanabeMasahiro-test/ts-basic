type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' |'4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second' // 先手or後手

/**
 * 駒の位置を表すクラス
 */
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  // パラメーターに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan)- Number(this.dan))
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -(Math.abs(Number(position.dan)- Number(this.dan))) // 段(縦の位置)は正負反転
      }
    }
  }
}

/**
 * 駒そのものを表すクラス
 */
abstract class Piece {
  // Pieceクラスとサブクラスでアクセスできる
  protected position: Position

  constructor(
    private readonly player: Player,
    suji: Suji,
    dan: Dan
  ) {
    this.position = new Position(suji, dan)
  }

  // メソッドの定義
  moveTo(position: Position) { // コマの移動用メソッド
    this.position = position
  }

  // 移動できるかどうかを判定するメソッド
  abstract canMoveTo(position: Position, player: Player): boolean
}
// new Piece('first', 1, '1')

class Osho extends Piece {
  // 王将のcanMoveToメソッドを具体的に実装する
  canMoveTo(position: Position, player: Player): boolean {
    const distance =this.position.distanceFrom(position, player)
    return (distance.suji < 2 && distance.dan < 2)
  }
}

class Fu extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (distance.suji === 0 && distance.dan === 1) // 移動先との距離が前方1マスであれば
  }
}

class NariKin extends Fu {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (
      (distance.suji < 2 && distance.dan < 2) // 移動先がiマス以内
        &&
      (distance.suji !== 0 && distance.dan === -1) // 左後方と右後方には進めない
    )
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      new Osho('first', 5, '1'),
      new Osho('second', 5, '9')
    ]
  }
}