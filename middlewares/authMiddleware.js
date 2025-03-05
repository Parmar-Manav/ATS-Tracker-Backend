import jwt from 'jsonwebtoken';
import { TeamMember } from '../models/index.js';

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error("No authentication token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const teamMember = await TeamMember.findOne({ where: { team_member_id: decoded.id } });

    if (!teamMember) {
      throw new Error("User not found");
    }

    req.teamMember = teamMember;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ error: "Please authenticate" });
  }
};

export default authMiddleware;