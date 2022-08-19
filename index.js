import captureWebsite from "capture-website";
import fs from "fs-extra";

const dir = "./screenshots";

(async () => {
  try {
    if (fs.existsSync(dir)) {
      await fs.remove(dir);
      fs.mkdirSync(dir);
    } else {
      fs.mkdirSync(dir);
    }
  } catch (error) {
    console.log(error);
  }
  for (let index = 1; index <= 3000; index++) {
    await captureWebsite.file(
      "https://www.wasi.lk/shop/bentini-azzura-bicycle/",
      `./screenshots/screenshot${index}.png`,
      {
        delay: 5,
        timeout: 5,
      }
    );
  }
})();
