import jwt from "jsonwebtoken";
export const context = ({ req }) => {
  try {
    const bearerToken: string = req?.headers?.authorization || ("" as string);
    const token = bearerToken.split(" ")[1];
    const userData = jwt.verify(token, process.env.SECRET) as unknown as {
      _id: string;
    };
    if (!userData) {
      return;
    }
    return { userId: userData._id };
  } catch {
    return;
  }
};
