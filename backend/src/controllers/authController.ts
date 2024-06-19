import { Request, Response } from "express";
import prisma from "../db/prisma.js";

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Credientials doesn't match" });
    }

    const user = await prisma.user.findUnique({ where: { username } });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
  } catch (err) {}
};
export const login = async (req: Request, res: Response) => {};
export const logout = async (req: Request, res: Response) => {};
