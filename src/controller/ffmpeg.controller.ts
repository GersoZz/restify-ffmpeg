export const webmToMp4 = () =>
  new Promise((resolve, _reject) => {
    const { spawn } = require("node:child_process");

    const inputPath = "src/files/videoWEBM.webm";
    const outputPath = "src/files/1-webm-to-mp4/videoMP4converted.mp4";

    const bat = spawn("cmd.exe", [
      "/c",
      `ffmpeg -i ${inputPath} ${outputPath}`,
    ]);

    bat.stdout.on("data", (data: any) => {
      console.log(data.toString());
    });

    bat.stderr.on("data", (data: any) => {
      console.error(data.toString());
    });

    bat.on("exit", (code: any) => {
      console.log(`Child exited with code ${code}`);
      resolve(`Resolution Code ->>> ${code}`);
    });
  });

export const mp4ToWebm = () =>
  new Promise((resolve, _reject) => {
    const { spawn } = require("node:child_process");

    const inputPath = "src/files/videoMP4.mp4";
    const outputPath = "src/files/2-mp4-to-webm/videoWEBMconverted.webm";

    const bat = spawn("cmd.exe", [
      "/c",
      `ffmpeg -i ${inputPath} ${outputPath}`,
    ]);

    bat.stdout.on("data", (data: any) => {
      console.log(data.toString());
    });

    bat.stderr.on("data", (data: any) => {
      console.error(data.toString());
    });

    bat.on("exit", (code: any) => {
      console.log(`Child exited with code ${code}`);
      resolve(`Resolution Code ->>> ${code}`);
    });
  });

export const muteVideos = () =>
  new Promise((resolve, _reject) => {
    const { spawn } = require("node:child_process");

    const inputPathMP4 = "src/files/videoMP4.mp4";
    const outputPathMP4 = "src/files/3-muteds/videoMP4muted.mp4";

    const inputPathWEBM = "src/files/videoWEBM.webm";
    const outputPathWEBM = "src/files/3-muteds/videoWEBMmuted.webm";

    const bat = spawn("cmd.exe", [
      "/c",
      `ffmpeg -i ${inputPathMP4} -c:v copy -an ${outputPathMP4} && ffmpeg -i ${inputPathWEBM} -c:v copy -an ${outputPathWEBM}`,
    ]);

    bat.stdout.on("data", (data: any) => {
      console.log(data.toString());
    });

    bat.stderr.on("data", (data: any) => {
      console.error(data.toString());
    });

    bat.on("exit", (code: any) => {
      console.log(`Child exited with code ${code}`);
      resolve(`Resolution Code ->>> ${code}`);
    });
  });
