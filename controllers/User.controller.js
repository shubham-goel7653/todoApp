const UserQuries = require('../Quries/User.Quries')
const UUID = require('uuid')
const utils = require('../utils/reponse')
const {STATUS_CODE} = require('../helpers/StatusCode')
const CONSTANT = require('../helpers/Constant')

exports.createUser = async (req,res) => {
    try {

        const {body} = req
        const {name,loginId ,password ,mobile ,email ,access ,acessAvailability } = body
        
        let alreadyUser = await UserQuries.findByMobile(mobile)
        if(alreadyUser) {
            return utils.sendResponse(res,STATUS_CODE.OK,CONSTANT.USER_ALREADY_EXISTS,alreadyUser)
        }

        const userData = {
            _id : UUID.v4(),
            name,loginId ,password ,mobile ,email ,access 
        }

        const user = await UserQuries.createUser(userData)
        return utils.sendResponse(res,STATUS_CODE.CREATED,CONSTANT.USER_CREATED_SUCCESSFULL,user)

    }catch(error) {
        console.log('error in createUser controller',error)
        return utils.sendResponse(res,STATUS_CODE.INTERNAL_SERVER_ERROR,CONSTANT.SOMETHING_WENT_WRONG)
    }
}

exports.updateUser = async(req,res) => {
    try {

        const {body} = req
        let updateObj = {$set : {}}
        const filter = {_id : body?.userId}

        updateObj.$set.name = body?.name
        updateObj.$set.acessAvailability = body?.acessAvailability
        updateObj.$set.access = body?.access
        await UserQuries.updateUser({filter,updateObj})
        return utils.sendResponse(res,STATUS_CODE.OK,CONSTANT.Response.USER_UPDATE)
    
    }catch(error) {
        console.log('error in updateUser',error)
        return utils.sendResponse(res,STATUS_CODE.INTERNAL_SERVER_ERROR,CONSTANT.SOMETHING_WENT_WRONG)
    }
}
