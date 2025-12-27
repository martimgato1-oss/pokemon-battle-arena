import { PrismaClient, Element, Rarity, ItemType, MoveType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Clean database
  await prisma.transaction.deleteMany()
  await prisma.gameLog.deleteMany()
  await prisma.report.deleteMany()
  await prisma.chatMessage.deleteMany()
  await prisma.userAchievement.deleteMany()
  await prisma.achievement.deleteMany()
  await prisma.eventParticipation.deleteMany()
  await prisma.event.deleteMany()
  await prisma.battle.deleteMany()
  await prisma.areaDrop.deleteMany()
  await prisma.areaSpawn.deleteMany()
  await prisma.area.deleteMany()
  await prisma.inventoryItem.deleteMany()
  await prisma.item.deleteMany()
  await prisma.move.deleteMany()
  await prisma.userCreature.deleteMany()
  await prisma.creatureSpecies.deleteMany()
  await prisma.passwordReset.deleteMany()
  await prisma.user.deleteMany()

  // ============ MOVES ============
  console.log('Creating moves...')

  const moves = await Promise.all([
    // Fire moves
    prisma.move.create({
      data: {
        name: 'Ember',
        description: 'A small flame attack',
        element: Element.FIRE,
        type: MoveType.SPECIAL,
        power: 40,
        accuracy: 100,
        powerPoints: 25,
        effects: { type: 'damage', burnChance: 10 },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Flamethrower',
        description: 'A powerful stream of fire',
        element: Element.FIRE,
        type: MoveType.SPECIAL,
        power: 90,
        accuracy: 100,
        powerPoints: 15,
        effects: { type: 'damage', burnChance: 10 },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Fire Blast',
        description: 'An intense blast of fire',
        element: Element.FIRE,
        type: MoveType.SPECIAL,
        power: 110,
        accuracy: 85,
        powerPoints: 5,
        effects: { type: 'damage', burnChance: 10 },
      },
    }),

    // Water moves
    prisma.move.create({
      data: {
        name: 'Bubble',
        description: 'A spray of bubbles',
        element: Element.WATER,
        type: MoveType.SPECIAL,
        power: 40,
        accuracy: 100,
        powerPoints: 30,
        effects: { type: 'damage', speedReduceChance: 10 },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Water Gun',
        description: 'A jet of water',
        element: Element.WATER,
        type: MoveType.SPECIAL,
        power: 65,
        accuracy: 100,
        powerPoints: 25,
        effects: { type: 'damage' },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Hydro Pump',
        description: 'A massive water blast',
        element: Element.WATER,
        type: MoveType.SPECIAL,
        power: 110,
        accuracy: 80,
        powerPoints: 5,
        effects: { type: 'damage' },
      },
    }),

    // Grass moves
    prisma.move.create({
      data: {
        name: 'Vine Whip',
        description: 'Whips the foe with vines',
        element: Element.GRASS,
        type: MoveType.PHYSICAL,
        power: 45,
        accuracy: 100,
        powerPoints: 25,
        effects: { type: 'damage' },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Razor Leaf',
        description: 'Sharp leaves cut the foe',
        element: Element.GRASS,
        type: MoveType.PHYSICAL,
        power: 55,
        accuracy: 95,
        powerPoints: 25,
        effects: { type: 'damage', critBonus: 10 },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Solar Beam',
        description: 'Absorbs light then attacks',
        element: Element.GRASS,
        type: MoveType.SPECIAL,
        power: 120,
        accuracy: 100,
        powerPoints: 10,
        effects: { type: 'damage', chargeTime: 1 },
      },
    }),

    // Electric moves
    prisma.move.create({
      data: {
        name: 'Thunder Shock',
        description: 'An electric shock attack',
        element: Element.ELECTRIC,
        type: MoveType.SPECIAL,
        power: 40,
        accuracy: 100,
        powerPoints: 30,
        effects: { type: 'damage', paralyzeChance: 10 },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Thunderbolt',
        description: 'A strong electric blast',
        element: Element.ELECTRIC,
        type: MoveType.SPECIAL,
        power: 90,
        accuracy: 100,
        powerPoints: 15,
        effects: { type: 'damage', paralyzeChance: 10 },
      },
    }),

    // Earth moves
    prisma.move.create({
      data: {
        name: 'Rock Throw',
        description: 'Throws rocks at the foe',
        element: Element.EARTH,
        type: MoveType.PHYSICAL,
        power: 50,
        accuracy: 90,
        powerPoints: 15,
        effects: { type: 'damage' },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Earthquake',
        description: 'A powerful ground shockwave',
        element: Element.EARTH,
        type: MoveType.PHYSICAL,
        power: 100,
        accuracy: 100,
        powerPoints: 10,
        effects: { type: 'damage' },
      },
    }),

    // Air moves
    prisma.move.create({
      data: {
        name: 'Gust',
        description: 'A gust of wind',
        element: Element.AIR,
        type: MoveType.SPECIAL,
        power: 40,
        accuracy: 100,
        powerPoints: 35,
        effects: { type: 'damage' },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Air Slash',
        description: 'A blade of air',
        element: Element.AIR,
        type: MoveType.SPECIAL,
        power: 75,
        accuracy: 95,
        powerPoints: 15,
        effects: { type: 'damage', flinchChance: 30 },
      },
    }),

    // Neutral moves
    prisma.move.create({
      data: {
        name: 'Tackle',
        description: 'A full-body charge',
        element: Element.NEUTRAL,
        type: MoveType.PHYSICAL,
        power: 40,
        accuracy: 100,
        powerPoints: 35,
        effects: { type: 'damage' },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Scratch',
        description: 'Scratches with claws',
        element: Element.NEUTRAL,
        type: MoveType.PHYSICAL,
        power: 40,
        accuracy: 100,
        powerPoints: 35,
        effects: { type: 'damage' },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Quick Attack',
        description: 'An extremely fast attack',
        element: Element.NEUTRAL,
        type: MoveType.PHYSICAL,
        power: 40,
        accuracy: 100,
        powerPoints: 30,
        priority: 1,
        effects: { type: 'damage' },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Hyper Beam',
        description: 'A devastating beam',
        element: Element.NEUTRAL,
        type: MoveType.SPECIAL,
        power: 150,
        accuracy: 90,
        powerPoints: 5,
        effects: { type: 'damage', rechargeRequired: true },
      },
    }),

    // Status moves
    prisma.move.create({
      data: {
        name: 'Growl',
        description: 'Lowers opponent attack',
        element: Element.NEUTRAL,
        type: MoveType.STATUS,
        power: 0,
        accuracy: 100,
        powerPoints: 40,
        effects: { type: 'stat_change', stat: 'atk', value: -1 },
      },
    }),
    prisma.move.create({
      data: {
        name: 'Tail Whip',
        description: 'Lowers opponent defense',
        element: Element.NEUTRAL,
        type: MoveType.STATUS,
        power: 0,
        accuracy: 100,
        powerPoints: 30,
        effects: { type: 'stat_change', stat: 'def', value: -1 },
      },
    }),
  ])

  // ============ CREATURES ============
  console.log('Creating creatures...')

  // Starter creatures
  const charmander = await prisma.creatureSpecies.create({
    data: {
      name: 'Charmander',
      description: 'A small fire-type Pokémon with a flame on its tail',
      element: Element.FIRE,
      rarity: Rarity.UNCOMMON,
      baseHp: 39,
      baseAtk: 52,
      baseDef: 43,
      baseSpd: 65,
      evolvesTo: 'Charmeleon',
      evolutionLevel: 16,
      spriteUrl: '/sprites/charmander.png',
      iconUrl: '/icons/charmander.png',
      isStarter: true,
      learnset: [
        { level: 1, moveId: moves[16].id }, // Scratch
        { level: 1, moveId: moves[0].id },  // Ember
        { level: 7, moveId: moves[17].id }, // Quick Attack
        { level: 13, moveId: moves[1].id }, // Flamethrower
        { level: 25, moveId: moves[2].id }, // Fire Blast
      ],
    },
  })

  const aquafin = await prisma.creatureSpecies.create({
    data: {
      name: 'Aquafin',
      description: 'A sleek water creature with powerful fins',
      element: Element.WATER,
      rarity: Rarity.UNCOMMON,
      baseHp: 50,
      baseAtk: 45,
      baseDef: 52,
      baseSpd: 53,
      evolvesTo: 'Tidalord',
      evolutionLevel: 16,
      spriteUrl: '/sprites/aquafin.png',
      iconUrl: '/icons/aquafin.png',
      isStarter: true,
      learnset: [
        { level: 1, moveId: moves[15].id }, // Tackle
        { level: 1, moveId: moves[3].id },  // Bubble
        { level: 7, moveId: moves[20].id }, // Tail Whip
        { level: 13, moveId: moves[4].id }, // Water Gun
        { level: 25, moveId: moves[5].id }, // Hydro Pump
      ],
    },
  })

  const leafox = await prisma.creatureSpecies.create({
    data: {
      name: 'Leafox',
      description: 'A cunning grass creature covered in leaves',
      element: Element.GRASS,
      rarity: Rarity.UNCOMMON,
      baseHp: 42,
      baseAtk: 48,
      baseDef: 50,
      baseSpd: 60,
      evolvesTo: 'Verdantail',
      evolutionLevel: 16,
      spriteUrl: '/sprites/leafox.png',
      iconUrl: '/icons/leafox.png',
      isStarter: true,
      learnset: [
        { level: 1, moveId: moves[15].id }, // Tackle
        { level: 1, moveId: moves[6].id },  // Vine Whip
        { level: 7, moveId: moves[19].id }, // Growl
        { level: 13, moveId: moves[7].id }, // Razor Leaf
        { level: 25, moveId: moves[8].id }, // Solar Beam
      ],
    },
  })

  const voltail = await prisma.creatureSpecies.create({
    data: {
      name: 'Voltail',
      description: 'An energetic electric creature with a charged tail',
      element: Element.ELECTRIC,
      rarity: Rarity.UNCOMMON,
      baseHp: 40,
      baseAtk: 50,
      baseDef: 40,
      baseSpd: 70,
      evolvesTo: 'Thunderex',
      evolutionLevel: 16,
      spriteUrl: '/sprites/voltail.png',
      iconUrl: '/icons/voltail.png',
      isStarter: true,
      learnset: [
        { level: 1, moveId: moves[17].id }, // Quick Attack
        { level: 1, moveId: moves[9].id },  // Thunder Shock
        { level: 7, moveId: moves[19].id }, // Growl
        { level: 13, moveId: moves[10].id }, // Thunderbolt
      ],
    },
  })

  const rockjaw = await prisma.creatureSpecies.create({
    data: {
      name: 'Rockjaw',
      description: 'A sturdy earth creature with a rock-hard jaw',
      element: Element.EARTH,
      rarity: Rarity.UNCOMMON,
      baseHp: 55,
      baseAtk: 55,
      baseDef: 60,
      baseSpd: 30,
      evolvesTo: 'Boulderfang',
      evolutionLevel: 18,
      spriteUrl: '/sprites/rockjaw.png',
      iconUrl: '/icons/rockjaw.png',
      isStarter: true,
      learnset: [
        { level: 1, moveId: moves[15].id }, // Tackle
        { level: 1, moveId: moves[11].id }, // Rock Throw
        { level: 9, moveId: moves[20].id }, // Tail Whip
        { level: 17, moveId: moves[12].id }, // Earthquake
      ],
    },
  })

  const zephyra = await prisma.creatureSpecies.create({
    data: {
      name: 'Zephyra',
      description: 'A graceful air creature that rides the wind',
      element: Element.AIR,
      rarity: Rarity.UNCOMMON,
      baseHp: 48,
      baseAtk: 42,
      baseDef: 45,
      baseSpd: 65,
      evolvesTo: 'Tempestra',
      evolutionLevel: 16,
      spriteUrl: '/sprites/zephyra.png',
      iconUrl: '/icons/zephyra.png',
      isStarter: true,
      learnset: [
        { level: 1, moveId: moves[17].id }, // Quick Attack
        { level: 1, moveId: moves[13].id }, // Gust
        { level: 7, moveId: moves[19].id }, // Growl
        { level: 13, moveId: moves[14].id }, // Air Slash
      ],
    },
  })

  // Evolutions
  await prisma.creatureSpecies.create({
    data: {
      name: 'Infernix',
      description: 'The evolved form of Emberwing, with massive fiery wings',
      element: Element.FIRE,
      rarity: Rarity.RARE,
      baseHp: 70,
      baseAtk: 80,
      baseDef: 65,
      baseSpd: 90,
      evolvesFrom: emberwing.id,
      spriteUrl: '/sprites/infernix.png',
      iconUrl: '/icons/infernix.png',
      learnset: [
        { level: 1, moveId: moves[16].id },
        { level: 1, moveId: moves[0].id },
        { level: 7, moveId: moves[17].id },
        { level: 13, moveId: moves[1].id },
        { level: 25, moveId: moves[2].id },
        { level: 32, moveId: moves[18].id }, // Hyper Beam
      ],
    },
  })

  await prisma.creatureSpecies.create({
    data: {
      name: 'Tidalord',
      description: 'The evolved form of Aquafin, master of the seas',
      element: Element.WATER,
      rarity: Rarity.RARE,
      baseHp: 80,
      baseAtk: 70,
      baseDef: 80,
      baseSpd: 75,
      evolvesFrom: aquafin.id,
      spriteUrl: '/sprites/tidalord.png',
      iconUrl: '/icons/tidalord.png',
      learnset: [
        { level: 1, moveId: moves[15].id },
        { level: 1, moveId: moves[3].id },
        { level: 7, moveId: moves[20].id },
        { level: 13, moveId: moves[4].id },
        { level: 25, moveId: moves[5].id },
        { level: 32, moveId: moves[18].id },
      ],
    },
  })

  await prisma.creatureSpecies.create({
    data: {
      name: 'Verdantail',
      description: 'The evolved form of Leafox, covered in lush foliage',
      element: Element.GRASS,
      rarity: Rarity.RARE,
      baseHp: 65,
      baseAtk: 75,
      baseDef: 75,
      baseSpd: 85,
      evolvesFrom: leafox.id,
      spriteUrl: '/sprites/verdantail.png',
      iconUrl: '/icons/verdantail.png',
      learnset: [
        { level: 1, moveId: moves[15].id },
        { level: 1, moveId: moves[6].id },
        { level: 7, moveId: moves[19].id },
        { level: 13, moveId: moves[7].id },
        { level: 25, moveId: moves[8].id },
      ],
    },
  })

  // Common wild creatures
  await prisma.creatureSpecies.create({
    data: {
      name: 'Beefly',
      description: 'A small flying insect creature',
      element: Element.AIR,
      rarity: Rarity.COMMON,
      baseHp: 35,
      baseAtk: 30,
      baseDef: 30,
      baseSpd: 55,
      spriteUrl: '/sprites/beefly.png',
      iconUrl: '/icons/beefly.png',
      learnset: [
        { level: 1, moveId: moves[15].id },
        { level: 1, moveId: moves[13].id },
      ],
    },
  })

  await prisma.creatureSpecies.create({
    data: {
      name: 'Sparkkit',
      description: 'A playful electric creature that sparks when happy',
      element: Element.ELECTRIC,
      rarity: Rarity.COMMON,
      baseHp: 38,
      baseAtk: 40,
      baseDef: 32,
      baseSpd: 60,
      spriteUrl: '/sprites/sparkkit.png',
      iconUrl: '/icons/sparkkit.png',
      learnset: [
        { level: 1, moveId: moves[17].id },
        { level: 1, moveId: moves[9].id },
      ],
    },
  })

  // ============ ITEMS ============
  console.log('Creating items...')

  const potion = await prisma.item.create({
    data: {
      name: 'Potion',
      description: 'Restores 20 HP',
      type: ItemType.HEALING,
      price: 50,
      effects: { type: 'heal', value: 20 },
      iconUrl: '/items/potion.png',
      rarity: Rarity.COMMON,
    },
  })

  const superPotion = await prisma.item.create({
    data: {
      name: 'Super Potion',
      description: 'Restores 50 HP',
      type: ItemType.HEALING,
      price: 120,
      effects: { type: 'heal', value: 50 },
      iconUrl: '/items/super-potion.png',
      rarity: Rarity.UNCOMMON,
    },
  })

  const hyperPotion = await prisma.item.create({
    data: {
      name: 'Hyper Potion',
      description: 'Restores 100 HP',
      type: ItemType.HEALING,
      price: 250,
      effects: { type: 'heal', value: 100 },
      iconUrl: '/items/hyper-potion.png',
      rarity: Rarity.RARE,
    },
  })

  const revive = await prisma.item.create({
    data: {
      name: 'Revive',
      description: 'Revives a fainted creature with 50% HP',
      type: ItemType.REVIVE,
      price: 200,
      effects: { type: 'revive', hpPercent: 50 },
      iconUrl: '/items/revive.png',
      rarity: Rarity.UNCOMMON,
    },
  })

  const fireStone = await prisma.item.create({
    data: {
      name: 'Fire Stone',
      description: 'Evolves certain Fire-type creatures',
      type: ItemType.EVOLUTION,
      price: 500,
      effects: { type: 'evolve', element: 'FIRE' },
      iconUrl: '/items/fire-stone.png',
      rarity: Rarity.RARE,
    },
  })

  const waterStone = await prisma.item.create({
    data: {
      name: 'Water Stone',
      description: 'Evolves certain Water-type creatures',
      type: ItemType.EVOLUTION,
      price: 500,
      effects: { type: 'evolve', element: 'WATER' },
      iconUrl: '/items/water-stone.png',
      rarity: Rarity.RARE,
    },
  })

  const leafStone = await prisma.item.create({
    data: {
      name: 'Leaf Stone',
      description: 'Evolves certain Grass-type creatures',
      type: ItemType.EVOLUTION,
      price: 500,
      effects: { type: 'evolve', element: 'GRASS' },
      iconUrl: '/items/leaf-stone.png',
      rarity: Rarity.RARE,
    },
  })

  const atkBoost = await prisma.item.create({
    data: {
      name: 'ATK Boost',
      description: 'Increases ATK by 10% for one battle',
      type: ItemType.BOOST,
      price: 300,
      effects: { type: 'boost', stat: 'atk', value: 10 },
      iconUrl: '/items/atk-boost.png',
      rarity: Rarity.UNCOMMON,
    },
  })

  const defBoost = await prisma.item.create({
    data: {
      name: 'DEF Boost',
      description: 'Increases DEF by 10% for one battle',
      type: ItemType.BOOST,
      price: 300,
      effects: { type: 'boost', stat: 'def', value: 10 },
      iconUrl: '/items/def-boost.png',
      rarity: Rarity.UNCOMMON,
    },
  })

  // ============ AREAS ============
  console.log('Creating areas...')

  const forestArea = await prisma.area.create({
    data: {
      name: 'Verdant Forest',
      description: 'A lush forest filled with grass and flying creatures',
      minLevel: 1,
      maxLevel: 10,
      iconUrl: '/areas/forest.png',
      backgroundUrl: '/areas/forest-bg.png',
      spawns: {
        create: [
          {
            speciesId: leafox.id,
            spawnRate: 0.3,
            minLevel: 2,
            maxLevel: 6,
          },
          {
            speciesId: (await prisma.creatureSpecies.findUnique({ where: { name: 'Beefly' } }))!.id,
            spawnRate: 0.5,
            minLevel: 1,
            maxLevel: 5,
          },
        ],
      },
      drops: {
        create: [
          {
            itemId: potion.id,
            dropRate: 0.3,
            minQuantity: 1,
            maxQuantity: 2,
          },
          {
            itemId: leafStone.id,
            dropRate: 0.05,
            minQuantity: 1,
            maxQuantity: 1,
          },
        ],
      },
    },
  })

  const lakeArea = await prisma.area.create({
    data: {
      name: 'Crystal Lake',
      description: 'A serene lake where water creatures dwell',
      minLevel: 5,
      maxLevel: 15,
      iconUrl: '/areas/lake.png',
      backgroundUrl: '/areas/lake-bg.png',
      spawns: {
        create: [
          {
            speciesId: aquafin.id,
            spawnRate: 0.4,
            minLevel: 5,
            maxLevel: 12,
          },
        ],
      },
      drops: {
        create: [
          {
            itemId: superPotion.id,
            dropRate: 0.2,
            minQuantity: 1,
            maxQuantity: 1,
          },
          {
            itemId: waterStone.id,
            dropRate: 0.08,
            minQuantity: 1,
            maxQuantity: 1,
          },
        ],
      },
    },
  })

  const caveArea = await prisma.area.create({
    data: {
      name: 'Thunder Cave',
      description: 'An electrified cave filled with electric and earth creatures',
      minLevel: 8,
      maxLevel: 18,
      iconUrl: '/areas/cave.png',
      backgroundUrl: '/areas/cave-bg.png',
      spawns: {
        create: [
          {
            speciesId: voltail.id,
            spawnRate: 0.25,
            minLevel: 8,
            maxLevel: 14,
          },
          {
            speciesId: rockjaw.id,
            spawnRate: 0.35,
            minLevel: 8,
            maxLevel: 15,
          },
          {
            speciesId: (await prisma.creatureSpecies.findUnique({ where: { name: 'Sparkkit' } }))!.id,
            spawnRate: 0.4,
            minLevel: 7,
            maxLevel: 12,
          },
        ],
      },
      drops: {
        create: [
          {
            itemId: hyperPotion.id,
            dropRate: 0.15,
            minQuantity: 1,
            maxQuantity: 1,
          },
          {
            itemId: revive.id,
            dropRate: 0.1,
            minQuantity: 1,
            maxQuantity: 1,
          },
        ],
      },
    },
  })

  // ============ ACHIEVEMENTS ============
  console.log('Creating achievements...')

  await prisma.achievement.create({
    data: {
      name: 'First Steps',
      description: 'Win your first battle',
      category: 'BATTLE',
      iconUrl: '/achievements/first-steps.png',
      requirements: { type: 'battles_won', value: 1 },
      rewards: { coins: 100 },
    },
  })

  await prisma.achievement.create({
    data: {
      name: 'Battle Veteran',
      description: 'Win 100 battles',
      category: 'BATTLE',
      iconUrl: '/achievements/veteran.png',
      requirements: { type: 'battles_won', value: 100 },
      rewards: { coins: 1000, items: [{ itemId: hyperPotion.id, quantity: 5 }] },
    },
  })

  await prisma.achievement.create({
    data: {
      name: 'Collector',
      description: 'Catch 10 different species',
      category: 'COLLECTION',
      iconUrl: '/achievements/collector.png',
      requirements: { type: 'species_caught', value: 10 },
      rewards: { coins: 500 },
    },
  })

  await prisma.achievement.create({
    data: {
      name: 'Evolution Master',
      description: 'Evolve 5 creatures',
      category: 'COLLECTION',
      iconUrl: '/achievements/evolution-master.png',
      requirements: { type: 'evolutions', value: 5 },
      rewards: { coins: 750 },
    },
  })

  await prisma.achievement.create({
    data: {
      name: 'Explorer',
      description: 'Visit all areas',
      category: 'EXPLORATION',
      iconUrl: '/achievements/explorer.png',
      requirements: { type: 'areas_visited', value: 5 },
      rewards: { coins: 300 },
    },
  })

  console.log('✅ Seed completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
