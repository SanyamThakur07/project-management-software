import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, signUpSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), (c) => {
    return c.json({ message: "Login successful" });
  })
  .post("/register", zValidator("json", signUpSchema), (c) => {
    return c.json({ message: "Registration successful" });
  });

export default app;
