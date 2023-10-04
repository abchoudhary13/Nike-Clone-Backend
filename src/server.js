const app = require("./index");
const connection = require("./configs/db");
require("dotenv").config();

const PORT = process.env.PORT || 7000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running on PORT ${PORT}`);
});
