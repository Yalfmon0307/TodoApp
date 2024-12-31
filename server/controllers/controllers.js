export class Controller {
    
    async getAll (req, res) {
        return res.send('getAll okey')
    }
    async create (req, res) {
        return res.send('create okey')
    }
    async editOne (req, res) {
        return res.send('idit okey')
    }
    async delete (req, res) {
        return res.send('delete okey')
    }
}