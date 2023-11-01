const {STATUS_CODE} = require('../helpers/StatusCode')
const CONSTANT = require('../helpers/Constant')
const utils = require('../utils/reponse')

exports.validateCreateUser = (req,res,next) => {
    try {

        let {body} = req
        const missingParams = CONSTANT.USER_REQUIRED_KEYS.filter((key) => !body[key]);

        if(missingParams.length) return utils.sendResponse(res,STATUS_CODE.BAD_REQUEST,CONSTANT.PARAMETER_MISSING,missingParams)
        if(!validateObject(body)) return utils.sendResponse(res,STATUS_CODE.BAD_REQUEST,CONSTANT.USER_AUTH)
        next()
    } catch(error) {
        console.log('error in validateCreateUser',error)
        return utils.sendResponse(res,STATUS_CODE.BAD_REQUEST,CONSTANT.SOMETHING_WENT_WRONG)
    }
}

exports.validateUpdateUser = (req,res,next) => {
    try {
        let {body} = req
        let {mobile,email,loginId}  = body

        if(mobile || email || loginId) return utils.sendResponse(res,STATUS_CODE.BAD_REQUEST,CONSTANT.USER_UPDATE_ERROR)

        next()
    }catch(error) {
        console.log('error in update user',error)

    }
}

const validateObject = (body) => {
    const {password,mobile} = body
    console.log(password.length , mobile.length)
    if(password.length < 8) return false
    if(mobile.length !== 10) return false

    return true
}