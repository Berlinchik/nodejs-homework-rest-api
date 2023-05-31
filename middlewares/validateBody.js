const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const body = req.body;
    const path = req.route.path;
    if (path === "/:contactId/favorite" && !Object.keys(body).length) {
      next(HttpError(400, "missing field favorite"));
    }
    if (!Object.keys(body).length) {
      next(HttpError(400, "missing fields"));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      next(
        HttpError(400, `missing required ${error.details[0].path[0]} field`)
      );
    }
    next();
  };
  return func;
};

module.exports = validateBody;
