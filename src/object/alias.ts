export default function typeAliasSample() {
  /**
   * 型エイリアスで型定義を再利用
   */
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object alias sample 1:', japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'USA',
  }

  console.log('Object alias sample 2:', america)

  /**
   * 合併型(Union)と交差型(intersection)
   */
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型... KnightまたはWizardの型を持つ ***
  type Adventurer = Knight | Wizard

  // 交差型... KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    // Knight寄りの冒険者
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り',
  }

  const adventurer2: Adventurer = {
    // Wizard寄りの冒険者
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤーボール',
  }

  console.log('Object alias sample 3:', adventurer1)
  console.log('Object alias sample 4:', adventurer2)

  const paladin: Paladin = {
    // 聖騎士（Knight × Wizard）
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連切り',
    magicSkill: 'ファイヤーボール',
  }

  console.log('Object alias sample 5:', paladin)
}
