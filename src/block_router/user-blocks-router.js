const express = require("express");
const path = require("path");
const BlockService = require("./block_service");


const UserBlocksRouter = express.Router();


UserBlocksRouter.route("/:user_name")
  .get((req, res, next) => {
    BlockService.getAllBlocksByUser(req.app.get("db"), req.params.user_name)
      .then((blocks) => {
        res.json(blocks);
      })
      .catch(next);
  });

module.exports = UserBlocksRouter;
