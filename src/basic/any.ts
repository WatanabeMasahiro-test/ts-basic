export default function anySample() {
  let name: any = 'Torahack' //anyにstring型を代入
  console.log('any sample 1:', typeof name, name)

  name = 28
  console.log('any sample 2:', typeof name, name)
}
