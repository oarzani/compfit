const { readStudios, writeStudios } = require("./server");

const userArgv = process.argv.slice(2);
const [action, key, value] = userArgv;

function set(key, value) {
  const studios = readStudios();
  studios[key] = value;
  writeStudios(studios);
}

function unset(key) {
  console.log("unset", key);
}

function get(key) {
  const studios = readStudios();
  const studio = studios[key];
  console.log(studio);
}

const commands = {
  set,
  get,
  unset
};

const command = commands[action];
if (!command) {
  throw new Error("unknown action");
}
command(key, value);

exports.get = get;
