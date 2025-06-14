import { EngineManager } from "./engine-manager";
import { AnimationManager } from "./animation-manager";

export class GlobalManager {
  private static instance: GlobalManager;

  private engine!: EngineManager;
  private animation!: AnimationManager;

  private objects: any[] = [];
  private helpers: any[] = [];
  private lights: any[] = [];

  static getInstance() {
    return GlobalManager.instance;
  }

  constructor() {
    if (GlobalManager.instance) return GlobalManager.instance;

    GlobalManager.instance = this;

    this.engine = new EngineManager();
    this.animation = new AnimationManager();
  }

  /* ---------
      Methods
    ---------- */

  /**
   * Mesh
   */

  public correctMeshes(meshes: any[]) {
    for (const mesh of meshes) {
      this.objects.push(mesh);
    }
  }

  public setMeshes() {
    this.engine.addSceneMeshes(this.objects);
    this.animation.registerUpdate(this.engine);
    this.animation.registerUpdate(this.objects);
  }

  /**
   * Light
   */

  public collectLights(lights: any[]) {
    for (const light of lights) {
      this.lights.push(light);
    }
  }

  public setLights() {
    this.engine.addSceneLights(this.lights);
  }

  /**
   * Helper
   */

  public collectHelpers(helpers: any[]) {
    for (const helper of helpers) {
      this.helpers.push(helper);
    }
  }

  public setHelpers() {
    this.engine.addSceneHelpers(this.helpers);
  }
}
