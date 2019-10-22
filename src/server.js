const fs = require("fs");
const { get } = require("../src/commands");
const fileName = "db.json";

function readStudioData() {
  try {
    const dbJSON = fs.readFileSync(fileName, "utf-8");
    const studios = JSON.parse(dbJSON);
    return studios;
  } catch (error) {
    writeStudios({});
    return {};
  }
}

function writeStudios(studios) {
  fs.writeFileSync(fileName, JSON.stringify(studios));
}

exports.readStudios = readStudioData;
exports.writeStudios = writeStudios;
