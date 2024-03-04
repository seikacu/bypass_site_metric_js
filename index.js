const { start } = require("./puppet");
const { my_log } = require("./secure");
const _ = require("lodash");
const sleep = require("sleep-promise");

const mode = ["PC", "mobile"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const main = async () => {
  let done = false;
  console.log("START");
  my_log.createLog();
  while (!done) {
    let time_delay = getRandomInt(10000, 60000);
    console.time("start_script");
    const mode_set = _.sample(mode);
    console.log("Random:", mode_set);
    await start(mode_set);
    // console.log(result);
    // start_selen('mobile')
    // start_selen('PC')
    console.log("[INFO] Script worked in mode for ${random} seconds.");
    my_log.writeLog("[INFO]", "Script worked in mode for ${mode_set} seconds.");
    // secure.log.write_log('[INFO], Script worked in mode ${mode_set} for ${tsecs} seconds.');
    console.log(time_delay);
    await sleep(time_delay);
    console.timeEnd("end_script");
  }
};

// console.log(main());
main();
