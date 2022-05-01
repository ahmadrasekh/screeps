const create = (spawnName: string, creepName: string): any =>
  Game.spawns[spawnName].spawnCreep([WORK, CARRY, MOVE], creepName);
