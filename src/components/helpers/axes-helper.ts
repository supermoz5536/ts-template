import * as THREE from "three";

export class AxesHelper {
  private helper!: THREE.AxesHelper;

  constructor() {
    this.helper = new THREE.AxesHelper(3);
    this.helper.position.set(0, 0.01, 0);
  }

  public getHelper() {
    return this.helper;
  }
}
