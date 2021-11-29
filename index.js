const csv = require("csv-parser");
const fs = require("fs");
const axios = require("axios").default;
const config = require("./config");

function run({ url, method, filePath, headers }) {
  const results = [];

  async function send(data) {
    const replaceUrl = ["put", "patch", "delete"].includes(method);
    const sendUrl = replaceUrl ? url.replace("%{id}", data.id) : url;
    return axios[method](sendUrl, data, { headers }).then((res) => {
      process.stdout.write(".");
      return res;
    });
  }

  console.time("Duração");
  process.stdout.write("Enviando");
  fs.createReadStream(filePath)
    .pipe(csv({ separator: ";" }))
    .on("data", (data) => {
      results.push(send(data));
    })
    .on("end", () => {
      Promise.all(results)
        .then(() => {
          console.log("\nConcluído com sucesso");
          console.timeEnd("Duração");
        })
        .catch((e) => {
          console.log(e);
        });
    });
}

run(config);
