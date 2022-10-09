import Software from '../models/Software.js';
/*import { mailHelper as mailer } from './../helpers/mail.helper.js'
const User = require('./../models/User');
const nodemailer = require("nodemailer");
*/

const GetSoftware = async (req, res, next) => {
  try {
    const softs = await Software.find();
    res.json({
      success: true,
      softs:softs
    });
  } catch (error) {
    res.json({     
      success:false,       
      error:error
    });
  }
}

const AddSoftware = async (req, res, next) => {
  try {
    const { userId, region, softwareName, requestedFor, machineName, urgency } = req.body;
    const software = new Software ({
      userId:userId,
      region: region,
      softwareName:softwareName,
      requestedFor:requestedFor,
      machineName:machineName,
      urgency: urgency
    });
    await software.save((err, doc) => {
      if(err){
        res.json({
          success:false, 
          error: err
        });
      }else {
        res.json({
          success:true,
          message: "Le demande de nouveau logiciel a été ajouté avec succés"
        });
        /*findUser(userId, softwareName);
        const msg = "<b>Il y a un demande de nouveau logiciel </b> <br><p>User Id: "+ userId+"</p> <br><p>Logiciel : "+ softwareName+"</p> <br><p>Région: "+region+"</p> <br><p>requested For :"+requestedFor+"</p> <br> <p>Nom de Machine : "+machineName+"</p><br><p>Urgency : "+urgency+"</p>"; // plain text body
        mailer(userId, "DEMANDE DE NOUVEAU SOFTWARE", msg);
        */
      }
    });
  } catch (error) {
    res.json({     
      success:false,       
      error:error
    });
  }
}

const deleteSofware = async(req, res, next) => {
  try {
    const id = req.params.id;

    await Software.deleteOne({_id:id});
    res.json({
      success: true,
      message: "Le demande de nouveau équipement a été supprimé avec succés"
    });
  } catch (error) {
    res.json({
      success: false,
      message: error
    });
  }    
}

export { AddSoftware, GetSoftware, deleteSofware }