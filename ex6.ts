// Q:6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let Name:string= " \t   Bisma Gondal   \n"
console.log("Name with whitespace,"+ Name)
let trimmedname:string=Name.trim();
console.log("Name without whitespace,"+trimmedname)

