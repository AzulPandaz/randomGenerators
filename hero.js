/*
    Hero Generator

    Build a program that will randomize a adj, hero, and superpower

    ex: The fantastic lava girl can carve 30 pumpkins

        Puesdo Code

        Variables

        adjectives
        heros
        powers

        adj
        hero
        power
        message
        idx
            adjectiveIdx
            heroIdx
            powerIdx

        PROCEDURECE

        SET adjectives, heros, powers
        SET adj FROM adjectives 
        SET hero FROM heros 
        SET power FROM POWERS
        SET message to "The {adj} {hero} can {power}"

        DISPLAY message
        OUTPUT message
*/

var adjectives = ['Blazing', 'Cunning', 'Inter', 'Frontloading', 'Scaling']

var heroes = [
    'Jhin', 'Graves', 'Syndra', 'Rakan', 'Renekton', 'Ezreal', 'Poppy', 'Tristana'
]

var powers = ['Gravity Minipulation', 'Feather Control', 'use the power of 4', 'use handcannons', 'change time']

//  powers[2]
//  powers [1+1]

// Math.floor(Math.random())
// console.log(Math.floor(2.454))
// console.log(Math.random())
var heroIdx;
var powerIdx;
var adjectiveIdx;


heroIdx = Math.floor(Math.random() * heroes.length);
powerIdx = Math.floor(Math.random() * powers.length);
adjectiveIdx = Math.floor(Math.random() * adjectives.length);


var adj, hero, power;

adj = adjectives[adjectiveIdx];
hero = heroes[heroIdx];
power = powers[powerIdx];
// var message = "The " + adj + " " + hero + " can " + power;

// string template literal

var message = `The ${adj} ${hero} can ${power}.`

console.log(message);

/*
    Build a randomizer
    Random DND Character builder

    Varriables
    races
    classes
    adjs
    wealthStatus
    alignmentCharts
    message

    race
    class
    adj
    wealth
    alignmentChart

    raceIdx
    classIdx
    adjIdx
    wealthIdx
    alignmentChartIdx

    PROCEDURES
    SET races, classes, adjs, wealthStatus
    SET race from races
    SET class FROM classes
    SET adj FROM adjs
    SET wealth from wealthStatus
    SET message to "The ${race} ${class} that is always ${adj} and was born into ${wealth} and is ${alignmentCharts}"
    DISPLAY message
    OUTPUT message
*/

var races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome','Half ELf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling', 'Aarakocra', 'Genasi', 'Goliath'];

var classes = ['Brabarian', 'Bard', 'Cleric', 'Druid', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rouge', 'Sorcerer', 'Warlock', 'Wizard', 'Artificer', 'Blood Hunter'];

var adjectives = ['Dark', 'Proud', 'Cocky', 'Full of themselves', 'Strong willed', 'a leader', 'Sad', 'a ass', 'a jerk', 'happy', 'cheerfull', 'the light of the party'];

var wealthStatus = ['adversity', 'middle class', 'wealthy'];

var alignmentCharts = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil', 'Neutral Good', 'True Neutral', 'Neutral Evil', 'Chaotic Good', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil'];

var message;

var raceIdx, classIdx, adjIdx, wealthIdx, alignmentChartIdx;

raceIdx = Math.floor(Math.random() * races.length);
classIdx = Math.floor(Math.random() * classes.length);
adjIdx = Math.floor(Math.random() * adjectives.length);
wealthIdx = Math.floor(Math.random() * wealthStatus.length);
alignmentChartIdx = Math.floor(Math.random() * alignmentCharts.length);

var race 
var classDND
var adj
var wealth
var alignmentChart
race = races[raceIdx];
classDND = classes[classIdx];
adj = adjectives[adjIdx];
wealth = wealthStatus[wealthIdx];
alignmentChart = alignmentCharts[alignmentChartIdx];

message = `The character generated for you is a ${race} ,${classDND} that is always, ${adj}, and was born into ${wealth}, and is ${alignmentChart}`
console.log(message);


/*
BUild a random Team Comp Generator

    Variables
    topLaners
    jungles
    midLaners
    attackDamageCarries
    supports

    top
    jungle
    mid
    attackDamageCarry
    support

    topIdx
    jungleIdx
    midIdx
    adcIdx
    supportIdx
*/

var topLaners = ['Camille', 'Darius', 'Gnar', 'Lee Sin', 'Nocturne', 'Renekton', 'Wukong', 'Shen', 'Cho’Gath', 'Fiora', 'Gangplank', 'Gragas', 'Jax', 'Kennen', 'Malphite', 'Mordekaiser', 'Ornn', 'Riven', 'Sion', 'Sylas', 'Urgot', 'Volibear', 'Yorick', 'Aatrox', 'Dr. Mundo', 'Garen', 'Heimerdinger', 'Illaoi', 'Jayce', 'Kayle', 'Kled', 'Mao’kai', 'Poppy', 'Quinn', 'Rumble', 'Sett', 'Vladimir', 'Teemo', 'Yasuo', 'Akali', 'Irelia', 'Nasus', 'Singed', 'Tahm Kench', 'Tryndamere', 'Vayne', 'Viego', 'Warwick', 'Yone', 'Gwen']
var jungles = ['Ekko', 'Evelynn', 'Shaco', 'Fiddlesticks', 'Graves', 'Amumu', 'Master Yi', 'Nocturne', 'Rammus', 'Trundle', 'Vi', 'Warwick', 'Zac', 'Elise', 'Kha’Zix', 'Lillia', 'Mordekasier', 'Poppy', 'Dr. Mundo', 'Hecarim', 'Jarvan IV', 'Nunu + Willump', 'Shyvana', 'Skarner', 'Volibear', 'Xin Zhao', 'Kindred', 'Rek’Sai', 'Talon', 'Gragas', 'Kayn', 'Udyr', 'Viego', 'Diana', 'Jax', 'Sejuani']
var midLaners= ['Yasuo', 'Akshan', 'Fizz', 'Graves',  'Kayle', 'Vex', 'Annie', 'Lux', 'Malzahar', 'Katarina', 'Anivia', 'Ekko', 'Viktor', 'Xerath', 'Yone', 'Ahri', 'Corki', 'Pantheon', 'Sett', 'Swain', 'Brand', 'Diana', 'Irelia', 'Sylas', 'Zed', 'Cassiopeia', 'Talon', 'Vel’Koz', 'Vladimir', 'Swain', 'Lissandra', 'Malphite', 'Morgana', 'Neeko', 'Seraphine', 'Tryndamere', 'Veigar', 'Ziggs', 'Akshan', 'Vex']
var attackDamageCarries = ['Draven', 'Vayne', 'Jhin', 'Ashe', 'Jinx', 'Miss Fortune', 'Sivir', 'Ezreal', 'Kai’Sa', 'Lucian', 'Samira', 'Kog’Maw', 'Twitch', 'Seraphine', 'Yasuo', 'Caitlyn', 'Senna', 'Xayah', 'Tristana']
var supports = [ 'Zilean', 'Amumu', 'Blitzcrank', 'Leona', 'Morgana', 'Lux', 'Morgana', 'Nami', 'Sona', 'Soraka', 'Zyra', 'Xerath', 'Alistar', 'Braum', 'Lulu', 'Janna', 'Karma', 'Maokai', 'Nautilus', 'Rell', 'Yuumi', 'Pyke', 'Thresh', 'Bard', 'Rakan', 'Shaco', 'Taliyah', 'Vel’koz', 'Senna', 'Swain', 'Taric', 'Seraphine']

var message;

var topLanerIdx
var jungleIdx
var midLanerIdx
var adcIdx
var supportIdx

topLanerIdx = Math.floor(Math.random() * topLaners.length);
jungleIdx = Math.floor(Math.random() * jungles.length);
midLanerIdx = Math.floor(Math.random() * midLaners.length);
adcIdx = Math.floor(Math.random() * attackDamageCarries.length);
supportIdx = Math.floor(Math.random() * supports.length);

var toplane, midLane, jungle, attackDamageCarry, support

toplane = topLaners[topLanerIdx];
jungle = jungles[jungleIdx];
midLane = midLaners[midLanerIdx];
attackDamageCarry = attackDamageCarries[adcIdx];
support = supports[supportIdx];

message = `Your team comp is made up of ${toplane} in the top lane, ${jungle} in the jungle, ${midLane} in the mid lane, ${attackDamageCarry} in the ADC role, and ${support} in the support role, here is your team comp have fun!`

console.log(message);