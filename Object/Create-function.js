const obj = {
     name: "sohan",
     roll: 101,
     allDetail: function () {
          return `name =  ${this.name}       roll = ${this.roll}`;
     }
};
console.log(obj.allDetail());