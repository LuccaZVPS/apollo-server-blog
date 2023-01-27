import { context } from "../../context";

export const logout = (_, __, { express }: context) => {
  express.res.clearCookie("jwt");
  return { logout: true };
};
