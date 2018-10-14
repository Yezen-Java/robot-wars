const BattleArenaFacotry = require('./modules/battleArenaFactory');
const ArenaSize = require('./enitites/battleArenaSize');
const Robot = require('./enitites/robot');

// Test input:
// 5 5
// 1 2 N
// LMLMLMLMM
// 3 3 E
// MMRMMRMRRM

const battleArena = BattleArenaFacotry.getBattleArena(new ArenaSize(5, 5));

const robotOne = new Robot(1, 2, 'N');
const robotTwo = new Robot(3, 3, 'E');

battleArena.setRobot(robotOne);
battleArena.setRobot(robotTwo);

battleArena.moveRobot(['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'], 0);
battleArena.moveRobot(['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'], 1);


battleArena.robots.forEach(robot=>{
    console.log(`${robot.x} ${robot.y} ${robot.direction}`);
})

// const stdin = process.openStdin();
// console.log('Enter Details:')
// stdin.addListener("data", function (d) {
//     console.log("you entered: [" + d.toString().trim() + "]");
// });