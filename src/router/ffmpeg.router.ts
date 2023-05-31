import { Router } from "restify-router";
import {
  webmToMp4,
  mp4ToWebm,
  muteVideos,
} from "../controller/ffmpeg.controller";

const ffmpegRoute = new Router();

ffmpegRoute.get("/webm-to-mp4", async (req, res) => {
  try {
    const response = await webmToMp4();

    return res.json({ success: true, msg: "exito", code: response });
  } catch (error) {
    return res.json({ success: false, msg: "fracaso" });
  }
});

ffmpegRoute.get("/mp4-to-webm", async (req, res) => {
  try {
    const response = await mp4ToWebm();

    return res.json({ success: true, msg: "exito", code: response });
  } catch (error) {
    return res.json({ success: false, msg: "fracaso" });
  }
});

ffmpegRoute.get("/mute-videos", async (req, res) => {
  try {
    const response = await muteVideos();

    return res.json({ success: true, msg: "exito", code: response });
  } catch (error) {
    return res.json({ success: false, msg: "fracaso" });
  }
});

export default ffmpegRoute;
