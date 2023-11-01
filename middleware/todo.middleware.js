const {STATUS_CODE} = require('../helpers/StatusCode')
const CONSTANT = require('../helpers/Constant')
const utils = require('../utils/reponse') 

exports.validateCreateTodo = (req,res,next) => {
    try {

        let {body} = req

        if(body.userId) return utils.sendResponse()

    }catch(error) {
        console.log('error in validateCreateTodo',error)
    }
}