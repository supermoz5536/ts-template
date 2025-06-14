import * as THREE from "three";

export class HemisphereLightHelper {
  private helper!: THREE.HemisphereLightHelper;

  constructor(hemisphereLight: THREE.HemisphereLight) {
    this.helper = new THREE.HemisphereLightHelper(hemisphereLight, 0.5);
  }

  public getHelper() {
    return this.helper;
  }
}
