import { cubeInAreas } from "3d-transform-utils";
import chalk from "chalk";

const inArea = cubeInAreas({
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
});

console.log(chalk.redBright(JSON.stringify(inArea)));