// Official Blood on the Clocktower Characters from Pocket Grimoire

export const PLAYER_DISTRIBUTION = {
  5: { townsfolk: 3, outsider: 0, minion: 1, demon: 1 },
  6: { townsfolk: 3, outsider: 1, minion: 1, demon: 1 },
  7: { townsfolk: 5, outsider: 0, minion: 1, demon: 1 },
  8: { townsfolk: 5, outsider: 1, minion: 1, demon: 1 },
  9: { townsfolk: 5, outsider: 2, minion: 1, demon: 1 },
  10: { townsfolk: 7, outsider: 0, minion: 2, demon: 1 },
  11: { townsfolk: 7, outsider: 1, minion: 2, demon: 1 },
  12: { townsfolk: 7, outsider: 2, minion: 2, demon: 1 },
  13: { townsfolk: 9, outsider: 0, minion: 3, demon: 1 },
  14: { townsfolk: 9, outsider: 1, minion: 3, demon: 1 },
  15: { townsfolk: 9, outsider: 2, minion: 3, demon: 1 }
};

export const EDITIONS = [
  { id: 'tb', name: 'Trouble Brewing', description: 'The classic edition, perfect for beginner and experienced Storytellers alike.' },
  { id: 'bmr', name: 'Bad Moon Rising', description: 'Death is everywhere! Heavy multi-kill mechanics and protected status manipulation.' },
  { id: 'snv', name: 'Sects & Violets', description: 'Madness and information chaos. High complexity and game-altering abilities.' }
];

export const ALL_ROLES = [
  {
    "id": "acrobat",
    "name": "Acrobat",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/acrobat.webp",
    "ability": "Each night*, choose a player: if they are or become drunk or poisoned tonight, you die.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 39,
    "otherNightPrompt": "The Acrobat chooses a player. If they are become drunk or poisoned tonight, the Acrobat player dies.",
    "reminders": [
      "Dead"
    ],
    "setup": false
  },
  {
    "id": "alchemist",
    "name": "Alchemist",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/alchemist.webp",
    "ability": "You have a Minion ability. When using this, the Storyteller may prompt you to choose differently.",
    "firstNight": 3,
    "firstNightPrompt": "Show the Alchemist a not-in-play Minion token",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "alhadikhia",
    "name": "Al-Hadikhia",
    "edition": "custom",
    "type": "demon",
    "image": "/img/icons/demon/alhadikhia.webp",
    "ability": "Each night*, you may choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 33,
    "otherNightPrompt": "The Al-Hadikhia chooses 3 players. Announce the first player, wake them to nod yes to live or shake head no to die, kill or resurrect accordingly, then put to sleep and announce the next player. If all 3 are alive after this, all 3 die.",
    "reminders": [
      "1",
      "2",
      "3",
      "Chose death",
      "Chose life"
    ],
    "setup": false
  },
  {
    "id": "alsaahir",
    "name": "Alsaahir",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/alsaahir.webp",
    "ability": "Each day, if you publicly guess which players are Minion(s) and which are Demon(s), good wins.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "Choose a player, that player dies.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "amnesiac",
    "name": "Amnesiac",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/amnesiac.webp",
    "ability": "You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are.",
    "firstNight": 12,
    "firstNightPrompt": "Decide the Amnesiac's entire ability. If the Amnesiac's ability causes them to wake tonight: Wake the Amnesiac and run their ability.",
    "otherNight": 5,
    "otherNightPrompt": "If the Amnesiac's ability causes them to wake tonight: Wake the Amnesiac and run their ability.",
    "reminders": [
      "?"
    ],
    "setup": false
  },
  {
    "id": "artist",
    "name": "Artist",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/artist.webp",
    "ability": "Once per game, during the day, privately ask the Storyteller any yes/no question.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "assassin",
    "name": "Assassin",
    "edition": "bmr",
    "type": "minion",
    "image": "/img/icons/minion/assassin.webp",
    "ability": "Once per game, at night*, choose a player: they die, even if for some reason they could not.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 37,
    "otherNightPrompt": "If the Assassin has not yet used their ability: The Assassin either shows the 'no' head signal, or points to a player. That player dies.",
    "reminders": [
      "Dead",
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "atheist",
    "name": "Atheist",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/atheist.webp",
    "ability": "The Storyteller can break the game rules, and if executed, good wins, even if you are dead. [No evil characters]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": true
  },
  {
    "id": "balloonist",
    "name": "Balloonist",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/balloonist.webp",
    "ability": "Each night, you learn a player of a different character type than last night. [+0 or +1 Outsider]",
    "firstNight": 44,
    "firstNightPrompt": "Choose a character type. Point to a player whose character is of that type. Place the Balloonist's Seen reminder next to that character.",
    "otherNight": 63,
    "otherNightPrompt": "Choose a character type that does not yet have a Seen reminder next to a character of that type. Point to a player whose character is of that type, if there are any. Place the Balloonist's Seen reminder next to that character.",
    "reminders": [
      "Seen Townsfolk",
      "Seen Outsider",
      "Seen Minion",
      "Seen Demon",
      "Seen Traveller"
    ],
    "setup": true
  },
  {
    "id": "banshee",
    "name": "Banshee",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/banshee.webp",
    "ability": "If the Demon kills you, all players learn this. From now on, you may nominate twice per day and vote twice per nomination.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 42,
    "otherNightPrompt": "Announce that the Banshee has died.",
    "reminders": [
      "Has Ability"
    ],
    "setup": false
  },
  {
    "id": "banxian",
    "name": "半仙",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/banxian.webp",
    "ability": "任何在夜晚使用自身能力选择你的其他玩家，会改为选中另一名邪恶玩家作为替代。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "baojun",
    "name": "暴君",
    "edition": "syyl",
    "type": "demon",
    "image": "/img/icons/demon/baojun.webp",
    "ability": "每个夜晚*，你可以选择至多两名玩家：他们死亡。你选择的玩家数量不能与上个夜晚死亡的玩家数量相同（超过二人时算作二人）。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 8420,
    "otherNightPrompt": "唤醒典狱长，让其选择至多两名玩家。在这些玩家角色标记旁放置“死亡”提示标记。如果暴君选择的玩家数量与上个夜晚死亡的玩家数量相同，摇头示意其重新选择",
    "reminders": [
      "死亡"
    ],
    "setup": false
  },
  {
    "id": "barber",
    "name": "Barber",
    "edition": "snv",
    "type": "outsider",
    "image": "/img/icons/outsider/barber.webp",
    "ability": "If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 40,
    "otherNightPrompt": "If the Barber died today: Wake the Demon. Show the 'This character selected you' card, then Barber token. The Demon either shows a 'no' head signal, or points to 2 players. If they chose players: Swap the character tokens. Wake each player. Show 'You are', then their new character token.",
    "reminders": [
      "Haircuts tonight"
    ],
    "setup": false
  },
  {
    "id": "baron",
    "name": "Baron",
    "edition": "tb",
    "type": "minion",
    "image": "/img/icons/minion/baron.webp",
    "ability": "There are extra Outsiders in play. [+2 Outsiders]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": true
  },
  {
    "id": "bianlianshi",
    "name": "变脸师",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/bianlianshi.webp",
    "ability": "每个白天，如果你“疯狂”地证明自己是一个善良角色（与之前不同），你会在当晚获得那个角色的能力，直到下个黄昏。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "疯狂"
    ],
    "setup": false
  },
  {
    "id": "bingbi",
    "name": "秉笔",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/bingbi.webp",
    "ability": "如果你在白天死亡，当晚你会得知一名善良玩家。如果你在夜晚死亡，当晚你会得知一名邪恶玩家。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 10310,
    "otherNightPrompt": "如果秉笔人在夜晚死去，唤醒他并指向一名邪恶玩家；如果秉笔在白天死去，唤醒他并指向一名善良玩家。随后让他重新入睡。",
    "reminders": [],
    "setup": false
  },
  {
    "id": "boffin",
    "name": "Boffin",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/boffin.webp",
    "ability": "The Demon (even if drunk or poisoned) has a not-in-play good character’s ability. You both know which.",
    "firstNight": 1,
    "firstNightPrompt": "Wake the Boffin and how them the token of the ability the Demon has. Put the Boffin back to sleep. Wake the Demon, show the Boffin token, then show the token of the good ability the Demon has.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "boomdandy",
    "name": "Boomdandy",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/boomdandy.webp",
    "ability": "If you are executed, all but 3 players die. After a 10 to 1 countdown, the player with the most players pointing at them, dies.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "bountyhunter",
    "name": "Bounty Hunter",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/bountyhunter.webp",
    "ability": "You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]",
    "firstNight": 45,
    "firstNightPrompt": "Point to 1 evil player. Wake the townsfolk who is evil and show them the 'You are' card and the thumbs down evil sign.",
    "otherNight": 65,
    "otherNightPrompt": "If the known evil player has died, point to another evil player. ",
    "reminders": [
      "Known"
    ],
    "setup": true
  },
  {
    "id": "butler",
    "name": "Butler",
    "edition": "tb",
    "type": "outsider",
    "image": "/img/icons/outsider/butler.webp",
    "ability": "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
    "firstNight": 38,
    "firstNightPrompt": "The Butler points to a player. Mark that player as 'Master'.",
    "otherNight": 55,
    "otherNightPrompt": "The Butler points to a player. Mark that player as 'Master'.",
    "reminders": [
      "Master"
    ],
    "setup": false
  },
  {
    "id": "cannibal",
    "name": "Cannibal",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/cannibal.webp",
    "ability": "You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Poisoned",
      "Died today"
    ],
    "setup": false
  },
  {
    "id": "cerenovus",
    "name": "Cerenovus",
    "edition": "snv",
    "type": "minion",
    "image": "/img/icons/minion/cerenovus.webp",
    "ability": "Each night, choose a player & a good character: they are “mad” they are this character tomorrow, or might be executed.",
    "firstNight": 25,
    "firstNightPrompt": "The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the 'This character selected you' card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.",
    "otherNight": 16,
    "otherNightPrompt": "The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the 'This character selected you' card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.",
    "reminders": [
      "Mad"
    ],
    "setup": false
  },
  {
    "id": "chambermaid",
    "name": "Chambermaid",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/chambermaid.webp",
    "ability": "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.",
    "firstNight": 49,
    "firstNightPrompt": "The Chambermaid points to two players. Show the number signal (0, 1, 2, …) for how many of those players wake tonight for their ability.",
    "otherNight": 69,
    "otherNightPrompt": "The Chambermaid points to two players. Show the number signal (0, 1, 2, …) for how many of those players wake tonight for their ability.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "chef",
    "name": "Chef",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/chef.webp",
    "ability": "You start knowing how many pairs of evil players there are.",
    "firstNight": 35,
    "firstNightPrompt": "Show the finger signal (0, 1, 2, …) for the number of pairs of neighbouring evil players.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "chimei",
    "name": "魑魅",
    "edition": "hdcs",
    "type": "minion",
    "image": "/img/icons/minion/chimei.webp",
    "ability": "镇民可能会被当作外来者，外来者可能会被当作镇民。恶魔可能会被当作爪牙。你可能会被当作恶魔。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "choirboy",
    "name": "Choirboy",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/choirboy.webp",
    "ability": "If the Demon kills the King, you learn which player is the Demon. [+the King]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 44,
    "otherNightPrompt": "If the King was killed by the Demon, wake the Choirboy and point to the Demon player.",
    "reminders": [],
    "setup": true
  },
  {
    "id": "chongfei",
    "name": "宠妃",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/chongfei.webp",
    "ability": "每局游戏限一次，说书人会在关于你的事情上打破规则。随后，你会秘密得知说书人为此做了什么。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "失去能力"
    ],
    "setup": false
  },
  {
    "id": "clockmaker",
    "name": "Clockmaker",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/clockmaker.webp",
    "ability": "You start knowing how many steps from the Demon to its nearest Minion.",
    "firstNight": 40,
    "firstNightPrompt": "Show the hand signal for the number (1, 2, 3, etc.) of places from Demon to closest Minion.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "courtier",
    "name": "Courtier",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/courtier.webp",
    "ability": "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.",
    "firstNight": 19,
    "firstNightPrompt": "The Courtier either shows a 'no' head signal, or points to a character on the sheet. If the Courtier used their ability: If that character is in play, that player is drunk.",
    "otherNight": 10,
    "otherNightPrompt": "Reduce the remaining number of days the marked player is poisoned. If the Courtier has not yet used their ability: The Courtier either shows a 'no' head signal, or points to a character on the sheet. If the Courtier used their ability: If that character is in play, that player is drunk.",
    "reminders": [
      "Drunk 3",
      "Drunk 2",
      "Drunk 1",
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "cultleader",
    "name": "Cult Leader",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/cultleader.webp",
    "ability": "Each night, you become the alignment of an alive neighbor. If all good players choose to join your cult, your team wins.",
    "firstNight": 46,
    "firstNightPrompt": "If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.",
    "otherNight": 66,
    "otherNightPrompt": "If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "dagengren",
    "name": "打更人",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/dagengren.webp",
    "ability": "每个夜晚*，你要猜测今晚第一个死亡的玩家与你的距离。如果你猜测正确，改为除你以外的所有玩家今晚不会死亡，但你可能会死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 13,
    "otherNightPrompt": "唤醒打更人，并让其猜测距离，以数字手势给出。在这两名玩家的角色标记旁放置“警惕”提示标记。在当晚首次有角色死亡时，如果是标记有“警惕”的玩家，那么当晚不会有除打更人外的任何人死亡。同时，如果说书人决定让打更人死亡，则在其角色标记旁放置“死亡”提示标记。在黎明时，移除所有“警惕”标记。",
    "reminders": [
      "警惕",
      "死亡"
    ],
    "setup": false
  },
  {
    "id": "damsel",
    "name": "Damsel",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/damsel.webp",
    "ability": "All Minions know a Damsel is in play. If a Minion publicly guesses you (once), your team loses.",
    "firstNight": 31,
    "firstNightPrompt": "Wake all the Minions, show them the 'This character selected you' card and the Damsel token.",
    "otherNight": 52,
    "otherNightPrompt": "If selected by the Huntsman, wake the Damsel, show 'You are' card and a not-in-play Townsfolk token.",
    "reminders": [
      "Guess used"
    ],
    "setup": false
  },
  {
    "id": "daoke",
    "name": "刀客",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/daoke.webp",
    "ability": "在你的首个夜晚，你会得知一个在场的爪牙角色。每局游戏限一次，你可以在白天公开选择一名玩家：如果他是你得知的角色，他死亡。",
    "firstNight": 9410,
    "firstNightPrompt": "在为首个夜晚做准备时，将刀客的“追杀”标记放置在一个爪牙角色标记旁。在首个夜晚，唤醒刀客。对他展示标记了“追杀”的爪牙角色标记。让刀客重新入睡。",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "追杀",
      "失去能力"
    ],
    "setup": false
  },
  {
    "id": "daoshi",
    "name": "道士",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/daoshi.webp",
    "ability": "每个夜晚*，你要选择一名玩家：如果他是恶魔，你死亡，并且当晚不会再有其他玩家死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 22,
    "otherNightPrompt": "唤醒道士，让其选择一名玩家。如果他选中了恶魔，在他的角色标记旁放置“死亡”提示标记。",
    "reminders": [
      "死亡"
    ],
    "setup": false
  },
  {
    "id": "devilsadvocate",
    "name": "Devil's Advocate",
    "edition": "bmr",
    "type": "minion",
    "image": "/img/icons/minion/devilsadvocate.webp",
    "ability": "Each night, choose a living player (different to last night): if executed tomorrow, they don't die.",
    "firstNight": 22,
    "firstNightPrompt": "The Devil's Advocate points to a living player. That player survives execution tomorrow.",
    "otherNight": 14,
    "otherNightPrompt": "The Devil's Advocate points to a living player, different from the previous night. That player survives execution tomorrow.",
    "reminders": [
      "Survives execution"
    ],
    "setup": false
  },
  {
    "id": "dianxiaoer",
    "name": "店小二",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/dianxiaoer.webp",
    "ability": "在你的首个夜晚，你会得知两名善良玩家。他们之中会有一人醉酒，即使你已死亡。",
    "firstNight": 44,
    "firstNightPrompt": "唤醒店小二，对他指向标记有店小二的“熟客”和“醉酒”提示标记的这两名玩家。",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "熟客",
      "醉酒"
    ],
    "setup": false
  },
  {
    "id": "dianyuzhang",
    "name": "典狱长",
    "edition": "hdcs",
    "type": "demon",
    "image": "/img/icons/demon/dianyuzhang.webp",
    "ability": "每个夜晚，你要选择一至三名玩家。如果明天白天其中之一被处决，其余玩家会在当晚死亡。否则，当晚他们之中会有一名玩家死亡。",
    "firstNight": 31,
    "firstNightPrompt": "唤醒典狱长，让其选择至多三名玩家。在这些玩家角色标记旁放置“囚禁”提示标记。",
    "otherNight": 33,
    "otherNightPrompt": "如果今天白天被处决的玩家标记有“囚禁”，则其他标记有囚禁的玩家死亡。否则，将其中一人标记为死亡。移除所有“囚禁”提示标记。唤醒典狱长，让其选择至多三名玩家。在这些玩家角色标记旁放置“囚禁”提示标记。",
    "reminders": [
      "囚禁",
      "死亡"
    ],
    "setup": false
  },
  {
    "id": "dreamer",
    "name": "Dreamer",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/dreamer.webp",
    "ability": "Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct.",
    "firstNight": 41,
    "firstNightPrompt": "The Dreamer points to a player. Show 1 good and 1 evil character token; one of these is correct.",
    "otherNight": 57,
    "otherNightPrompt": "The Dreamer points to a player. Show 1 good and 1 evil character token; one of these is correct.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "drunk",
    "name": "Drunk",
    "edition": "tb",
    "type": "outsider",
    "image": "/img/icons/outsider/drunk.webp",
    "ability": "You do not know you are the Drunk. You think you are a Townsfolk character, but you are not.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": true
  },
  {
    "id": "empath",
    "name": "Empath",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/empath.webp",
    "ability": "Each night, you learn how many of your 2 alive neighbors are evil.",
    "firstNight": 36,
    "firstNightPrompt": "Show the finger signal (0, 1, 2) for the number of evil alive neighbours of the Empath.",
    "otherNight": 53,
    "otherNightPrompt": "Show the finger signal (0, 1, 2) for the number of evil neighbours.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "engineer",
    "name": "Engineer",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/engineer.webp",
    "ability": "Once per game, at night, choose which Minions or which Demon is in play.",
    "firstNight": 13,
    "firstNightPrompt": "The Engineer shows a 'no' head signal, or points to a Demon or points to the relevant number of Minions. If the Engineer chose characters, replace the Demon or Minions with the choices, then wake the relevant players and show them the You are card and the relevant character tokens.",
    "otherNight": 6,
    "otherNightPrompt": "The Engineer shows a 'no' head signal, or points to a Demon or points to the relevant number of Minions. If the Engineer chose characters, replace the Demon or Minions with the choices, then wake the relevant players and show them the 'You are' card and the relevant character tokens.",
    "reminders": [
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "eviltwin",
    "name": "Evil Twin",
    "edition": "snv",
    "type": "minion",
    "image": "/img/icons/minion/eviltwin.webp",
    "ability": "You & an opposing player know each other. If the good player is executed, evil wins. Good can't win if you both live.",
    "firstNight": 23,
    "firstNightPrompt": "Wake the Evil Twin and their twin. Confirm that they have acknowledged each other. Point to the Evil Twin. Show their Evil Twin token to the twin player. Point to the twin. Show their character token to the Evil Twin player.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Twin"
    ],
    "setup": false
  },
  {
    "id": "exorcist",
    "name": "Exorcist",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/exorcist.webp",
    "ability": "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn't wake tonight.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 22,
    "otherNightPrompt": "The Exorcist points to a player, different from the previous night. If that player is the Demon: Wake the Demon. Show the Exorcist token. Point to the Exorcist. The Demon does not act tonight.",
    "reminders": [
      "Chosen"
    ],
    "setup": false
  },
  {
    "id": "fanggu",
    "name": "Fang Gu",
    "edition": "snv",
    "type": "demon",
    "image": "/img/icons/demon/fanggu.webp",
    "ability": "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 29,
    "otherNightPrompt": "The Fang Gu points to a player. That player dies. Or, if that player was an Outsider and there are no other Fang Gu in play: The Fang Gu dies instead of the chosen player. The chosen player is now an evil Fang Gu. Wake the new Fang Gu. Show the 'You are' card, then the Fang Gu token. Show the 'You are' card, then the thumb-down 'evil' hand sign.",
    "reminders": [
      "Dead",
      "Once"
    ],
    "setup": true
  },
  {
    "id": "fangshi",
    "name": "方士",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/fangshi.webp",
    "ability": "每局游戏限一次，在夜晚时*，你可以选择查看魔典的部分内容。死亡的玩家数量越多，你能看到的内容也就越多，最多能查看魔典的一半。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 69,
    "otherNightPrompt": "唤醒方士，如果他点头，让他查看魔典，但只展示部分内容。随后标记他“失去能力”。",
    "reminders": [
      "失去能力"
    ],
    "setup": false
  },
  {
    "id": "farmer",
    "name": "Farmer",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/farmer.webp",
    "ability": "When you die at night, an alive good player becomes a Farmer.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 46,
    "otherNightPrompt": "If a Farmer died tonight, choose another good player and make them the Farmer. Wake this player, show them the 'You are' card and the Farmer character token.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "fearmonger",
    "name": "Fearmonger",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/fearmonger.webp",
    "ability": "Each night, choose a player: if you nominate & execute them, their team loses. All players know if you choose a new player.",
    "firstNight": 26,
    "firstNightPrompt": "The Fearmonger points to a player. Place the Fear token next to that player and announce that a new player has been selected with the Fearmonger ability.",
    "otherNight": 18,
    "otherNightPrompt": "The Fearmonger points to a player. If different from the previous night, place the Fear token next to that player and announce that a new player has been selected with the Fearmonger ability.",
    "reminders": [
      "Fear"
    ],
    "setup": false
  },
  {
    "id": "fengshuishi",
    "name": "风水师",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/fengshuishi.webp",
    "ability": "每局游戏限一次，在夜晚时*，你可以选择除你以外的两名玩家：根据他们的阵营（相同/相反）得知他们之间距离（较近/较远）的那一侧玩家中是否有恶魔。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 54,
    "otherNightPrompt": "唤醒风水师。风水师要么摇头不使用能力，要么指向两名玩家。对其点头或摇头示意，随后在其角色标记旁放置“失去能力”提示标记。",
    "reminders": [
      "失去能力"
    ],
    "setup": false
  },
  {
    "id": "fisherman",
    "name": "Fisherman",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/fisherman.webp",
    "ability": "Once per game, during the day, visit the Storyteller for some advice to help your team win.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "flowergirl",
    "name": "Flowergirl",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/flowergirl.webp",
    "ability": "Each night*, you learn if a Demon voted today.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 58,
    "otherNightPrompt": "Nod 'yes' or shake head 'no' for whether the Demon voted today. Place the 'Demon not voted' marker (remove 'Demon voted', if any).",
    "reminders": [
      "Demon voted",
      "Demon not voted"
    ],
    "setup": false
  },
  {
    "id": "fool",
    "name": "Fool",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/fool.webp",
    "ability": "The 1st time you die, you don't.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "fortuneteller",
    "name": "Fortune Teller",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/fortuneteller.webp",
    "ability": "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.",
    "firstNight": 37,
    "firstNightPrompt": "The Fortune Teller points to two players. Give the head signal (nod yes, shake no) for whether one of those players is the Demon. ",
    "otherNight": 54,
    "otherNightPrompt": "The Fortune Teller points to two players. Show the head signal (nod 'yes', shake 'no') for whether one of those players is the Demon.",
    "reminders": [
      "Red herring"
    ],
    "setup": false
  },
  {
    "id": "gambler",
    "name": "Gambler",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/gambler.webp",
    "ability": "Each night*, choose a player & guess their character: if you guess wrong, you die.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 11,
    "otherNightPrompt": "The Gambler points to a player, and a character on their sheet. If incorrect, the Gambler dies.",
    "reminders": [
      "Dead"
    ],
    "setup": false
  },
  {
    "id": "ganshiren",
    "name": "赶尸人",
    "edition": "hdcs",
    "type": "minion",
    "image": "/img/icons/minion/ganshiren.webp",
    "ability": "与你邻近的两名镇民玩家会在其首次死亡时被当作仍然存活。[-1外来者]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "以为存活"
    ],
    "setup": true
  },
  {
    "id": "geling",
    "name": "歌伶",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/geling.webp",
    "ability": "每局游戏限一次，在白天时，你可以提议所有玩家观看你的演出，并从同意参加的玩家中选择你的观众。如果恶魔成为了观众，你会在当晚死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 62,
    "otherNightPrompt": "如果伶人在白天使用了能力，且恶魔成为了观众，标记伶人死亡。",
    "reminders": [
      "失去能力",
      "死亡",
      "观众"
    ],
    "setup": false
  },
  {
    "id": "general",
    "name": "General",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/general.webp",
    "ability": "Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither.",
    "firstNight": 48,
    "firstNightPrompt": "Show the General thumbs up for good winning, thumbs down for evil winning or thumb to the side for neither.",
    "otherNight": 68,
    "otherNightPrompt": "Show the General thumbs up for good winning, thumbs down for evil winning or thumb to the side for neither.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "goblin",
    "name": "Goblin",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/goblin.webp",
    "ability": "If you publicly claim to be the Goblin when nominated & are executed that day, your team wins.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Claimed"
    ],
    "setup": false
  },
  {
    "id": "godfather",
    "name": "Godfather",
    "edition": "bmr",
    "type": "minion",
    "image": "/img/icons/minion/godfather.webp",
    "ability": "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]",
    "firstNight": 21,
    "firstNightPrompt": "Show each of the Outsider tokens in play.",
    "otherNight": 38,
    "otherNightPrompt": "If an Outsider died today: The Godfather points to a player. That player dies.",
    "reminders": [
      "Died today",
      "Dead"
    ],
    "setup": true
  },
  {
    "id": "golem",
    "name": "Golem",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/golem.webp",
    "ability": "You may only nominate once per game. When you do, if the nominee is not the Demon, they die.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Can not nominate"
    ],
    "setup": false
  },
  {
    "id": "goon",
    "name": "Goon",
    "edition": "bmr",
    "type": "outsider",
    "image": "/img/icons/outsider/goon.webp",
    "ability": "Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Drunk"
    ],
    "setup": false
  },
  {
    "id": "gossip",
    "name": "Gossip",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/gossip.webp",
    "ability": "Each day, you may make a public statement. Tonight, if it was true, a player dies.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 47,
    "otherNightPrompt": "If the Gossip's public statement was true: Choose a player not protected from dying tonight. That player dies.",
    "reminders": [
      "Dead"
    ],
    "setup": false
  },
  {
    "id": "grandmother",
    "name": "Grandmother",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/grandmother.webp",
    "ability": "You start knowing a good player & their character. If the Demon kills them, you die too.",
    "firstNight": 39,
    "firstNightPrompt": "Show the marked character token. Point to the marked player.",
    "otherNight": 50,
    "otherNightPrompt": "If the Grandmother's grandchild was killed by the Demon tonight: The Grandmother dies.",
    "reminders": [
      "Grandchild"
    ],
    "setup": false
  },
  {
    "id": "gudiao",
    "name": "蛊雕",
    "edition": "hdcs",
    "type": "minion",
    "image": "/img/icons/minion/gudiao.webp",
    "ability": "蛊雕：每个夜晚，你要选择左或右：将你的飞行标记从当前位置移动到这个方向上的下一名存活善良玩家。他中毒且可能被当作邪恶阵营和爪牙角色，你会知道他原本的角色。",
    "firstNight": 17,
    "firstNightPrompt": "唤醒蛊雕，让其选择一个方向。将他的“中毒”标记移动至那个方向上的下一个存活玩家的角色标记旁。随后对他指向那名玩家，并展示“他是”提示标记和该玩家的角色标记。",
    "otherNight": 8,
    "otherNightPrompt": "唤醒蛊雕，让其选择一个方向。将他的“中毒”标记移动至那个方向上的下一个存活玩家的角色标记旁。随后对他指向那名玩家，并展示“他是”提示标记和该玩家的角色标记。",
    "reminders": [
      "中毒"
    ],
    "setup": false
  },
  {
    "id": "guhuoniao",
    "name": "姑获鸟",
    "edition": "syyl",
    "type": "demon",
    "image": "/img/icons/demon/guhuoniao.webp",
    "ability": "每个夜晚*，你要选择一名玩家：他死亡。你可能会拥有上一个死于处决的爪牙的能力。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 8430,
    "otherNightPrompt": "唤醒姑获鸟，让其选择一名玩家，在玩家角色标记旁放置“死亡”提示标记。",
    "reminders": [
      "死于处决"
    ],
    "setup": false
  },
  {
    "id": "harpy",
    "name": "Harpy",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/harpy.webp",
    "ability": "Each night, choose 2 players: tomorrow, the 1st player is mad that the 2nd is evil, or one or both might die.",
    "firstNight": 24,
    "firstNightPrompt": "Wake the Harpy; they point at one player, then another. Wake the 1st player the Harpy pointed to, show them the 'This character has selected you' card, show them the Harpy token, then point at the 2nd player the Harpy pointed to.",
    "otherNight": 14,
    "otherNightPrompt": "Wake the Harpy; they point at one player, then another. Wake the 1st player the Harpy pointed to, show them the 'This character has selected you' card, show them the Harpy token, then point at the 2nd player the Harpy pointed to.",
    "reminders": [
      "Mad",
      "2nd"
    ],
    "setup": false
  },
  {
    "id": "hatter",
    "name": "Hatter",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/hatter.webp",
    "ability": "If you died today or tonight, the Minion & Demon players may choose new Minion & Demon characters to be.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 40,
    "otherNightPrompt": "If the Hatter died today: Wake the Minions and Demon. Show them the 'This Character Selected You' info token, then the Hatter token. Each player either shakes their head no or points to another character of the same type as their current character.  If a second player would end up with the same character as another player, shake your head no and gesture for them to choose again. Put them to sleep. Change each player to the character they chose.",
    "reminders": [
      "Tea Party Tonight"
    ],
    "setup": false
  },
  {
    "id": "heretic",
    "name": "Heretic",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/heretic.webp",
    "ability": "Whoever wins, loses & whoever loses, wins, even if you are dead.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "hermit",
    "name": "Hermit",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/hermit.webp",
    "ability": "You have all Outsider abilities. [-0 or -1 Outsider]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "1",
      "2",
      "3"
    ],
    "setup": true
  },
  {
    "id": "heshang",
    "name": "和尚",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/heshang.webp",
    "ability": "每个夜晚，当有邪恶玩家的能力首次选择或影响与你邻近的存活玩家时，改为此次能力不生效，你会得知这一信息。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "已生效"
    ],
    "setup": false
  },
  {
    "id": "highpriestess",
    "name": "High Priestess",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/highpriestess.webp",
    "ability": "Each night, learn which player the Storyteller believes you should talk to most.",
    "firstNight": 50,
    "firstNightPrompt": "Point to a player.",
    "otherNight": 69,
    "otherNightPrompt": "Point to a player.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "huapi",
    "name": "画皮",
    "edition": "syyl",
    "type": "minion",
    "image": "/img/icons/minion/huapi.webp",
    "ability": "在你的首个夜晚，你要选择一名存活玩家：他死亡但会被当作存活。当他下一次死亡时，他重生，随后你重获能力。",
    "firstNight": 6310,
    "firstNightPrompt": "首个夜晚，唤醒画皮，让其选择一名玩家，该玩家进入“活尸”状态。在魔典中该玩家的角色标记上添加帷幕标记，和“以为存活”标记。但不要宣布该玩家已经死亡，也不要在城镇广场上将该玩家的生命标记翻面。",
    "otherNight": 8810,
    "otherNightPrompt": "如果画皮选择的玩家重生，在画皮的角色标记旁放置“重获能力”标记。每个夜晚，如果画皮有“重获能力”标记，唤醒画皮，让其选择一名玩家，该玩家进入“活尸”状态。在魔典中该玩家的角色标记上添加帷幕标记，和“以为存活”标记。但不要宣布该玩家已经死亡，也不要在城镇广场上将该玩家的生命标记翻面。",
    "reminders": [
      "以为存活",
      "重获能力"
    ],
    "setup": false
  },
  {
    "id": "humeiniang",
    "name": "狐媚娘",
    "edition": "hdcs",
    "type": "minion",
    "image": "/img/icons/minion/humeiniang.webp",
    "ability": "在你的首个夜晚，你要选择一名玩家：他会知道狐媚娘在场。如果你死于处决，当晚他转变为邪恶阵营。",
    "firstNight": 27,
    "firstNightPrompt": "唤醒狐媚娘，让她选择一名玩家。标记那名玩家“被魅惑”。随后唤醒那名玩家，对他展示“该角色的能力对你触发”和狐媚娘角色标记。",
    "otherNight": 6,
    "otherNightPrompt": "如果今日狐媚娘死于处决，且被魅惑的玩家为善良阵营，唤醒被魅惑的玩家，对他展示“你是”和朝下的大拇指。",
    "reminders": [
      "被魅惑"
    ],
    "setup": false
  },
  {
    "id": "hundun",
    "name": "混沌",
    "edition": "hdcs",
    "type": "demon",
    "image": "/img/icons/demon/hundun.webp",
    "ability": "每个夜晚*，你要选择一名玩家：他死亡。恶魔与爪牙互相不认识。当首次有爪牙死亡时，当晚他们会互相认识。[+1爪牙]",
    "firstNight": 0,
    "firstNightPrompt": "如果混沌在场，注意不要唤醒爪牙和恶魔让他们互相认识。恶魔仍然能够得知自己的三个伪装。",
    "otherNight": 0,
    "otherNightPrompt": "唤醒混沌，让他选择一名玩家，标记那名玩家死亡。如果混沌存活时有爪牙首次死亡，进行爪牙与恶魔的互认环节。",
    "reminders": [
      "死亡"
    ],
    "setup": true
  },
  {
    "id": "huntsman",
    "name": "Huntsman",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/huntsman.webp",
    "ability": "Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]",
    "firstNight": 30,
    "firstNightPrompt": "The Huntsman shakes their head 'no' or points to a player. If they point to the Damsel, wake that player, show the 'You are' card and a not-in-play character token.",
    "otherNight": 51,
    "otherNightPrompt": "The Huntsman shakes their head 'no' or points to a player. If they point to the Damsel, wake that player, show the 'You are' card and a not-in-play character token.",
    "reminders": [
      "No ability"
    ],
    "setup": true
  },
  {
    "id": "imp",
    "name": "Imp",
    "edition": "tb",
    "type": "demon",
    "image": "/img/icons/demon/imp.webp",
    "ability": "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 24,
    "otherNightPrompt": "The Imp points to a player. That player dies. If the Imp chose themselves: Replace the character of 1 alive minion with a spare Imp token. Show the 'You are' card, then the Imp token.",
    "reminders": [
      "Dead"
    ],
    "setup": false
  },
  {
    "id": "innkeeper",
    "name": "Innkeeper",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/innkeeper.webp",
    "ability": "Each night*, choose 2 players: they can't die tonight, but 1 is drunk until dusk.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 9,
    "otherNightPrompt": "The previously protected and drunk players lose those markers. The Innkeeper points to two players. Those players are protected. One is drunk.",
    "reminders": [
      "Protected",
      "Drunk"
    ],
    "setup": false
  },
  {
    "id": "investigator",
    "name": "Investigator",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/investigator.webp",
    "ability": "You start knowing that 1 of 2 players is a particular Minion.",
    "firstNight": 34,
    "firstNightPrompt": "Show the character token of a Minion in play. Point to two players, one of which is that character.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Minion",
      "Wrong"
    ],
    "setup": false
  },
  {
    "id": "jianning",
    "name": "奸佞",
    "edition": "hdcs",
    "type": "demon",
    "image": "/img/icons/demon/jianning.webp",
    "ability": "每个夜晚*，你要选择一名玩家：他死亡。如果你今天白天没有投票，今晚你可以行动两次。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 27,
    "otherNightPrompt": "唤醒奸佞，让其选择一名玩家。如果白天奸佞未被提名，改为让其选择两名玩家。标记他选择的玩家死亡。",
    "reminders": [
      "死亡",
      "未被提名",
      "已被提名"
    ],
    "setup": false
  },
  {
    "id": "jinweijun",
    "name": "禁卫军",
    "edition": "hdcs",
    "type": "minion",
    "image": "/img/icons/minion/jinweijun.webp",
    "ability": "“疯狂”地想要死亡的玩家可能会立即被处决。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "jinweijun2",
    "name": "禁卫军Ⅱ",
    "edition": "syyl",
    "type": "minion",
    "image": "/img/icons/minion/jinweijun2.webp",
    "ability": "在你的首个夜晚，你要选择存活或死亡。“疯狂”地想要这样做的玩家可能会立即被处决。",
    "firstNight": 5610,
    "firstNightPrompt": "唤醒禁卫军，给他展示“求生”和“求死”标记，让其选择一枚，并让他重新入睡。",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "求生",
      "求死"
    ],
    "setup": false
  },
  {
    "id": "jinyiwei",
    "name": "锦衣卫",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/jinyiwei.webp",
    "ability": "每个夜晚*，你要选择一名玩家：如果他在下个黄昏前死亡，你代替他死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 14,
    "otherNightPrompt": "移除上个夜晚放置的“保护”标记。唤醒锦衣卫，让其选择一名玩家。在该玩家角色标记旁放置“保护”提示标记。",
    "reminders": [
      "保护"
    ],
    "setup": false
  },
  {
    "id": "jiubao",
    "name": "酒保",
    "edition": "hdcs",
    "type": "outsider",
    "image": "/img/icons/outsider/jiubao.webp",
    "ability": "与你邻近的善良玩家之一醉酒，即使你已死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "醉酒"
    ],
    "setup": false
  },
  {
    "id": "juggler",
    "name": "Juggler",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/juggler.webp",
    "ability": "On your 1st day, publicly guess up to 5 players' characters. That night, you learn how many you got correct.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 62,
    "otherNightPrompt": "If today was the Juggler's first day: Show the hand signal for the number (0, 1, 2, etc.) of 'Correct' markers. Remove markers.",
    "reminders": [
      "Correct"
    ],
    "setup": false
  },
  {
    "id": "kazali",
    "name": "Kazali",
    "edition": "custom",
    "type": "demon",
    "image": "/img/icons/demon/kazali.webp",
    "ability": "Each night*, choose a player: they die. [You choose which players are which Minions. -? to +? Outsiders]",
    "firstNight": 2,
    "firstNightPrompt": "The Kazali points at a player and a Minion on the character sheet. Replace their old character token with the Minion token, show them the “You Are” info token then the Minion character token, and give a thumbs down. Repeat until the normal number of Minions exist. Put the Kazali to sleep.",
    "otherNight": 35,
    "otherNightPrompt": "The Kazali points to a player. That player dies.",
    "reminders": [
      "Dead"
    ],
    "setup": true
  },
  {
    "id": "king",
    "name": "King",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/king.webp",
    "ability": "Each night, if the dead equal or outnumber the living, you learn 1 alive character. The Demon knows you are the King.",
    "firstNight": 9,
    "firstNightPrompt": "Wake the Demon, show them the 'This character selected you' card, show the King token and point to the King player.",
    "otherNight": 64,
    "otherNightPrompt": "If there are more dead than living, show the King a character token of a living player.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "klutz",
    "name": "Klutz",
    "edition": "snv",
    "type": "outsider",
    "image": "/img/icons/outsider/klutz.webp",
    "ability": "When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "knight",
    "name": "Knight",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/knight.webp",
    "ability": "You start knowing 2 players that are not the Demon.",
    "firstNight": 42,
    "firstNightPrompt": "Point to 2 non-Demon players.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Know",
      "Know"
    ],
    "setup": false
  },
  {
    "id": "langzhong",
    "name": "郎中",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/langzhong.webp",
    "ability": "每个夜晚，你要选择一名玩家：你会得知一个与他能力相关的词语。",
    "firstNight": 35,
    "firstNightPrompt": "唤醒郎中，让其指向一名玩家。以不会被其他玩家察觉的形式对其提供与该玩家角色能力相关的一个词语。",
    "otherNight": 61,
    "otherNightPrompt": "唤醒郎中，让其指向一名玩家。以不会被其他玩家察觉的形式对其提供与该玩家角色能力相关的一个词语。",
    "reminders": [],
    "setup": false
  },
  {
    "id": "lankeren",
    "name": "烂柯人",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/lankeren.webp",
    "ability": "你不知道你的阵营（你有可能会属于邪恶阵营）。在你的首个夜晚，你会得知三名玩家，其中有且仅有两名玩家与你同一阵营。",
    "firstNight": 28,
    "firstNightPrompt": "决定烂柯人的阵营，并唤醒他，指向三名玩家。其中两名玩家与他同一阵营。",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "被得知"
    ],
    "setup": false
  },
  {
    "id": "legion",
    "name": "Legion",
    "edition": "custom",
    "type": "demon",
    "image": "/img/icons/demon/legion.webp",
    "ability": "Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 34,
    "otherNightPrompt": "Choose a player, that player dies.",
    "reminders": [
      "Dead",
      "About to die"
    ],
    "setup": true
  },
  {
    "id": "leviathan",
    "name": "Leviathan",
    "edition": "custom",
    "type": "demon",
    "image": "/img/icons/demon/leviathan.webp",
    "ability": "If more than 1 good player is executed, evil wins. All players know you are in play. After day 5, evil wins.",
    "firstNight": 52,
    "firstNightPrompt": "Place the Leviathan 'Day 1' marker. Announce 'The Leviathan is in play; this is Day 1.'",
    "otherNight": 72,
    "otherNightPrompt": "Change the Leviathan Day reminder for the next day.",
    "reminders": [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Good player executed"
    ],
    "setup": false
  },
  {
    "id": "librarian",
    "name": "Librarian",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/librarian.webp",
    "ability": "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)",
    "firstNight": 33,
    "firstNightPrompt": "Show the character token of an Outsider in play. Point to two players, one of which is that character.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Outsider",
      "Wrong"
    ],
    "setup": false
  },
  {
    "id": "lilmonsta",
    "name": "Lil' Monsta",
    "edition": "custom",
    "type": "demon",
    "image": "/img/icons/demon/lilmonsta.webp",
    "ability": "Each night, Minions choose who babysits Lil' Monsta & \"is the Demon\". Each night*, a player might die. [+1 Minion]",
    "firstNight": 16,
    "firstNightPrompt": "Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil' Monsta.",
    "otherNight": 36,
    "otherNightPrompt": "Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil' Monsta. Choose a player, that player dies.",
    "reminders": [],
    "setup": true
  },
  {
    "id": "limao",
    "name": "狸猫",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/limao.webp",
    "ability": "每个夜晚*，你要选择一名除你及旅行者以外的玩家：如果恶魔在今晚杀死了他，你和他交换角色，然后你醉酒。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 2510,
    "otherNightPrompt": "唤醒狸猫，让他指向一名玩家。让狸猫重新入睡。将“太子”标记放在对应玩家角色标记旁。 如果标记太子的玩家死亡且不是恶魔，在魔典中交换狸猫和太子的角色标记。在新的交换后的角色旁放置“醉酒”提示标记。唤醒新的狸猫并依次向他展示“你是”信息标记、狸猫的角色标记。让狸猫重新入睡。唤醒原来的狸猫并依次向他展示“你是”信息标记，“太子”的角色标记。",
    "reminders": [
      "太子",
      "醉酒"
    ],
    "setup": false
  },
  {
    "id": "lleech",
    "name": "Lleech",
    "edition": "custom",
    "type": "demon",
    "image": "/img/icons/demon/lleech.webp",
    "ability": "Each night*, choose a player: they die. You start by choosing a player: they are poisoned. You die if & only if they are dead.",
    "firstNight": 15,
    "firstNightPrompt": "The Lleech points to a player. Place the Poisoned reminder token.",
    "otherNight": 35,
    "otherNightPrompt": "The Lleech points to a player. That player dies.",
    "reminders": [
      "Dead",
      "Poisoned"
    ],
    "setup": false
  },
  {
    "id": "lordoftyphon",
    "name": "Lord of Typhon",
    "edition": "custom",
    "type": "demon",
    "image": "/img/icons/demon/lordoftyphon.webp",
    "ability": "Each night*, choose a player: they die. [Evil characters are in a line. You are in the middle. +1 Minion. -? to +? Outsiders]",
    "firstNight": 1,
    "firstNightPrompt": "Wake the players on either side of the Demon. Show them the 'You Are' card, the token of the Minion they now are, and a thumbs down to indicate they are evil.",
    "otherNight": 31,
    "otherNightPrompt": "The Lord of Typhon points to a player. That player dies.",
    "reminders": [
      "Dead"
    ],
    "setup": true
  },
  {
    "id": "lunatic",
    "name": "Lunatic",
    "edition": "bmr",
    "type": "outsider",
    "image": "/img/icons/outsider/lunatic.webp",
    "ability": "You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.",
    "firstNight": 7,
    "firstNightPrompt": "If 7 or more players: Show the Lunatic a number of arbitrary 'Minions', players equal to the number of Minions in play. Show 3 character tokens of arbitrary good characters. If the token received by the Lunatic is a Demon that would wake tonight: Allow the Lunatic to do the Demon actions. Place their 'attack' markers. Wake the Demon. Show the Demon's real character token. Show them the Lunatic player. If the Lunatic attacked players: Show the real demon each marked player. Remove any Lunatic 'attack' markers.",
    "otherNight": 21,
    "otherNightPrompt": "Allow the Lunatic to do the actions of the Demon. Place their 'attack' markers. If the Lunatic selected players: Wake the Demon. Show the 'attack' marker, then point to each marked player. Remove any Lunatic 'attack' markers.",
    "reminders": [
      "Attack 1",
      "Attack 2",
      "Attack 3"
    ],
    "setup": false
  },
  {
    "id": "lycanthrope",
    "name": "Lycanthrope",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/lycanthrope.webp",
    "ability": "Each night*, choose an alive player. If good, they die & the Demon doesn’t kill tonight. One good player registers as evil.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 23,
    "otherNightPrompt": "The Lycanthrope points to a living player: if good, they die and no one else can die tonight.",
    "reminders": [
      "Dead",
      "Faux Paw"
    ],
    "setup": false
  },
  {
    "id": "magician",
    "name": "Magician",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/magician.webp",
    "ability": "The Demon thinks you are a Minion. Minions think you are a Demon.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "marionette",
    "name": "Marionette",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/marionette.webp",
    "ability": "You think you are a good character, but you are not. The Demon knows who you are. [You neighbor the Demon]",
    "firstNight": 11,
    "firstNightPrompt": "Select one of the good players next to the Demon and place the Is the Marionette reminder token. Wake the Demon and show them the Marionette.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": true
  },
  {
    "id": "mastermind",
    "name": "Mastermind",
    "edition": "bmr",
    "type": "minion",
    "image": "/img/icons/minion/mastermind.webp",
    "ability": "If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "mathematician",
    "name": "Mathematician",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/mathematician.webp",
    "ability": "Each night, you learn how many players’ abilities worked abnormally (since dawn) due to another character's ability.",
    "firstNight": 50,
    "firstNightPrompt": "Show the hand signal for the number (0, 1, 2, etc.) of players whose ability malfunctioned due to other abilities.",
    "otherNight": 70,
    "otherNightPrompt": "Show the hand signal for the number (0, 1, 2, etc.) of players whose ability malfunctioned due to other abilities.",
    "reminders": [
      "Abnormal"
    ],
    "setup": false
  },
  {
    "id": "mayor",
    "name": "Mayor",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/mayor.webp",
    "ability": "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "mengpo",
    "name": "孟婆",
    "edition": "syyl",
    "type": "minion",
    "image": "/img/icons/minion/mengpo.webp",
    "ability": "每个夜晚*，你要选择一名玩家：如果他存活，那么他要选择让自己失去能力，或死亡并保留能力直到下个黄昏。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 8820,
    "otherNightPrompt": "唤醒孟婆，让其选择一名玩家，随后让孟婆闭眼。唤醒孟婆选择的玩家，依次向他展示“该角色的能力对你生效”信息标记、孟婆的角色标记，随后让其用点头或者摇头来表示想要生死。如果其点头，放置“失去能力”标记，如果其摇头，放置“保留能力”标记。",
    "reminders": [
      "保留能力",
      "失去能力"
    ],
    "setup": false
  },
  {
    "id": "mezepheles",
    "name": "Mezepheles",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/mezepheles.webp",
    "ability": "You start knowing a secret word. The 1st good player to say this word becomes evil that night.",
    "firstNight": 27,
    "firstNightPrompt": "Show the Mezepheles their secret word.",
    "otherNight": 19,
    "otherNightPrompt": "Wake the 1st good player that said the Mezepheles' secret word and show them the 'You are' card and the thumbs down evil signal.",
    "reminders": [
      "Turns evil",
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "minstrel",
    "name": "Minstrel",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/minstrel.webp",
    "ability": "When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Everyone drunk"
    ],
    "setup": false
  },
  {
    "id": "monk",
    "name": "Monk",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/monk.webp",
    "ability": "Each night*, choose a player (not yourself): they are safe from the Demon tonight.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 13,
    "otherNightPrompt": "The previously protected player is no longer protected. The Monk points to a player not themself. Mark that player 'Protected'.",
    "reminders": [
      "Protected"
    ],
    "setup": false
  },
  {
    "id": "moonchild",
    "name": "Moonchild",
    "edition": "bmr",
    "type": "outsider",
    "image": "/img/icons/outsider/moonchild.webp",
    "ability": "When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 49,
    "otherNightPrompt": "If the Moonchild used their ability to target a player today: If that player is good, they die.",
    "reminders": [
      "Dead"
    ],
    "setup": false
  },
  {
    "id": "mutant",
    "name": "Mutant",
    "edition": "snv",
    "type": "outsider",
    "image": "/img/icons/outsider/mutant.webp",
    "ability": "If you are “mad” about being an Outsider, you might be executed.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "niangjiushi",
    "name": "酿酒师",
    "edition": "hdcs",
    "type": "minion",
    "image": "/img/icons/minion/niangjiushi.webp",
    "ability": "每个夜晚，你要选择一个善良角色并给出相应的信息形式：该角色通过自身能力获取信息时，改为得知你给出的信息，直到下个黄昏。[-1外来者]",
    "firstNight": 18,
    "firstNightPrompt": "唤醒酿酒师，让其选择一个角色并给出该角色对应的信息形式。如果该角色在场，在对应的角色标记旁放置“微醺”提示标记。如有必要，记录下该信息形式作为备忘，但不要将这一信息展示给任何能查看魔典的玩家。",
    "otherNight": 9,
    "otherNightPrompt": "唤醒酿酒师，让其选择一个角色并给出该角色对应的信息形式。如果该角色在场，在对应的角色标记旁放置“微醺”提示标记。如有必要，记录下该信息形式作为备忘，但不要将这一信息展示给任何能查看魔典的玩家。",
    "reminders": [
      "微醺"
    ],
    "setup": true
  },
  {
    "id": "nichen",
    "name": "逆臣",
    "edition": "hdcs",
    "type": "outsider",
    "image": "/img/icons/outsider/nichen.webp",
    "ability": "在你的首个夜晚，你要选择除你以外的一名玩家：如果他先死于处决，你转变为邪恶；如果你先死于处决，他转变为邪恶。",
    "firstNight": 38,
    "firstNightPrompt": "唤醒逆臣，让其选择一名玩家。在该玩家的角色标记旁放置“不共戴天”提示标记。",
    "otherNight": 1,
    "otherNightPrompt": "如果逆臣或标记了“不共戴天”的玩家死于处决，唤醒两者之中的另一名玩家，告诉他变为邪恶阵营。",
    "reminders": [
      "不共戴天"
    ],
    "setup": false
  },
  {
    "id": "nightwatchman",
    "name": "Nightwatchman",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/nightwatchman.webp",
    "ability": "Once per game, at night, choose a player: they learn you are the Nightwatchman.",
    "firstNight": 46,
    "firstNightPrompt": "The Nightwatchman may point to a player. Wake that player, show the 'This character selected you' card and the Nightwatchman token, then point to the Nightwatchman player.",
    "otherNight": 66,
    "otherNightPrompt": "The Nightwatchman may point to a player. Wake that player, show the 'This character selected you' card and the Nightwatchman token, then point to the Nightwatchman player.",
    "reminders": [
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "noble",
    "name": "Noble",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/noble.webp",
    "ability": "You start knowing 3 players, 1 and only 1 of which is evil.",
    "firstNight": 43,
    "firstNightPrompt": "Point to 3 players including one evil player, in no particular order.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Seen"
    ],
    "setup": false
  },
  {
    "id": "nodashii",
    "name": "No Dashii",
    "edition": "snv",
    "type": "demon",
    "image": "/img/icons/demon/nodashii.webp",
    "ability": "Each night*, choose a player: they die. Your 2 Townsfolk neighbors are poisoned.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 30,
    "otherNightPrompt": "The No Dashii points to a player. That player dies.",
    "reminders": [
      "Dead",
      "Poisoned"
    ],
    "setup": false
  },
  {
    "id": "ogre",
    "name": "Ogre",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/ogre.webp",
    "ability": "On your 1st night, choose a player (not yourself): you become their alignment (you don't know which) even if drunk or poisoned.",
    "firstNight": 49,
    "firstNightPrompt": "The Ogre points to a player (not themselves) and becomes their alignment.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Friend"
    ],
    "setup": false
  },
  {
    "id": "ojo",
    "name": "Ojo",
    "edition": "custom",
    "type": "demon",
    "image": "/img/icons/demon/ojo.webp",
    "ability": "Each night*, choose a character: they die. If they are not in play, the Storyteller chooses who dies.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 32,
    "otherNightPrompt": "The Ojo points to a character on the sheet; if in play, that player dies. If it is not in play, the Storyteller chooses who dies instead.",
    "reminders": [
      "Dead"
    ],
    "setup": false
  },
  {
    "id": "oracle",
    "name": "Oracle",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/oracle.webp",
    "ability": "Each night*, you learn how many dead players are evil.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 60,
    "otherNightPrompt": "Show the hand signal for the number (0, 1, 2, etc.) of dead evil players.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "organgrinder",
    "name": "Organ Grinder",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/organgrinder.webp",
    "ability": "All players keep their eyes closed when voting and the vote tally is secret. Each night, choose if you are drunk until dusk.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Drunk",
      "About to die"
    ],
    "setup": false
  },
  {
    "id": "pacifist",
    "name": "Pacifist",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/pacifist.webp",
    "ability": "Executed good players might not die.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "panguan",
    "name": "判官",
    "edition": "hdcs",
    "type": "minion",
    "image": "/img/icons/minion/panguan.webp",
    "ability": "在你的首个夜晚，你会得知一个关键词。在白天时（最后一天除外）有邪恶玩家首次说出该关键词会使得当前白天阶段立即结束。",
    "firstNight": 0,
    "firstNightPrompt": "唤醒判官，并对其展示关键词。",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "失去能力"
    ],
    "setup": false
  },
  {
    "id": "philosopher",
    "name": "Philosopher",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/philosopher.webp",
    "ability": "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.",
    "firstNight": 2,
    "firstNightPrompt": "The Philosopher either shows a 'no' head signal, or points to a good character on their sheet. If they chose a character: Swap the out-of-play character token with the Philosopher token. Or, if the character is in play, place the drunk marker by that player and the Not the Philosopher token by the Philosopher.",
    "otherNight": 2,
    "otherNightPrompt": "If the Philosopher has not used their ability: the Philosopher either shows a 'no' head signal, or points to a good character on their sheet. If they chose a character: Swap the out-of-play character token with the Philosopher token. Or, if the character is in play, place the drunk marker by that player and the Not the Philosopher token by the Philosopher.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "pithag",
    "name": "Pit-Hag",
    "edition": "snv",
    "type": "minion",
    "image": "/img/icons/minion/pithag.webp",
    "ability": "Each night*, choose a player & a character they become (if not in play). If a Demon is made, deaths tonight are arbitrary.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 17,
    "otherNightPrompt": "The Pit-Hag points to a player and a character on the sheet. If this character is not in play, wake that player and show them the 'You are' card and the relevant character token. If the character is in play, nothing happens.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "pixie",
    "name": "Pixie",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/pixie.webp",
    "ability": "You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die.",
    "firstNight": 29,
    "firstNightPrompt": "Show the Pixie 1 in-play Townsfolk character token.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Mad",
      "Has ability"
    ],
    "setup": false
  },
  {
    "id": "plaguedoctor",
    "name": "Plague Doctor",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/plaguedoctor.webp",
    "ability": "When you die, the Storyteller gains a Minion ability.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Storyteller Ability"
    ],
    "setup": false
  },
  {
    "id": "po",
    "name": "Po",
    "edition": "bmr",
    "type": "demon",
    "image": "/img/icons/demon/po.webp",
    "ability": "Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 28,
    "otherNightPrompt": "If the Po chose no-one the previous night: The Po points to three players. Otherwise: The Po either shows the 'no' head signal , or points to a player. Chosen players die",
    "reminders": [
      "Dead",
      "3 attacks"
    ],
    "setup": false
  },
  {
    "id": "poisoner",
    "name": "Poisoner",
    "edition": "tb",
    "type": "minion",
    "image": "/img/icons/minion/poisoner.webp",
    "ability": "Each night, choose a player: they are poisoned tonight and tomorrow day.",
    "firstNight": 17,
    "firstNightPrompt": "The Poisoner points to a player. That player is poisoned.",
    "otherNight": 8,
    "otherNightPrompt": "The previously poisoned player is no longer poisoned. The Poisoner points to a player. That player is poisoned.",
    "reminders": [
      "Poisoned"
    ],
    "setup": false
  },
  {
    "id": "politician",
    "name": "Politician",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/politician.webp",
    "ability": "If you were the player most responsible for your team losing, you change alignment & win, even if dead.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "poppygrower",
    "name": "Poppy Grower",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/poppygrower.webp",
    "ability": "Minions & Demons do not know each other. If you die, they learn who each other are that night.",
    "firstNight": 4,
    "firstNightPrompt": "Do not inform the Demon/Minions who each other are",
    "otherNight": 3,
    "otherNightPrompt": "If the Poppy Grower has died, show the Minions/Demon who each other are.",
    "reminders": [
      "Evil wakes"
    ],
    "setup": false
  },
  {
    "id": "preacher",
    "name": "Preacher",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/preacher.webp",
    "ability": "Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability.",
    "firstNight": 14,
    "firstNightPrompt": "The Preacher chooses a player. If a Minion is chosen, wake the Minion and show the 'This character selected you' card and then the Preacher token.",
    "otherNight": 7,
    "otherNightPrompt": "The Preacher chooses a player. If a Minion is chosen, wake the Minion and show the 'This character selected you' card and then the Preacher token.",
    "reminders": [
      "At a sermon"
    ],
    "setup": false
  },
  {
    "id": "princess",
    "name": "Princess",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/princess.webp",
    "ability": "On your 1st day, if you nominated & executed a player, the Demon doesn't kill tonight.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 34,
    "otherNightPrompt": "If it was the Princess' first day today, and they nominated and executed a player, the Demon doesn't kill.",
    "reminders": [
      "Doesn't Kill"
    ],
    "setup": false
  },
  {
    "id": "professor",
    "name": "Professor",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/professor.webp",
    "ability": "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 45,
    "otherNightPrompt": "If the Professor has not used their ability: The Professor either shakes their head no, or points to a player. If that player is a Townsfolk, they are now alive.",
    "reminders": [
      "Alive",
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "psychopath",
    "name": "Psychopath",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/psychopath.webp",
    "ability": "Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "pukka",
    "name": "Pukka",
    "edition": "bmr",
    "type": "demon",
    "image": "/img/icons/demon/pukka.webp",
    "ability": "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.",
    "firstNight": 28,
    "firstNightPrompt": "The Pukka points to a player. That player is poisoned.",
    "otherNight": 26,
    "otherNightPrompt": "The Pukka points to a player. That player is poisoned. The previously poisoned player dies. ",
    "reminders": [
      "Poisoned",
      "Dead"
    ],
    "setup": false
  },
  {
    "id": "puzzlemaster",
    "name": "Puzzlemaster",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/puzzlemaster.webp",
    "ability": "1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Drunk",
      "Guess used"
    ],
    "setup": false
  },
  {
    "id": "qianke",
    "name": "掮客",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/qianke.webp",
    "ability": "每个夜晚，你要选择两名存活玩家：如果他们阵营相同，今晚任何玩家使用自身能力选择他们之一作为目标时，改为选中另一名玩家。",
    "firstNight": 4,
    "firstNightPrompt": "唤醒车夫，让他指向两名存活玩家。如果这两名玩家阵营相同，在这些玩家的角色标记旁放置“熟客”提示标记。",
    "otherNight": 2,
    "otherNightPrompt": "移除上个夜晚放置的“熟客”标记。唤醒车夫，让他指向两名存活玩家。如果这两名玩家阵营相同，在这些玩家的角色标记旁放置“熟客”提示标记。",
    "reminders": [
      "熟客"
    ],
    "setup": false
  },
  {
    "id": "qintianjian",
    "name": "钦天监",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/qintianjian.webp",
    "ability": "在你的首个夜晚，你会得知离你最近的邪恶玩家位于你的哪一侧（左/右/相同）。如果与你邻近的玩家中有邪恶阵营，你会得知错误信息。",
    "firstNight": 49,
    "firstNightPrompt": "唤醒占星者，对其用拇指指向其左侧或右侧示意。如果两侧邪恶玩家与他距离相同，拇指朝下示意。",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "qiongqi",
    "name": "穷奇",
    "edition": "hdcs",
    "type": "demon",
    "image": "/img/icons/demon/qiongqi.webp",
    "ability": "每个夜晚*，你要选择一名玩家：他死亡。所有的外来者都可能会被当作邪恶阵营、爪牙角色或恶魔角色。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 31,
    "otherNightPrompt": "唤醒穷奇，让其选择一名玩家。标记那名玩家死亡。",
    "reminders": [
      "死亡"
    ],
    "setup": false
  },
  {
    "id": "ranfangfangzhu",
    "name": "染坊坊主",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/ranfangfangzhu.webp",
    "ability": "如果你在夜晚死亡，恶魔的能力变成“每个夜晚*，可能会有一名玩家死亡。”",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "沉默"
    ],
    "setup": false
  },
  {
    "id": "ravenkeeper",
    "name": "Ravenkeeper",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/ravenkeeper.webp",
    "ability": "If you die at night, you are woken to choose a player: you learn their character.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 42,
    "otherNightPrompt": "If the Ravenkeeper died tonight: The Ravenkeeper points to a player. Show that player's character token.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "recluse",
    "name": "Recluse",
    "edition": "tb",
    "type": "outsider",
    "image": "/img/icons/outsider/recluse.webp",
    "ability": "You might register as evil & as a Minion or Demon, even if dead.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "riot",
    "name": "Riot",
    "edition": "custom",
    "type": "demon",
    "image": "/img/icons/demon/riot.webp",
    "ability": "On day 3, Minions become Riot & nominees die but nominate an alive player immediately. This must happen.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": true
  },
  {
    "id": "rulianshi",
    "name": "入殓师",
    "edition": "hdcs",
    "type": "outsider",
    "image": "/img/icons/outsider/rulianshi.webp",
    "ability": "如果你提名并处决了恶魔，你会变成邪恶的恶魔。当剩余存活玩家小于等于四人时（旅行者除外），你失去能力。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 20,
    "otherNightPrompt": "如果白天入殓师提名了恶魔且恶魔被处决，唤醒他，并对他展示“你是”提示标记和恶魔角色标记。",
    "reminders": [
      "是恶魔"
    ],
    "setup": false
  },
  {
    "id": "sage",
    "name": "Sage",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/sage.webp",
    "ability": "If the Demon kills you, you learn that it is 1 of 2 players.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 43,
    "otherNightPrompt": "If the Sage was killed by a Demon: Point to two players, one of which is that Demon.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "sailor",
    "name": "Sailor",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/sailor.webp",
    "ability": "Each night, choose an alive player: either you or they are drunk until dusk. You can't die.",
    "firstNight": 10,
    "firstNightPrompt": "The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.",
    "otherNight": 4,
    "otherNightPrompt": "The previously drunk player is no longer drunk. The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.",
    "reminders": [
      "Drunk"
    ],
    "setup": false
  },
  {
    "id": "saint",
    "name": "Saint",
    "edition": "tb",
    "type": "outsider",
    "image": "/img/icons/outsider/saint.webp",
    "ability": "If you die by execution, your team loses.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "savant",
    "name": "Savant",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/savant.webp",
    "ability": "Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "scarletwoman",
    "name": "Scarlet Woman",
    "edition": "tb",
    "type": "minion",
    "image": "/img/icons/minion/scarletwoman.webp",
    "ability": "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don't count.)",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 20,
    "otherNightPrompt": "If the Scarlet Woman became the Demon today: Show the 'You are' card, then the demon token.",
    "reminders": [
      "Demon"
    ],
    "setup": false
  },
  {
    "id": "seamstress",
    "name": "Seamstress",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/seamstress.webp",
    "ability": "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.",
    "firstNight": 42,
    "firstNightPrompt": "The Seamstress either shows a 'no' head signal, or points to two other players. If the Seamstress chose players , nod 'yes' or shake 'no' for whether they are of same alignment.",
    "otherNight": 61,
    "otherNightPrompt": "If the Seamstress has not yet used their ability: the Seamstress either shows a 'no' head signal, or points to two other players. If the Seamstress chose players , nod 'yes' or shake 'no' for whether they are of same alignment.",
    "reminders": [
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "shabaloth",
    "name": "Shabaloth",
    "edition": "bmr",
    "type": "demon",
    "image": "/img/icons/demon/shabaloth.webp",
    "ability": "Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 27,
    "otherNightPrompt": "One player that the Shabaloth chose the previous night might be resurrected. The Shabaloth points to two players. Those players die.",
    "reminders": [
      "Dead",
      "Alive"
    ],
    "setup": false
  },
  {
    "id": "shaxing",
    "name": "煞星",
    "edition": "hdcs",
    "type": "outsider",
    "image": "/img/icons/outsider/shaxing.webp",
    "ability": "如果你死亡，当晚与你邻近的存活玩家之一可能会死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 39,
    "otherNightPrompt": "如果天花病人死亡，将与其邻近的存活善良玩家之一标记为死亡。",
    "reminders": [
      "死亡"
    ],
    "setup": false
  },
  {
    "id": "shiguan",
    "name": "史官",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/shiguan.webp",
    "ability": "每个夜晚*，如果白天有玩家死于处决，你会得知存活镇民的数量。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 13110,
    "otherNightPrompt": "如果死亡玩家人数大于存活玩家，唤醒史官并展示数字手势来告诉他存活镇民数量。",
    "reminders": [],
    "setup": false
  },
  {
    "id": "shijie",
    "name": "使节",
    "edition": "hdcs",
    "type": "outsider",
    "image": "/img/icons/outsider/shijie.webp",
    "ability": "每个夜晚限一次，所有玩家在使用自身能力选择邪恶玩家时会改为选中你，即使你已死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "已生效"
    ],
    "setup": false
  },
  {
    "id": "shimengmo",
    "name": "食梦貘",
    "edition": "hdcs",
    "type": "demon",
    "image": "/img/icons/demon/shimengmo.webp",
    "ability": "每个夜晚*，你要选择一名玩家：他死亡。使用自身能力选择你的玩家会改为选中自己。[-1外来者]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 30,
    "otherNightPrompt": "唤醒食梦貘，让其选择一名玩家。标记那名玩家死亡。",
    "reminders": [
      "死亡"
    ],
    "setup": true
  },
  {
    "id": "shugenja",
    "name": "Shugenja",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/shugenja.webp",
    "ability": "You start knowing if your closest evil player is clockwise or anti-clockwise. If equidistant, this info is arbitrary.",
    "firstNight": 33,
    "firstNightPrompt": "Wake the Shugenja; point horizontally in the direction of the closest evil player. If the two closest evil players are equidistant, point your finger horizontally in either direction.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "shusheng",
    "name": "书生",
    "edition": "hdcs",
    "type": "outsider",
    "image": "/img/icons/outsider/shusheng.webp",
    "ability": "恶魔知道你在场。每局游戏限一次，恶魔可以拜访说书人并猜测谁是书生。如果恶魔猜测正确，即使你已死亡，当晚该恶魔可以选择一名玩家：他死亡。",
    "firstNight": 7,
    "firstNightPrompt": "唤醒恶魔，并对他展示“该角色的能力对你触发”提示标记与书生角色标记。",
    "otherNight": 23,
    "otherNightPrompt": "如果白天恶魔成功猜中了书生是谁，唤醒那个恶魔，让其选择一名玩家。标记那名玩家死亡。",
    "reminders": [
      "已猜测",
      "猜测正确",
      "死亡"
    ],
    "setup": false
  },
  {
    "id": "shutong",
    "name": "书童",
    "edition": "syyl",
    "type": "outsider",
    "image": "/img/icons/outsider/shutong.webp",
    "ability": "在你的首个夜晚，你要选择除你以外的一名玩家：除首个夜晚以外，当他被邪恶玩家的能力选择或影响时，你会在当晚死亡。",
    "firstNight": 7430,
    "firstNightPrompt": "唤醒书童，让其选择一名玩家，在其选择的玩家标记旁放置“选择”。",
    "otherNight": 8910,
    "otherNightPrompt": "如果标记有“选择”的玩家被邪恶玩家的能力选择或影响时，在书童旁放置“死亡”标记。",
    "reminders": [
      "选择",
      "死亡"
    ],
    "setup": false
  },
  {
    "id": "slayer",
    "name": "Slayer",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/slayer.webp",
    "ability": "Once per game, during the day, publicly choose a player: if they are the Demon, they die.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "snakecharmer",
    "name": "Snake Charmer",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/snakecharmer.webp",
    "ability": "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.",
    "firstNight": 20,
    "firstNightPrompt": "The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.",
    "otherNight": 12,
    "otherNightPrompt": "The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.",
    "reminders": [
      "Poisoned"
    ],
    "setup": false
  },
  {
    "id": "snitch",
    "name": "Snitch",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/snitch.webp",
    "ability": "Each Minion gets 3 bluffs.",
    "firstNight": 6,
    "firstNightPrompt": "After Minion info wake each Minion and show them three not-in-play character tokens. These may be the same or different to each other and the ones shown to the Demon.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "soldier",
    "name": "Soldier",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/soldier.webp",
    "ability": "You are safe from the Demon.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "spy",
    "name": "Spy",
    "edition": "tb",
    "type": "minion",
    "image": "/img/icons/minion/spy.webp",
    "ability": "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
    "firstNight": 47,
    "firstNightPrompt": "Show the Grimoire to the Spy for as long as they need.",
    "otherNight": 67,
    "otherNightPrompt": "Show the Grimoire to the Spy for as long as they need.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "steward",
    "name": "Steward",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/steward.webp",
    "ability": "You start knowing 1 good player.",
    "firstNight": 41,
    "firstNightPrompt": "Point to 1 good player.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Know"
    ],
    "setup": false
  },
  {
    "id": "summoner",
    "name": "Summoner",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/summoner.webp",
    "ability": "You get 3 bluffs. On the 3rd night, choose a player: they become an evil Demon of your choice. [No Demon]",
    "firstNight": 8,
    "firstNightPrompt": "Show the 'These characters are not in play' card. Show 3 character tokens of good characters not in play.",
    "otherNight": 19,
    "otherNightPrompt": "If it is the 3rd night, wake the Summoner. They point to a player and a Demon on the character sheet - that player becomes that Demon.",
    "reminders": [
      "Night 1",
      "Night 2",
      "Night 3"
    ],
    "setup": true
  },
  {
    "id": "sweetheart",
    "name": "Sweetheart",
    "edition": "snv",
    "type": "outsider",
    "image": "/img/icons/outsider/sweetheart.webp",
    "ability": "When you die, 1 player is drunk from now on.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 41,
    "otherNightPrompt": "Choose a player that is drunk.",
    "reminders": [
      "Drunk"
    ],
    "setup": false
  },
  {
    "id": "taotie",
    "name": "饕餮",
    "edition": "hdcs",
    "type": "demon",
    "image": "/img/icons/demon/taotie.webp",
    "ability": "每个夜晚*，你要选择任意数量的非旅行者玩家或一名旅行者玩家：如果他们的角色类型均不相同，他们死亡。[+1外来者]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 28,
    "otherNightPrompt": "唤醒饕餮，让其选择任意数量的玩家。如果这些玩家的角色类型均不相同，标记这些玩家死亡。",
    "reminders": [
      "死亡"
    ],
    "setup": true
  },
  {
    "id": "taowu",
    "name": "梼杌",
    "edition": "hdcs",
    "type": "demon",
    "image": "/img/icons/demon/taowu.webp",
    "ability": "每个夜晚*，你要选择一名玩家：他死亡。每个夜晚限一次，如果你以这种方式杀死了一名外来者，当晚你可以再次行动。[+1外来者]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 32,
    "otherNightPrompt": "唤醒梼杌，让其选择一名玩家，并标记那名玩家死亡。如果梼杌成功杀死了一名外来者，让他再选择一名玩家，标记那名玩家死亡。",
    "reminders": [
      "死亡"
    ],
    "setup": true
  },
  {
    "id": "tealady",
    "name": "Tea Lady",
    "edition": "bmr",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/tealady.webp",
    "ability": "If both your alive neighbors are good, they can't die.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Can not die"
    ],
    "setup": false
  },
  {
    "id": "tinker",
    "name": "Tinker",
    "edition": "bmr",
    "type": "outsider",
    "image": "/img/icons/outsider/tinker.webp",
    "ability": "You might die at any time.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 48,
    "otherNightPrompt": "The Tinker might die.",
    "reminders": [
      "Dead"
    ],
    "setup": false
  },
  {
    "id": "tixingguan",
    "name": "提刑官",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/tixingguan.webp",
    "ability": "在你首次提名玩家后，你会在当晚得知他的角色。外来者会被你的能力当作爪牙或恶魔角色。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 56,
    "otherNightPrompt": "如果提刑官在白天进行了整局游戏中他的首次提名，唤醒他并对他展示他提名的玩家的角色标记。",
    "reminders": [
      "被首次提名"
    ],
    "setup": false
  },
  {
    "id": "towncrier",
    "name": "Town Crier",
    "edition": "snv",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/towncrier.webp",
    "ability": "Each night*, you learn if a Minion nominated today.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 59,
    "otherNightPrompt": "Nod 'yes' or shake head 'no' for whether a Minion nominated today. Place the 'Minion not nominated' marker (remove 'Minion nominated', if any).",
    "reminders": [
      "Minions not nominated",
      "Minion nominated"
    ],
    "setup": false
  },
  {
    "id": "undertaker",
    "name": "Undertaker",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/undertaker.webp",
    "ability": "Each night*, you learn which character died by execution today.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 56,
    "otherNightPrompt": "If a player was executed today: Show that player's character token.",
    "reminders": [
      "Executed"
    ],
    "setup": false
  },
  {
    "id": "vigormortis",
    "name": "Vigormortis",
    "edition": "snv",
    "type": "demon",
    "image": "/img/icons/demon/vigormortis.webp",
    "ability": "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 32,
    "otherNightPrompt": "The Vigormortis points to a player. That player dies. If a Minion, they keep their ability and one of their Townsfolk neighbours is poisoned.",
    "reminders": [
      "Dead",
      "Has ability",
      "Poisoned"
    ],
    "setup": true
  },
  {
    "id": "villageidiot",
    "name": "Village Idiot",
    "edition": "custom",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/villageidiot.webp",
    "ability": "Each night, choose a player: you learn their alignment. [+0 to +2 Village Idiots. 1 of the extras is drunk]",
    "firstNight": 45,
    "firstNightPrompt": "The Village Idiot points to a player; give a thumbs up if that player is good or a thumbs down if that player is evil.",
    "otherNight": 62,
    "otherNightPrompt": "The Village Idiot points to a player; give a thumbs up if that player is good or a thumbs down if that player is evil.",
    "reminders": [
      "Drunk"
    ],
    "setup": true
  },
  {
    "id": "virgin",
    "name": "Virgin",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/virgin.webp",
    "ability": "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "No ability"
    ],
    "setup": false
  },
  {
    "id": "vizier",
    "name": "Vizier",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/vizier.webp",
    "ability": "All players know you are the Vizier. You cannot die during the day. If good voted, you may choose to execute immediately.",
    "firstNight": 54,
    "firstNightPrompt": "Announce 'The Vizier is in play' and state which player they are.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "vortox",
    "name": "Vortox",
    "edition": "snv",
    "type": "demon",
    "image": "/img/icons/demon/vortox.webp",
    "ability": "Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 31,
    "otherNightPrompt": "The Vortox points to a player. That player dies.",
    "reminders": [
      "Dead"
    ],
    "setup": false
  },
  {
    "id": "washerwoman",
    "name": "Washerwoman",
    "edition": "tb",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/washerwoman.webp",
    "ability": "You start knowing that 1 of 2 players is a particular Townsfolk.",
    "firstNight": 32,
    "firstNightPrompt": "Show the character token of a Townsfolk in play. Point to two players, one of which is that character.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Townsfolk",
      "Wrong"
    ],
    "setup": false
  },
  {
    "id": "widow",
    "name": "Widow",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/widow.webp",
    "ability": "On your 1st night, look at the Grimoire & choose a player: they are poisoned. 1 good player knows a Widow is in play.",
    "firstNight": 18,
    "firstNightPrompt": "Show the Grimoire to the Widow for as long as they need. The Widow points to a player. That player is poisoned. Wake a good player. Show the 'These characters are in play' card, then the Widow character token.",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "Poisoned"
    ],
    "setup": false
  },
  {
    "id": "witch",
    "name": "Witch",
    "edition": "snv",
    "type": "minion",
    "image": "/img/icons/minion/witch.webp",
    "ability": "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.",
    "firstNight": 24,
    "firstNightPrompt": "The Witch points to a player. If that player nominates tomorrow they die immediately.",
    "otherNight": 15,
    "otherNightPrompt": "If there are 4 or more players alive: The Witch points to a player. If that player nominates tomorrow they die immediately.",
    "reminders": [
      "Cursed"
    ],
    "setup": false
  },
  {
    "id": "wizard",
    "name": "Wizard",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/wizard.webp",
    "ability": "Once per game, choose to make a wish. If granted, it might have a price & leave a clue as to its nature.",
    "firstNight": 24,
    "firstNightPrompt": "Run the Wizard ability if applicable.",
    "otherNight": 15,
    "otherNightPrompt": "Run the Wizard ability if applicable.",
    "reminders": [
      "?"
    ],
    "setup": false
  },
  {
    "id": "wraith",
    "name": "Wraith",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion.webp",
    "ability": "You may choose to open your eyes at night. You wake when other evil players do.",
    "firstNight": 1,
    "firstNightPrompt": "Wake the Wraith whenever other evil players wake.",
    "otherNight": 1,
    "otherNightPrompt": "Wake the Wraith whenever other evil players wake.",
    "reminders": [],
    "setup": false
  },
  {
    "id": "wudaozhe",
    "name": "悟道者",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/wudaozhe.webp",
    "ability": "你以为你是一个外来者，但你实际上不是。如果有邪恶玩家的能力选择或影响了你，在该效果生效前你会变成一个不在场的镇民角色。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": true
  },
  {
    "id": "wushiren",
    "name": "舞狮人",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/wushiren.webp",
    "ability": "每个夜晚，你会得知一个在场角色。每局游戏限一次，你得知的信息改为恶魔的伪装之一。",
    "firstNight": 0,
    "firstNightPrompt": "唤醒舞狮人，对他展示一个角色标记。如果展示了恶魔的伪装，在舞狮人角色标记旁放置“限一次”角色标记。如果舞狮人有“限一次”角色标记，则无法对他展示恶魔的伪装作为正确信息。",
    "otherNight": 64,
    "otherNightPrompt": "唤醒舞狮人，对他展示一个角色标记。如果展示了恶魔的伪装，在舞狮人角色标记旁放置“限一次”角色标记。如果舞狮人有“限一次”角色标记，则无法对他展示恶魔的伪装作为正确信息。",
    "reminders": [
      "限一次"
    ],
    "setup": false
  },
  {
    "id": "xaan",
    "name": "Xaan",
    "edition": "custom",
    "type": "minion",
    "image": "/img/icons/minion/xaan.webp",
    "ability": "On night X, all Townsfolk are poisoned until dusk. [X Outsiders]",
    "firstNight": 22,
    "firstNightPrompt": "If the X token is placed in the Grimoire, all Townsfolk are poisoned.",
    "otherNight": 5,
    "otherNightPrompt": "If the X token is placed in the Grimoire, all Townsfolk are poisoned.",
    "reminders": [
      "Night 1",
      "Night 2",
      "Night 3",
      "X"
    ],
    "setup": true
  },
  {
    "id": "xingjiaoshang",
    "name": "行脚商",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/xingjiaoshang.webp",
    "ability": "每局游戏限一次，在夜晚时，你可以选择一名玩家：你会得知放置在该玩家角色标记旁的所有提示标记。",
    "firstNight": 47,
    "firstNightPrompt": "唤醒行脚商，让其选择一名玩家。将当前放置在该玩家角色标记旁的所有提示标记展示给他看。",
    "otherNight": 67,
    "otherNightPrompt": "唤醒行脚商，让其选择一名玩家。将当前放置在该玩家角色标记旁的所有提示标记展示给他看。",
    "reminders": [],
    "setup": false
  },
  {
    "id": "xionghaizi",
    "name": "熊孩子",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/xionghaizi.webp",
    "ability": "每个夜晚，你要选择两个善良角色：他们的能力会产生错误信息，直到下个黄昏。",
    "firstNight": 6,
    "firstNightPrompt": "唤醒熊孩子，让其选择两个善良角色。如果这些角色在场，在对应角色标记旁放置“捣蛋”提示标记。",
    "otherNight": 5,
    "otherNightPrompt": "移除上个夜晚放置的“捣蛋”提示标记。唤醒熊孩子，让其选择两个善良角色。如果这些角色在场，在对应角色标记旁放置“捣蛋”提示标记。",
    "reminders": [
      "捣蛋"
    ],
    "setup": false
  },
  {
    "id": "xizi",
    "name": "戏子",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/xizi.webp",
    "ability": "所有戏子互相认识。不论在场的戏子数量多少或存活与否，胜负结果会被对调。[所有善良玩家都是戏子]",
    "firstNight": 12,
    "firstNightPrompt": "唤醒所有戏子，让他们互相确认。如有必要，对他们展示“你是”提示标记和戏子角色标记。",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": true
  },
  {
    "id": "xizinew",
    "name": "戏子（改）",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk.webp",
    "ability": "其他善良玩家醉酒（旅行者除外），你们互相认识且无法转变阵营，对调胜负结果，即使你失去能力。",
    "firstNight": 13,
    "firstNightPrompt": "同时唤醒所有除了旅行者以外的善良玩家，让他们互认。如有必要，可以向他们展示“该角色的能力对你生效”信息标记并展示戏子（改）角色标记。然后让他们重新入睡。",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [
      "善良醉酒"
    ],
    "setup": true
  },
  {
    "id": "xuncha",
    "name": "巡察",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/xuncha.webp",
    "ability": "每个夜晚*，你要选择除你以外的两个善良角色：如果他们都存活，他们当晚不会死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 4420,
    "otherNightPrompt": "唤醒巡查，让其选择两个善良角色，如果这两个角色都在场，在对应玩家角色标记旁放置“保护”标记。",
    "reminders": [
      "保护"
    ],
    "setup": false
  },
  {
    "id": "yaggababble",
    "name": "Yaggababble",
    "edition": "custom",
    "type": "demon",
    "image": "/img/icons/demon/yaggababble.webp",
    "ability": "You start knowing a secret phrase. For each time you said it publicly today, a player might die.",
    "firstNight": 2,
    "firstNightPrompt": "Show the Yaggababble their secret phrase.",
    "otherNight": 35,
    "otherNightPrompt": "Choose a number of players up to the total number of times the Yaggababble said their secret phrase publicly, those players die.",
    "reminders": [
      "Dead"
    ],
    "setup": false
  },
  {
    "id": "yangguren",
    "name": "养蛊人",
    "edition": "hdcs",
    "type": "minion",
    "image": "/img/icons/minion/yangguren.webp",
    "ability": "在你存活时提名你的玩家会在当晚死亡，即使你已死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 38,
    "otherNightPrompt": "如果有玩家被放置了“提名”标记，标记该玩家死亡。",
    "reminders": [
      "提名",
      "死亡"
    ],
    "setup": false
  },
  {
    "id": "yanluo",
    "name": "阎罗",
    "edition": "syyl",
    "type": "demon",
    "image": "/img/icons/demon/yanluo.webp",
    "ability": "在你的首个夜晚，你能查看魔典并选择一名玩家：他在第三个夜晚死亡，即使因为任何原因让他不会死亡。每个夜晚，你要选择一名玩家：上个夜晚被你选择的玩家死亡。",
    "firstNight": 11710,
    "firstNightPrompt": "首个夜晚，唤醒阎罗并让他按自己意愿的时长来查看魔典。 让阎罗选择一名玩家，放置“选择”标记在其角色图标旁，其在覅三个夜晚必定会死亡。 让阎罗选择一名玩家，放置“即将死亡”标记在其角色图标旁。",
    "otherNight": 8410,
    "otherNightPrompt": "让阎罗选择一名玩家，放置“即将死亡”标记在其角色图标旁。",
    "reminders": [
      "即将死亡",
      "选择"
    ],
    "setup": false
  },
  {
    "id": "yanshi",
    "name": "偃师",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/yanshi.webp",
    "ability": "如果你在夜晚死亡，你与一名存活爪牙玩家交换角色。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "yinluren",
    "name": "引路人",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/yinluren.webp",
    "ability": "每个夜晚，你要选择两名玩家：你会得知今晚是否有邪恶玩家的能力选择或影响了他们之中的玩家。",
    "firstNight": 52,
    "firstNightPrompt": "唤醒摆渡者，让其选择两名玩家。以点头或摇头作为信息给出。",
    "otherNight": 72,
    "otherNightPrompt": "唤醒摆渡者，让其选择两名玩家。以点头或摇头作为信息给出。",
    "reminders": [],
    "setup": false
  },
  {
    "id": "yinyangshi",
    "name": "阴阳师",
    "edition": "hdcs",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/yinyangshi.webp",
    "ability": "在你的首个夜晚，你会得知两个善良角色和两个邪恶角色。其中有且只有两个角色在场。",
    "firstNight": 43,
    "firstNightPrompt": "唤醒阴阳师，并对其展示两个善良角色，两个邪恶角色，共四个角色标记。其中正好只有两个角色在场。",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "yishi",
    "name": "驿使",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/yishi.webp",
    "ability": "每个白天，你可以公开声明一个角色。在当晚，你会得知该角色是否在场。如果你因此得知了否，你失去此能力。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 12210,
    "otherNightPrompt": "在每个白天，如果驿使声明使用他的能力，如果驿使声明的角色在场，放置“猜测正确”提示标记在驿使角色标记旁。 当晚，唤醒驿使艺人。如果他猜测正确，对他点头表示“是”，对他摇头表示“否”，如果你对他摇头，放置一枚“失去能力”的标记在其角色旁",
    "reminders": [
      "猜测正确",
      "失去能力"
    ],
    "setup": false
  },
  {
    "id": "yongjiang",
    "name": "俑匠",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/yongjiang.webp",
    "ability": "如果已死亡玩家中没有邪恶玩家，你只会死于处决。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "zealot",
    "name": "Zealot",
    "edition": "custom",
    "type": "outsider",
    "image": "/img/icons/outsider/zealot.webp",
    "ability": "If there are 5 or more players alive, you must vote for every nomination.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 0,
    "otherNightPrompt": "",
    "reminders": [],
    "setup": false
  },
  {
    "id": "zhen",
    "name": "鸩",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/zhen.webp",
    "ability": "每局游戏限一次，在夜晚时*，你可以选择一个镇民角色：如果他在场，他醉酒并死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 8899,
    "otherNightPrompt": "唤醒鸩，让其选择一个镇民角色，如果该角色在场，在其角色标记旁放置“死亡”和“醉酒”提示标记",
    "reminders": [
      "死亡",
      "失去能力",
      "醉酒"
    ],
    "setup": false
  },
  {
    "id": "zhifu",
    "name": "知府",
    "edition": "syyl",
    "type": "townsfolk",
    "image": "/img/icons/townsfolk/zhifu.webp",
    "ability": "每个夜晚*，你会得知今天是否有非镇民且非旅行者玩家死亡。",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 12220,
    "otherNightPrompt": "如果在白天以及夜晚，只有镇民玩家死亡，对司民摇头表示“否”，否则点头表示“是”。",
    "reminders": [],
    "setup": false
  },
  {
    "id": "zombuul",
    "name": "Zombuul",
    "edition": "bmr",
    "type": "demon",
    "image": "/img/icons/demon/zombuul.webp",
    "ability": "Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead.",
    "firstNight": 0,
    "firstNightPrompt": "",
    "otherNight": 25,
    "otherNightPrompt": "If no-one died during the day: The Zombuul points to a player. That player dies.",
    "reminders": [
      "Died today",
      "Dead"
    ],
    "setup": false
  }
];
