import { Cube } from "../components/meshs/cube";
import { Ground } from "../components/meshs/ground";
import type { GlobalManager } from "../managers/global-manager";

export class InitMeshes {
  constructor(globalManager: GlobalManager) {
    const cube = new Cube();
    const ground = new Ground();

    globalManager.correctMeshes([
      cube,
      ground,
      //
    ]);

    globalManager.setMeshes();
  }
}
