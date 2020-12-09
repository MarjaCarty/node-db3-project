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
  add(scheme) {},
  update(changes, id) {},
  remove(id) {},
};
