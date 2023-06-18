export default function arraySample() {
  /**
   * シンプルな配列の型定義
   */
  const colors: string[] = ["red", "blue"]
  colors.push("yellow")
  // colors.push(123)
  console.log("Array array sample 1:", colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("10")
  console.log("Array array sample 2:", even)

  const ids: (string | number)[] = ["ABC", 123]
  ids.push("DEF")
  ids.push(456)
  // ids.push(true)
  console.log("Array array sample 3:", ids)

  const ids2: Array<string | number> = ["ABC", 123]
  ids2.push("DEF")
  ids2.push(456)
  ids2.push("GHI")
  ids2.push(789)
  // ids2.push(true)
  console.log("Array array sample 3':", ids2)

  /**
   * 配列の型推論
   */
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123)  // number[]
    _someArray.push("ABC")  // (string | number)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log("Array array sample 4:", someArray)

  /**
   * イミュータブルな配列を作る
   */
  const gitCommands: readonly string[] = ["git add", "ait commit", "git push"]
  // gitCommands.push("git fetch")  // 要素の追加ができない
  // gitCommands[2] = "git pull"    // 要素の書換えができない
  console.log("Array array sample 5:", gitCommands)
}