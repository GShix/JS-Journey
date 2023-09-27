const Characters = [
    {
        name:"Dambar",
        height: '172',
        mass: '62',
        eye_color: 'black',
        gender:'male'
    },
    {
        name:"Ram",
        height: '162',
        mass: '72',
        eye_color: 'black',
        gender:'male'
    },
    {
        name:"Sita",
        height: '132',
        mass: '58',
        eye_color: 'white',
        gender:'female'
    },
    {
        name:"Babita",
        height: '120',
        mass: '52',
        eye_color: 'blue',
        gender:'female'
    },
]
// Get an array of all names
const names=Characters.map((ch)=>{
    return ch.name;
})
console.log(names);

// Get an array of objects with just name and height value(properties)
const getNameHeight = Characters.map((ch)=>{
    return {
        Name: ch.name,
        Heght: ch.height

    }
})
console.log(getNameHeight);