const server = require("./api/server.js");
const welcomeRouter = require("./welcome/welcome-router")
const accountsRouter = require("./accounts/accounts-router")

const PORT = process.env.PORT || 5000;

server.use("/", welcomeRouter)
server.use("/accounts", accountsRouter)


server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
