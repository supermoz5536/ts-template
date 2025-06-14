import "./main.css";
import { GlobalManager } from "../managers/global-manager";
import { InitLights } from "../init/lights";
import { InitHelpers } from "../init/helpers";
import { InitMeshes } from "../init/meshes";

/* ---------
      Manager
    ---------- */

const globalManager = new GlobalManager();

/* ---------
      Init
    ---------- */

// Mesh
new InitMeshes(globalManager);

// Light
const lightObjects = new InitLights(globalManager, {
  ambient: true,
  directional: true,
  hemisphere: true,
  point: true,
  spot: true,
});

// Helper
new InitHelpers(globalManager, lightObjects.getLights());
