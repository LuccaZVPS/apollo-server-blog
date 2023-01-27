import jwt from "jsonwebtoken";
export const auth = async (req) => {
  try {
    const token = cookieParser(req.headers.cookie);
    const userData = jwt.verify(token, process.env.SECRET) as unknown as {
      _id: string;
    };
    if (!userData) {
      return;
    }
    return userData._id;
  } catch {
    return;
  }
};
const cookieParser = (cookie: string) => {
  const cookieArray = cookie.split(";");
  var token = "";
  for (let cookies of cookieArray) {
    const cookieName = cookies.split("=");
    if (cookieName[0].trim() === "jwt") {
      token = cookieName[1];
    }
  }
  return token;
};
