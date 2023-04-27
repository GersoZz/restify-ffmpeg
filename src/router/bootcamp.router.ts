import {Router} from 'restify-router'
import bootcampController from '../controller/bootcamp.controller'
const bootcampRoute = new Router()

bootcampRoute.get('/session', async( req, res)=>{
    try {

        const oauthResponse = await bootcampController.getSession()
        return res.json({success: true, message: 'Estamos conectados', oauth2: oauthResponse})
    } catch (error) {
        return res.json({succes: false, error: true})
    }
})

export default bootcampRoute