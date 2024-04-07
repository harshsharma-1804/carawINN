import {Router} from 'express'
import {googleOauth,registerUser, login1, login2,logoutUser,refreshAccessToken} from "../controllers/user.controller.js"
import {verifyJWT} from '../middlewares/auth.middleware.js'
import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth2'

// ----------------------Passport Google Strategy-------------------------------------
passport.use(
    "google",
    new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5173/auth/google/carawinn",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },(accessToken, refreshToken, profile, done) => googleOauth(accessToken, refreshToken, profile, done))
)
// -----------------------------------------------------------------------------------


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
router.route('/auth/google').get(passport.authenticate("google",{scope:['profile','email']}))

// router.route('/data').get(data)

export default router;