import { AmbientLight } from "../components/lights/ambient-light";
import { DirectionalLight } from "../components/lights/directional-light";
import { HemisphereLight } from "../components/lights/hemisphere-light";
import { PointLight } from "../components/lights/point-light";
import { SpotLight } from "../components/lights/spot-light";
import type { GlobalManager } from "../managers/global-manager";

/** ライトごとの ON/OFF フラグ */
export type LightFlags = {
  ambient?: boolean;
  directional?: boolean;
  hemisphere?: boolean;
  point?: boolean;
  spot?: boolean; //
};

export class InitLights {
  private ambientLight: AmbientLight | null = null;
  private directionalLight: DirectionalLight | null = null;
  private hemisphereLight: HemisphereLight | null = null;
  private pointLight: PointLight | null = null;
  private spotLight: SpotLight | null = null;

  constructor(globalManager: GlobalManager, { ambient, directional, hemisphere, point, spot }: LightFlags) {
    if (ambient) this.ambientLight = new AmbientLight();
    if (directional) this.directionalLight = new DirectionalLight();
    if (hemisphere) this.hemisphereLight = new HemisphereLight();
    if (point) this.pointLight = new PointLight();
    if (spot) this.spotLight = new SpotLight();

    globalManager.collectLights([
      this.ambientLight,
      this.directionalLight,
      this.hemisphereLight,
      this.pointLight,
      this.spotLight,
      //
    ]);

    globalManager.setLights();
  }

  getLights() {
    return {
      ambientLight: this.ambientLight,
      directionalLight: this.directionalLight,
      hemisphereLight: this.hemisphereLight,
      pointLight: this.pointLight,
      spotLight: this.spotLight,
    };
  }
}
