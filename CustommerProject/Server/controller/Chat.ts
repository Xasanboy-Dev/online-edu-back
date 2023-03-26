import { user } from "@prisma/client";
import { Request, Response } from "express";
import { VerifyToken } from "../database/Auth/token";
import { getOneUserById } from "../database/user";

export async function getAllCHattingUsers(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    if (token) {
      const ValidateToken = VerifyToken(token);
      const { chattingUsers }: { chattingUsers: number[] } = req.body;
      if (chattingUsers) {
        let arr: user[] = [];
        chattingUsers.forEach(async (id: number) => {
          let user = getOneUserById(id);
          user
            .then((user) => {
              arr.push(user!);
            })
            .catch((err) => {
              console.log(err);
            });
          return res.status(200).json({ message: "All users", users: [arr] });
        });
      } else {
        return res.status(404).json({ message: "You have some problems!" });
      }
    } else {
      return res.status(401).json({ message: "You must to Login!" });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}
