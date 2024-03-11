import jwt from "jsonwebtoken"

import User from "../models/User.js"

const JWT_SECRET = process.env.JWT_SECRET


const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return res.status(400).json({
            status: 'Error', error: 'Login to get User!'
        })
    }

    const decoded = jwt.verify(token, JWT_SECRET)

    const user = await User.findById(decoded.id)

    if(user){

        req.user = {
            id: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname
        }
    }

    next()
}
export { isAuthenticated }