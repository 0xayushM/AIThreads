import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#011d84",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo.png",
  fullDecal: "./logo.png",
});

export default state