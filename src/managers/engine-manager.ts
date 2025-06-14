import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/* --------------------------------------
 Canvas, Camera, Scene, Renderer
-------------------------------------- */

export class EngineManager {
  private canvas!: HTMLCanvasElement;
  private camera!: THREE.PerspectiveCamera;
  private cameraControls!: OrbitControls;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;

  constructor() {
    /**
     * Canvas
     */

    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;

    /**
     * Camera
     */

    const aspects = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(60, aspects, 0.1, 1000); // fov, aspects, near, far

    this.camera.position.set(0, 6, 10);

    this.cameraControls = new OrbitControls(this.camera, this.canvas);
    this.cameraControls.enableDamping = true;
    this.cameraControls.target.set(0, 1, 0);
    this.cameraControls.update();

    /**
     * Scene
     */

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#201919");

    /**
     * Renderer
     */

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas! });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    /**
     * Lisners
     */

    window.addEventListener("resize", () => this.setWindowSize());
  }

  /* ---------
      Methods
    ---------- */
  private setWindowSize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix(); // Recalculate projectionMatrix with new aspect
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public addSceneHelpers(helpers: any) {
    for (const helper of helpers) {
      if (helper) this.scene.add(helper.getHelper());
    }
  }

  public addSceneMeshes(meshes: any) {
    for (const mesh of meshes) {
      if (mesh) this.scene.add(mesh.getMesh());
    }
  }

  public addSceneLights(lights: any) {
    for (const light of lights) {
      if (light) this.scene.add(light.getLight());
    }
  }

  public update() {
    this.renderer.render(this.scene, this.camera);
  }
}
