// Object
// var object={key1:value1, key2:value2,... so on} -- Syntax

var schools= {
name: "DIS",
Stream: {Science: ["Maths","BIO"], Commerce: ["Maths","IP"]},
classes: ["11","12"],
Strength: 50
}

console.log(schools.name);
console.log(schools.classes);
console.log(schools.Strength);
console.log(schools.Stream);
console.log(schools.Stream.Science)

console.log(schools["name"])
console.log(schools["classes"])
console.log(schools["Strength"])
console.log(schools["Stream"])
console.log(schools["classes"].length)

const keys= Object.keys(schools);
console.log(keys)

const values=Object.values(schools);
console.log(values)

for (let key in schools) {
    console.log(key, schools[key]);
  }