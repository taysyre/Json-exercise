fetch('../data/data.json')
.then((Laptop)=>{
    return Laptop.json();
})
.then((data)=> {
    console.table(data.Laptop);
})