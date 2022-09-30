const { options } = require("../app");

const loginCtl = {};

loginCtl.showTipo = (req, res) => {
  res.render("cliente/vista", {
    user: {
      name: "Marlon",
      lastName: "Flores",
      mail: "mjn.flores@yavirac.edu.ec",
      cellphone: "0968614467",
      userName: "Padawan",
      typeUser: "Niño(5-10 años)",
    },
  });
};

module.exports = loginCtl;
