const User = require('../model/User.Model')

class UserQuries  {
    async findByMobile(mobile) {
        return User.findOne({mobile})
    }

    async createUser(data) {
        return new User(data).save()
    }

    async updateUser(data) {
        const {filter,updateObj} = data
        return User.updateOne(filter,updateObj)
    }

}

module.exports = new UserQuries()