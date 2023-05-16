


export const addNewPlayer = (req, res) => {
    res.status(201).send({message: 'Player has been created succesfully'});
}

export const getPLayers = (req, res) => {
    res.status(201).send({message: 'Here are all the players in the db'});
}