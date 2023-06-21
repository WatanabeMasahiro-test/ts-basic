export default function genericsAdvancedSample() {
  // map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    // 文字列から数値型へ
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const numbers = mapStringsToNumbers(['123', '456', '789'], (item) => Number(item))
  console.log('Generics advanced sample 1:', numbers)

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    // 数値型から文字列へ
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  // const strings = mapNumbersToStrings([123, 456, 789], (item) => String(item))
  const strings = mapNumbersToStrings(numbers, (item) => String(item))
  console.log('Generics advanced sample 1:', strings)
}
