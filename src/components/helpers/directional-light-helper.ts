import * as THREE from "three";

export class DirectionalLightHelper {
  private helper!: THREE.DirectionalLightHelper;

  constructor(directionalLight: THREE.DirectionalLight) {
    this.helper = new THREE.DirectionalLightHelper(directionalLight, 2);
  }

  public getHelper() {
    return this.helper;
  }
}
