// scheme-model
const db = require("../../data/db-config");

module.exports = {
  find() {
    return db("schemes");
  },
  findById(id) {
    return db("schemes").where({ id }).first();
  },
  findSteps(id) {
    // select *
    // from schemes sc
    // join steps st
    //   on sc.id = st.scheme_id
    // where sc.id = id
    // order by step_number

    return db("schemes as sc")
      .where("sc.id", id)
      .join("steps as st", "sc.id", "st.scheme_id")
      .orderBy("st.step_number");
  },
  add(scheme) {
    return db("schemes")
      .insert(scheme)
      .then(([id]) => {
        return db("schemes").where("id", id).first();
      });
  },
  update(changes, id) {
    return db("schemes")
      .where("id", id)
      .update(changes)
      .then(() => {
        return db("schemes").where("id", id).first();
      });
  },
  remove(id) {
    return db("schemes").where("id", id).del();
  },
};
