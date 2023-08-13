module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1]; // Bearer
      if (!token) {
        return res.status(401).json({ message: "Не авторизовано" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
  
      req.user = decoded;
      console.log(decoded, idUser, "req.user = decoded;")
      if (idUser) {
        req.user.idUser = idUser; // Додайте idUser до об'єкту req.user
      }
      next();
    } catch (e) {
      res.status(401).json({ message: "Не авторизовано" });
    }
  };