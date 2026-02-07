import express from "express";
import { protectRoute } from "../middleware/protectRoute";
import { createSession, endSession, getActiveSessions, getMyRecentSessions, getSessionById, joinSession } from "../controllers/sessionController";

const router = express.Router();

router.post("/", protectRoute, createSession);
router.get("/active", protectRoute, getActiveSessions);
router.get("/my-recent", protectRoute, getMyRecentSessions);


router.get("/:id", protectRoute, getSessionById);
router.post("/:id/join", protectRoute, joinSessionn);
router.post("/:id/end", protectRoute, endSessionon);

export default router;