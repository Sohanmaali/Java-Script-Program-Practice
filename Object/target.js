function Con(name, sername) {
  if (!new.target) {
    // By using the new.target, you can force the callers of the constructor function to use the new keyword. Otherwise, you can throw an error like this:
    throw Error("New Keyword ka use kar ");
  }
  this.name = name;
  this.name.sername = sername;
}
const con = Con("Sohn", "maali");

// ==========================================
console.log(con.name);
function Con(name, sername) {
  if (!new.target) {
    // By using the new.target, you can force the callers of the constructor function to use the new keyword. Otherwise, you can throw an error like this:
    new Con(name, sername);
  }
  this.name = name;
  this.name.sername = sername;
}
const con1 = Con("Sohn", "maali");
console.log(con.name);
