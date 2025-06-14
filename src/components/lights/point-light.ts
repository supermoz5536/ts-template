import * as THREE from "three";

export class PointLight {
  private light!: THREE.PointLight;

  constructor() {
    this.light = new THREE.PointLight(0xff00ff, 1.5);
    this.light.position.set(0.5, 1, 2.5);
    this.light.castShadow = true;
  }

  public getLight() {
    return this.light;
  }
}
