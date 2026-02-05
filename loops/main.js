const users = ["Suparno","John","Micah","Arthur"];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

// Break
for (let index=0;index<10;index++) {
    if(index == 5) {
        console.log("Break out");
        break;
    }
    console.log(index);
}

// continue
for(let i=0;i<10;i++) {
    if(i==5) {
        continue;
    }
    console.log(i);
}

// Nested loop
for(let i=0;i<10;i++) {
    for(let j=0;j<5;j++) {
        console.log(i * j);
    }
}

// forEach((elem)=>{})
users.forEach((i) => {
    console.log(i);
});

// while loop

let condition = 10;

while(condition < 10) {
    console.log(condition);
    condition++;
}


do {
    console.log(condition);
    condition++;
}
while(condition < 10)

