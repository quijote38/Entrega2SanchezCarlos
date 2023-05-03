
const fetchSimulation  = (dataBase, time) =>{
    return new Promise((resolve, rejact) => {
    setTimeout (() =>{
        resolve (dataBase);
        rejact (new Error ("No funcionó") )
    }, time )
})
}

export default fetchSimulation; 