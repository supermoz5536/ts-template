import * as THREE from "three";

export class PointLightHelper {
  private helper!: THREE.PointLightHelper;

  constructor(pointLight: THREE.PointLight) {
    this.helper = new THREE.PointLightHelper(pointLight, 0.5);
  }

  public getHelper() {
    return this.helper;
  }
}
