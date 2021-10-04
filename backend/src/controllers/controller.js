const pool = require('../database')


const controller = {
    getThemes: async function(req, res){
        const sql = 'SELECT id, display_name, icon_img, subscribers, public_description, subreddit_type FROM data'
        await pool.query(sql, (err, result) =>{
            if(err) return res.status(500).send({message: err})
            return res.status(200).send(result)
        })
    },

    getThemeById: async function(req, res){
        const id = req.params.id
        const sql = 'SELECT * FROM data WHERE id = ?'
        await pool.query(sql, id, (err, result) =>{
            if(err) return res.status(500).send({message: err})
            return res.status(200).send(result)
        })
    }
}

module.exports = controller