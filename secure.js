const fs = require("fs");
// const util = require("util");

class Log {
  constructor() {
    this._cur_dt = new Date()
      .toISOString()
      .replace(/T/, " ") // replace T with a space
      .replace(/\..+/, "");
    // this._cur_dt_str = dateFormat(now, "isoDateTime");
    this._log_name = `log_${this._cur_dt}.txt`;
  }

  getLogName() {
    return this._log_name;
  }

  createLog() {
    fs.writeFileSync(`./result/${this._log_name}`, "");
  }

  writeLog(reason, ex) {
    fs.appendFileSync(
      `./result/${this._log_name}`,
      `${this._cur_dt} - ${reason}\n${ex}\n`,
    );
  }
}

const log = new Log();

module.exports = {
  my_log: log,
};
