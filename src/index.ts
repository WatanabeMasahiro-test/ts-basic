// import World from './world'

// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

/**
 * ↓↓↓ 03.基本の型定義 ↓↓↓
 */
// import { unknownSample, anySample, notExistSample, primitiveSample } from './basic'

// unknownSample()
// anySample()
// notExistSample()
// primitiveSample()

/**
 * ↓↓↓ 04.関数の型定義 ↓↓↓
 */
// import { logMessage, logMessage2, logMessage3, logMessage4, logMessage6, logMessage7 } from './function/basic'
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

// logMessage('Hello TypeScript!')
// logMessage2('Hello TypeScript2!')
// logMessage3('Hello TypeScript3!')
// logMessage4('Hello TypeScript4!')

// isUserSignedIn('ABC', 'Torahack')
// isUserSignedIn('DEF', 'Torahack')
// isUserSignedIn2('ABC')
// const sum = sumProductsPrice(100, 200, 300, 400, 500)
// console.log('Function parameters sample 5:', sum)

// logMessage6('Hello 666!!!')
// logMessage7('Hello 777!!!')

/**
 * ↓↓↓ 05.オブジェクトの型定義 ↓↓↓
 */
// import objectSample from './object/object'
// import typeAliasSample from './object/alias'

// objectSample()
// typeAliasSample()

/**
 * ↓↓↓ 06.配列とタプルの型定義 ↓↓↓
 */
// import arraySample from "./array/array"
// import tupleSample from "./array/tuple"

// arraySample()
// tupleSample()

/**
 * ↓↓↓ 07. ジェネリック型とポリモーフィズム ↓↓↓
 */
// import genericBasicSample from './generics/basic'
// import genericsAdvancedSample from './generics/advanced'

// genericBasicSample()
// genericsAdvancedSample()

/**
 * ↓↓↓ 10. 非同期処理 ↓↓↓
 */
// import callbackSample from './asynchronous/callback'
// import promiseSample from './asynchronous/promise'
import asyncAwaitSample from "./asynchronous/asyncAwaiit";

// callbackSample()
// promiseSample()
asyncAwaitSample()