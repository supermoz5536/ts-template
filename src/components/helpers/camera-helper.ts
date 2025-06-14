import * as THREE from "three";

export class CameraHelper {
  private helper!: THREE.CameraHelper;

  constructor(camera: THREE.Camera) {
    this.helper = new THREE.CameraHelper(camera);
  }

  getHelper() {
    return this.helper;
  }
}
