const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3000, () => {
      console.log("\x1b[94mDatabase connection successful\x1b[0m");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
