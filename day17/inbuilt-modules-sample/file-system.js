const fs = require("fs");

const DIR_PATH = "../test-files";

fs.readFile(`${DIR_PATH}/random.txt`, "utf8", (error, data) => {
  if (error) {
    console.log("Error While Reading File: ", error);
  }

  console.log("Data: ", data);
});

fs.writeFile(
  `${DIR_PATH}/intro.txt`,
  "This is an introductory file from our Web Dev Bootcamp.",
  (error) => {
    if (error) {
      console.log("Error While Writing File: ", error);
    }
  }
);

fs.appendFile(`${DIR_PATH}/intro.txt`, " Who is Full Stack Dev", (error) => {
  if (error) {
    console.log("Error While Appending File: ", error);
  }
});

fs.rename(`${DIR_PATH}/intro.txt`, `${DIR_PATH}/introduction.txt`, (error) => {
  if (error) {
    console.log("Error While Renaming File: ", error);
  }
});

fs.unlink(`${DIR_PATH}/delete.txt`, (error) => {
  if (error) {
    console.log("Error While Deleting File: ", error);
  }
});

fs.mkdir(`${DIR_PATH}/new-dir`, (error) => {
  if (error) {
    console.log("Error While Creating Directory: ", error);
  }
});

fs.rmdir(`${DIR_PATH}/old-dir`, (error) => {
  if (error) {
    console.log("Error While Removing Directory: ", error);
  }
});
