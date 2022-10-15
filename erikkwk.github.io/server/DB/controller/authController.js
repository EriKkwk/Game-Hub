const db = require('../db')

class AuthController {
    async registration (req, res) {
        try{
            const user_name = req.body.user_name;
            const sql = "INSERT INTO users(user_name) VALUES (?)"
            db.query(sql, [user_name], function (err, results) {
                if (err) console.log(err);
                else console.log("Data updated");
            })
        } catch(e) {
           
        }
    }
    async login(req, res) {
        try {
            const user_name = req.body.user_name;
            db.query("SELECT id FROM users WHERE user_name = ?", [user_name], (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(results);
                }
            }
            )
        }
        catch (e){
        
        }
    }

    
    async getCounts(req, res) {
        try {
            const id = req.body.id;
            db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(results);
                }
            }
            )
        } catch (e) {
            
        }
    }


    async ticTacToe(req, res) {
        try {
            const id = req.body.id
            const sql = "UPDATE users SET TicTacToe = TicTacToe + 1 WHERE id = ?"
            db.query(sql, [id], function (err, results) {
                if(err){
                    console.log(err);
                } else {
                    console.log(results);
                }
            })
        } catch (e) {
            
        }
    }
    async squares(req, res) {
        try {
            const id = req.body.id
            const sql = "UPDATE users SET Cubes = Cubes + 1 WHERE id = ?"
            db.query(sql, [id], function (err, results) {
                if(err){
                    console.log(err);
                } else {
                    console.log(results);
                }
            })
        } catch (e) {
            
        }
    }
    async rockSpissorsPaperGame(req, res) {
        try {
            const id = req.body.id
            const sql = "UPDATE users SET RPS = RPS + 1 WHERE id = ?"
            db.query(sql, [id], function (err, results) {
                if(err){
                    console.log(err);
                } else {
                    console.log(results);
                }
            }) 
        } catch (e) {
            
        }
    }
    async rocketGame(req, res) {
        try {
            const id = req.body.id
            const sql = "UPDATE users SET Rocket = Rocket + 1 WHERE id = ?"
            db.query(sql, [id], function (err, results) {
                if(err){
                    console.log(err);
                } else {
                    console.log(results);
                }
            })
        } catch (e) {
            
        }
    }
}

module.exports = new AuthController()