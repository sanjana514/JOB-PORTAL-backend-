import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({
        message: "Unauthorized",
        success: false,
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    req.id = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAuthenticated;
