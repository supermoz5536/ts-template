import * as THREE from "three";

export class DirectionalLight {
  private light!: THREE.DirectionalLight;

  constructor() {
    this.light = new THREE.DirectionalLight(0xffffff, 1.7);
    this.light.position.set(5, 5, -5);
    this.light.castShadow = true;

    this.light.shadow.camera.top = 5;
    this.light.shadow.camera.right = 7;
    this.light.shadow.camera.left = -7;
    this.light.shadow.camera.bottom = -5;
    this.light.shadow.camera.far = 15;
  }

  public getLight() {
    return this.light;
  }
}
