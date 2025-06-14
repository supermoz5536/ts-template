import * as THREE from "three";

export class SpotLight {
  private light!: THREE.SpotLight;

  constructor() {
    // color, intensity, distance, angle, penumbra, decay
    this.light = new THREE.SpotLight(0xffffff, 7, 9, Math.PI / 7, 0.2, 0.5);
    this.light.position.set(0, 7, 0);
    this.light.target.position.set(0, 0, 0);
    this.light.castShadow = true;
  }

  public getLight() {
    return this.light;
  }
}
