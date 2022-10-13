import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';

import Account from './../models/Account.js';
import Application from './../models/Application.js';
import Hardware from './../models/Hardware.js';
import Software from './../models/Software.js';
import UpdateAccount from './../models/UpdateAccount.js';
import User from './../models/User.js';
import Admin from './../models/Admin.js';

const dashbord = async (req, res, next) => {
  try {
    const accounts = await Account.find();
    const applications = await Application.find();
    const hardwares = await Hardware.find();
    const softwares = await Software.find();
    const updateAccounts = await UpdateAccount.find();
    const users = await User.find();
    res.json({
      success: true,
      accounts: accounts,
      applications: applications,
      hardwares: hardwares,
      softwares: softwares,
      updateAccounts: updateAccounts,
      users: users
    });
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

const login = async (req, res, next) => {
  try {
  const { email, password } = req.body;
    if(validator.isEmail(email)){
      await Admin.findOne({email: email}).then((user) => {
        console.log(user)
        if(user === null) {
          res.json({
            success:false,
            message:"Utilisateur non trouvé"
          })
        }else {
          bcrypt.compare(password, user.password).then(function(match) {
            if(match) {
              const token = jwt.sign({_id:user._id, nom:user.nom, prenom:user.prenom, email:user.email}, process.env.TOKEN_SECRET, {expiresIn: '24h'})
              res.json({
                success:true,
                message:"Welcome",
                user: user,
                token:token
              })
            }else {
              res.json({
                success:false,
                message:"Mauvais mot de passe. réessayer"
              })
            }
          })
        }
      });
    }else {
      res.json({
        success:false,
        message: "Format d'email invalide !"
      })
    }
  } catch (error) {
    res.json({   
      success:false,         
      message:error
    });
  }
}

/*******Account Requests */
const accountApprovel = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Account.findByIdAndUpdate({_id: id}, {
      $set: {
        approved: true
      }
    }, {new:true}).then(() => {
      res.json({
        success:true,       
        message: "The request is approved"
      })
    })
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

const accountStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const status = req.body.status;
    await Account.findByIdAndUpdate({_id: id}, {
      $set: {
        requestStatus: status
      }
    }, {new:true}).then(() => {
      res.json({
        success:true,       
        message: "The request status is changed"
      })
    })
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

/******* Hardwares Requests */
const hardwareApprovel = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Hardware.findByIdAndUpdate({_id: id}, {
      $set: {
        approved: true
      }
    }, {new:true}).then(() => {
      res.json({
        success:true,       
        message: "The request is approved"
      })
    })
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

const hardwareStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const status = req.body.status;
    await Hardware.findByIdAndUpdate({_id: id}, {
      $set: {
        requestStatus: status
      }
    }, {new:true}).then(() => {
      res.json({
        success:true,       
        message: "The request status is changed"
      })
    })
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

/******* Softwares Requests */
const softwareApprovel = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Software.findByIdAndUpdate({_id: id}, {
      $set: {
        approved: true
      }
    }, {new:true}).then(() => {
      res.json({
        success:true,       
        message: "The request is approved"
      })
    })
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

const softwareStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const status = req.body.status;
    await Software.findByIdAndUpdate({_id: id}, {
      $set: {
        requestStatus: status
      }
    }, {new:true}).then(() => {
      res.json({
        success:true,       
        message: "The request status is changed"
      })
    })
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

/******* Applicatons Requests */
const appApprovel = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Application.findByIdAndUpdate({_id: id}, {
      $set: {
        approved: true
      }
    }, {new:true}).then(() => {
      res.json({
        success:true,       
        message: "The request is approved"
      })
    })
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

const appStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const status = req.body.status;
    await Application.findByIdAndUpdate({_id: id}, {
      $set: {
        requestStatus: status
      }
    }, {new:true}).then(() => {
      res.json({
        success:true,       
        message: "The request status is changed"
      })
    })
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

/**** Update Accounts Requests */
const uptaccountApprovel = async (req, res, next) => {
  try {
    const id = req.params.id;
    await UpdateAccount.findByIdAndUpdate({_id: id}, {
      $set: {
        approved: true
      }
    }, {new:true}).then(() => {
      res.json({
        success:true,       
        message: "The request is approved"
      })
    })
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

const uptaccountStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const status = req.body.status;
    await UpdateAccount.findByIdAndUpdate({_id: id}, {
      $set: {
        requestStatus: status
      }
    }, {new:true}).then(() => {
      res.json({
        success:true,       
        message: "The request status is changed"
      })
    })
  } catch (error) {
    res.json({      
      success:false,       
      error:error
    })
  }
}

/*** Users */
const deleteUser = async(req, res, next) => {
  try {
    const id = req.params.id;

    await User.deleteOne({_id:id});
    res.json({
      success: true,
      message: "User deleted"
    });
  } catch (error) {
    res.json({
      success: false,
      message: error
    });
  }    
}

export {
  dashbord,
  login,
  accountApprovel,
  accountStatus,
  hardwareApprovel,
  hardwareStatus,
  softwareApprovel,
  softwareStatus,
  appApprovel,
  appStatus,
  uptaccountApprovel,
  uptaccountStatus,
  deleteUser
}