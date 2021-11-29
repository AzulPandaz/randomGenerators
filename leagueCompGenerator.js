var topLaners = ['Camille', 'Darius', 'Gnar', 'Lee Sin', 'Nocturne', 'Renekton', 'Wukong', 'Shen', 'Cho’Gath', 'Fiora', 'Gangplank', 'Gragas', 'Jax', 'Kennen', 'Malphite', 'Mordekaiser', 'Ornn', 'Riven', 'Sion', 'Sylas', 'Urgot', 'Volibear', 'Yorick', 'Aatrox', 'Dr. Mundo', 'Garen', 'Heimerdinger', 'Illaoi', 'Jayce', 'Kayle', 'Kled', 'Mao’kai', 'Poppy', 'Quinn', 'Rumble', 'Sett', 'Vladimir', 'Teemo', 'Yasuo', 'Akali', 'Irelia', 'Nasus', 'Singed', 'Tahm Kench', 'Tryndamere', 'Vayne', 'Viego', 'Warwick', 'Yone', 'Gwen']
var jungles = ['Ekko', 'Evelynn', 'Shaco', 'Fiddlesticks', 'Graves', 'Amumu', 'Master Yi', 'Nocturne', 'Rammus', 'Trundle', 'Vi', 'Warwick', 'Zac', 'Elise', 'Kha’Zix', 'Lillia', 'Mordekasier', 'Poppy', 'Dr. Mundo', 'Hecarim', 'Jarvan IV', 'Nunu + Willump', 'Shyvana', 'Skarner', 'Volibear', 'Xin Zhao', 'Kindred', 'Rek’Sai', 'Talon', 'Gragas', 'Kayn', 'Udyr', 'Viego', 'Diana', 'Jax', 'Sejuani']
var midLaners= ['Yasuo', 'Akshan', 'Fizz', 'Graves',  'Kayle', 'Vex', 'Annie', 'Lux', 'Malzahar', 'Katarina', 'Anivia', 'Ekko', 'Viktor', 'Xerath', 'Yone', 'Ahri', 'Corki', 'Pantheon', 'Sett', 'Swain', 'Brand', 'Diana', 'Irelia', 'Sylas', 'Zed', 'Cassiopeia', 'Talon', 'Vel’Koz', 'Vladimir', 'Swain', 'Lissandra', 'Malphite', 'Morgana', 'Neeko', 'Seraphine', 'Tryndamere', 'Veigar', 'Ziggs', 'Akshan', 'Vex']
var botLaners = ['Draven', 'Vayne', 'Jhin', 'Ashe', 'Jinx', 'Miss Fortune', 'Sivir', 'Ezreal', 'Kai’Sa', 'Lucian', 'Samira', 'Kog’Maw', 'Twitch', 'Seraphine', 'Yasuo', 'Caitlyn', 'Senna', 'Xayah', 'Tristana']
var supports = [ 'Zilean', 'Amumu', 'Blitzcrank', 'Leona', 'Morgana', 'Lux', 'Morgana', 'Nami', 'Sona', 'Soraka', 'Zyra', 'Xerath', 'Alistar', 'Braum', 'Lulu', 'Janna', 'Karma', 'Maokai', 'Nautilus', 'Rell', 'Yuumi', 'Pyke', 'Thresh', 'Bard', 'Rakan', 'Shaco', 'Taliyah', 'Vel’koz', 'Senna', 'Swain', 'Taric', 'Seraphine']




let
toplane = document.getElementById('topLane'),
jungle = document.getElementById('jungle'),
midlane = document.getElementById('midLane'),
botlane = document.getElementById('botLane'),
support = document.getElementById('support'),
teamButton = document.getElementById('generateTeam'),
messageTest = document.getElementById('messageTest')
let message;

generateTeam.addEventListener('click',(e)=>{
    e.preventDefault
    let tIdx = Math.floor(Math.random() * topLaners.length);
    let jIdx = Math.floor(Math.random() * jungles.length);
    let mIdx = Math.floor(Math.random() * midLaners.length);
    let aIdx = Math.floor(Math.random() * botLaners.length);
    let sIdx = Math.floor(Math.random() * supports.length);

    let top = topLaners[tIdx]
    let jung = jungles[jIdx]
    let mid = midLaners[mIdx]
    let bot = botLaners[aIdx]
    let sup = supports[sIdx]

    message = "Here is your Team Comp"
    messageTest.innerText = message;
    toplane.innerText = top;
    jungle.innerText = jung;
    midlane.innerText = mid;
    botlane.innerText = bot;
    support.innerText = sup;
})
