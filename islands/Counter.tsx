/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

import * as BABYLON from "https://esm.sh/babylonjs@5.21.0";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  useEffect(() => {
    const canvas = document.getElementById("renderCanvas")!
    const engine = new BABYLON.default.Engine(canvas, true)
    const scene = createScene(canvas, engine)
    engine.runRenderLoop(() => {
      scene.render()
    })

  }, [])
  return (
    <canvas id ="renderCanvas"></canvas>
  );
}

function createScene(canvas: HTMLElement, engine: BABYLON.default.Engine) {
  const scene = new BABYLON.default.Scene(engine)
  BABYLON.default.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "box.babylon")
  const camera = new BABYLON.default.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.default.Vector3(0, 0, 0))
  // camera.attachControl(canvas, true)
  const light = new BABYLON.default.HemisphericLight("light", new BABYLON.default.Vector3(1, 1, 0))
  return scene
}
