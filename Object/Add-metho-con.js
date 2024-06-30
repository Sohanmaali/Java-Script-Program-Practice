function Con(name, sername) {
  this.name = name;
  this.name.sername = sername;
  this.innerFun = () => {
    console.log("Inner fun");
    return 10;
  };
}
const con = new Con("Sohn", "maali");
// console.log(Con());
console.log(con.innerFun());
