import {Router} from 'express'
import {registerUser, login1, login2,logoutUser,refreshAccessToken} from "../controllers/user.controller.js"
import {verifyJWT} from '../middlewares/auth.middleware.js'


// const data = ()=>{
//     const tempdata = [{
//         "fullName":"Harsh"
//     }]
// }
const router = Router()

router.route('/signup').post(registerUser)
router.route('/signin').post(login1)
router.route('/authenticate').post(login2)
router.route('/logout').post(verifyJWT,logoutUser)
router.route('/refreshToken').post(refreshAccessToken)

// router.route('/data').get(data)

export default router;