import * as THREE from "three";

export class SpotLightHelper {
  private helper!: THREE.SpotLightHelper;

  constructor(spotLight: THREE.SpotLight) {
    this.helper = new THREE.SpotLightHelper(spotLight, "#00ffff");
  }

  public getHelper() {
    return this.helper;
  }
}
