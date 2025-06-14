import * as THREE from "three";

export class GridHelper {
  private helper!: THREE.GridHelper;

  constructor() {
    this.helper = new THREE.GridHelper(10, 10);
  }

  public getHelper() {
    return this.helper;
  }
}
