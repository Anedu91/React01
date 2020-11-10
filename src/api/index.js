import db from "./db";

export const Tools = {
  list() {
    return db.tools;
  },
  show(id) {
    return db.tools.find((tool) => tool.id === id);
  },
};
