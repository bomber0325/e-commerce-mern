const User = require('../models/User')
const bcrypt = require('bcrypt')

const CTRLS = {}

CTRLS.getUsers = (req,res)=>{
  
}

CTRLS.getUser = (req,res)=>{

}

CTRLS.saveUser = (req,res)=>{

  const user = new User({
    displayName: req.body.displayName,
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    avatar: req.body.avatar,
    role: req.body.role,
    status: req.body.status
  })

  console.log(req.body)

  user.save((err,newUser)=>{
    if (err) {
      return res.status(401).json({
        ok: false,
        err
      })
    }

    res.status(201).json({
      ok: true,
      user: newUser
    })
  })
  
  
}

CTRLS.updateUser = (req,res)=>{

}

CTRLS.deleteUser = (req,res)=>{

}

module.exports = CTRLS