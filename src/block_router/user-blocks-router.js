const express = require("express");
const path = require("path");
const BlockService = require("./block_service");
const { requireAuth } = require("../middleware/jwt-auth");
const { requireAPIToken } = require("../middleware/api-auth");

const UserBlocksRouter = express.Router();
const jsonParser = express.json();

UserBlocksRouter.route("/:user_name")
  // .all(requireAPIToken)
  .get((req, res, next) => {
    BlockService.getAllBlocksByUser(req.app.get("db"), req.params.user_name)
      .then((blocks) => {
        res.json(blocks);
      })
      .catch(next);
  });

module.exports = UserBlocksRouter;
