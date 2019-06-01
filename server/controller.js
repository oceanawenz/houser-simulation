module.exports = {
    getHouses: (req, res, next) => {
        const db = req.app.get('db');
        db.get_houses()
        .then((get_houses) => res.status(200).send(get_houses))
        .catch(err => {
            res.status(500).send(err);
        })
    },
    //add new house to the db
    postHouse: (req, res, next) => {
        const db = req.app.get('db');
        const { name, address, city, state, zipcode } = req.body;  
        db
        .create_house([name, address, city, state, zipcode])
        .then((create_house) => res.status(200).send(create_house))
        .catch(err => {
            res.status(500).send(err)
        })
    },

    updateHouse: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params
        const { name } = req.query;
        db
        .update_house([id, name])
        .then((update_house)=> res.status(200).send(update_house))
        .catch(err => {
            res.status(500).send()
        })


    },

    deleteHouse: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_house([id]).then( (delete_house) => {
            res.status(200).send(delete_house)
        }).catch(err => {
            res.status(500).send("Something is wroing")
        })
    }


}
