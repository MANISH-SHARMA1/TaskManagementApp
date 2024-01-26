const router = require("express").Router();
const taskController = require("../controllers/taskController");
const requireUser = require("../middlewares/requireUser");

router.get("/", requireUser, taskController.getTaskController);
router.post("/", requireUser, taskController.postTaskController);
router.delete("/:taskId", requireUser, taskController.deleteTaskController);

module.exports = router;
