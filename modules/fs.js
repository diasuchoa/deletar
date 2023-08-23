const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar um pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }
//   console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("Erro :", error);
    }
    console.log("Arquivo criado!");

    // Adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      " Hello world!",
      (error) => {
        if (error) {
          return console.log("Erro :", error);
        }
        console.log("Arquivo modificado!");

        // Ler um arquivo
        fs.readFile(
          path.join(__dirname, "/test", "test.txt"),
          "utf8",
          (error, data) => {
            if (error) {
              return console.log("Erro :", error);
            }
            console.log(data);
          }
        );
      }
    );
  }
);
