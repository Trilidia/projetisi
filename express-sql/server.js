'use strict'

// **********************
// Configurtation Serveur
// **********************

const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const cors = require('cors')
const app = express()

// lulu 

const multer = require('multer')
const uuidv4 = require('uuid/v4') // to rename the files (security reasons)
const path = require('path')
const fs = require('fs')
const P = require('bluebird')
const fse = require('fs-extra')

// lulu

const PORT = 8090 // sera dans un include par la suite (config)
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'
const HTTP_OK = 200

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

let RESPONSE_SQL = []
let SESSIONFORSELECT = []
let PROGRAMFORM = []
let STUDENTS = []
let STATUTS = []
let VERDICTS = []
let STUDENTFILTRE = []
let SESSIONS = []
let PROGRAMS = []
let LOGIN = 0
let URL = [];
let STUDENTFILTRE2 = false;
let COMMENT = []





// **********************
// Information BD sera dans un include par la suite
// **********************

const hostDB = "192.168.0.55"
const con = mysql.createConnection({
  host: hostDB,
  user: "root",
  password: "abc123...",
  database: "extranetisi",
  port: 3307
});





// **********************
// GET ET POST REQUEST + RESPONSE
// **********************

app.get('/', function (request, response) {
  response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
  response.end('<h1>Serveur Express SQL : Projet Final ISI</h1>')
})



// ********************************************************************// ********************************************************************
// *** requete MARCANDRE MARCANDRE MARCANDRE MARCANDRE MARCANDRE
// ********************************************************************// ********************************************************************

app.get('/programform', function (request, response) {
  getAllProgramForForm(request, response, writeJSONResponse)
})

app.post('/createstudent', function (req, res) {
  console.log("MARC ANDRE CREER UN STUDENT");
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const birthday = req.body.birthday
  const idnumber = req.body.idnumber
  const hasCAQorMIDI = req.body.hasCAQorMIDI
  const programid = req.body.programid
  const sessionid = req.body.sessionid
  const verdictid = req.body.verdictid
  const statutid = req.body.statutid
  const isfeesprepaid = req.body.isfeesprepaid
  const isexchangestudent = req.body.isexchangestudent
  const streetname = req.body.streetname
  const streetno = req.body.streetno
  const apt = req.body.apt
  const city = req.body.city
  const country = req.body.country
  const province = req.body.province
  const postalcode = req.body.postalcode
  const pobox = req.body.pobox
  const isfactured = req.body.isfactured
  const isbillpaid = req.body.isbillpaid
  const email = req.body.email
  const telephone = req.body.telephone
  console.log("firstname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, verdictid, statutid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, isfactured, isbillpaid, email, telephone");
  console.log(firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, verdictid, statutid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, isfactured, isbillpaid, email, telephone)
  createStudent(firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, verdictid, statutid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, isfactured, isbillpaid, email, telephone);
});

app.post('/updatestudentpersonnal', function (req, res) {
  console.log("MARC ANDRE UPDATE UN STUDENT PERSONNAL");
  const idstudent = req.body.idstudent
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const birthday = req.body.birthday
  const idnumber = req.body.idnumber
  const hasCAQorMIDI = req.body.hasCAQorMIDI
  const programid = req.body.programid
  const sessionid = req.body.sessionid
  const isfeesprepaid = req.body.isfeesprepaid
  const isexchangestudent = req.body.isexchangestudent
  const streetname = req.body.streetname
  const streetno = req.body.streetno
  const apt = req.body.apt
  const city = req.body.city
  const country = req.body.country
  const province = req.body.province
  const postalcode = req.body.postalcode
  const pobox = req.body.pobox
  const email = req.body.email
  const telephone = req.body.telephone
  console.log("  console.log(id, firstname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, email, telephone");
  console.log(idstudent, firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, email, telephone)
  updateStudent2(idstudent, firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, email, telephone);
});

app.post('/updatestudentadmin', function (req, res) {
  console.log("MARC ANDRE UPDATE UN STUDENT ADMIN");
  const idstudent = req.body.idstudent
  const isfactured = req.body.isfactured
  const isbillpaid = req.body.isbillpaid
  const verdictid = req.body.verdictid
  const statutid = req.body.statutid
  console.log(idstudent, isfactured, isbillpaid, verdictid, statutid)
  updateStudent3(idstudent, isfactured, isbillpaid, verdictid, statutid);
});

app.post('/updatestudent', function (req, res) {
  console.log("MARC ANDRE UPDATE UN STUDENT");
  const idstudent = req.body.idstudent
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const birthday = req.body.birthday
  const idnumber = req.body.idnumber
  const hasCAQorMIDI = req.body.hasCAQorMIDI
  const programid = req.body.programid
  const sessionid = req.body.sessionid
  const verdictid = req.body.verdictid
  const statutid = req.body.statutid
  const isfeesprepaid = req.body.isfeesprepaid
  const isexchangestudent = req.body.isexchangestudent
  const streetname = req.body.streetname
  const streetno = req.body.streetno
  const apt = req.body.apt
  const city = req.body.city
  const country = req.body.country
  const province = req.body.province
  const postalcode = req.body.postalcode
  const pobox = req.body.pobox
  const isfactured = req.body.isfactured
  const isbillpaid = req.body.isbillpaid
  const email = req.body.email
  const telephone = req.body.telephone
  console.log("  console.log(id, firstname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, verdictid, statutid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, isfactured, isbillpaid, email, telephone");
  console.log(idstudent, firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, verdictid, statutid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, isfactured, isbillpaid, email, telephone)
  updateStudent(idstudent, firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, verdictid, statutid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, isfactured, isbillpaid, email, telephone);
});

app.get('/studenttest', function (request, response) {
  getStudentTest(request, response, writeJSONResponse)
})


app.post('/getstudentbyidnumber', function (request, response) {
  const idnumber = request.body.idnumber
  console.log("MARC ANDRE // getstudentbyidnumber " + idnumber)
  console.log("VALEUR AVANT FUNCTON STUDENT FILTRE 2 " + STUDENTFILTRE2)
  getAllStudentByIdNumber2(idnumber, request, response, writeJSONResponse)
})


app.get('/getsessionforselect', function (req, res) {
  getSessionForSelect(req, res, writeJSONResponse)
});

app.post('/getcommentbyidstudent', function (request, response) {
  const idstudent = request.body.idstudent
  console.log("MARC ANDRE-KHOULOUD // getcommentbyidstudent " + idstudent)
  getCommentByIdStudent(idstudent, request, response, writeJSONResponse)
})

// ********************************************************************// ********************************************************************
// *** requete KHOULOUD KHOULOUD KHOULOUD KHOULOUD KHOULOUD KHOULOUD
// ********************************************************************// ********************************************************************

app.get('/getstudent', function (request, response) {
  getAllStudent(request, response, writeJSONResponse)
})

app.get('/getallstatut', function (request, response) {
  getAllStatut(request, response, writeJSONResponse)
})

app.get('/getallverdict', function (request, response) {
  getAllVerdict(request, response, writeJSONResponse)
})

app.post('/getstudentbyallfilter', function (request, response) {
  const idnumber = request.body.idnumber
  const lastname = request.body.lastname
  const statut = request.body.statut
  const verdict = request.body.verdict
  console.log(idnumber, lastname, statut, verdict)

  // A FINIR
  if (idnumber != '') {
    getAllStudentByIdNumber(idnumber, request, response, writeJSONResponse)
  } else if (lastname != '') {
    getAllStudentByName(lastname, request, response, writeJSONResponse)
  } else if (statut != '' && verdict == '') {
    getAllStudentByStatut(statut, request, response, writeJSONResponse)
  } else if (verdict != '' && statut == '') {
    getAllStudentByVerdict(verdict, request, response, writeJSONResponse)
  } else if (statut != '' && verdict != '') {
    getAllStudentByVerdictAndStatut(verdict, statut, request, response, writeJSONResponse)
  }
  else {
    console.log("TEST FILTRE RATER ")
  }

})

app.post('/savechanges', function (request, response) {
  const idstudent = request.body.idstudent
  const statutid = request.body.statutid
  const verdictid = request.body.verdictid
  const isfactured = request.body.isfactured
  const isbillpaid = request.body.isbillpaid
  console.log("KHOULOUD // SAVES CHANGES" + idstudent, statutid, verdictid, isfactured, isbillpaid)
  saveChanges(idstudent, statutid, verdictid, isfactured, isbillpaid)
})

app.post('/addcomment', function (request, response) {
  const studentid = request.body.studentid
  const nameuser = request.body.nameuser
  const text = request.body.text
  console.log("KHOULOUD // ADD COMMENT" + studentid, nameuser, text)
  addComment(studentid, nameuser, text)
})

app.post('/getstudentwithparamsbyid', function (request, response) {
  const idstudent = request.body.idstudent
  console.log("KHOULOUD // getstudentwithparamsbyid " + idstudent)
  getStudentWithParamsById(idstudent, request, response, writeJSONResponse)
})



// ********************************************************************// ********************************************************************
// *** ALEX ALEX ALEX ALEX ALEX ALEX ALEX ALEX ALEX ALEX ALEX ALEX ALEX
// ********************************************************************// ********************************************************************

app.post('/getstudentbyid', function (request, response) {
  const idstudent = request.body.idstudent
  getAllStudentByIdStudent(idstudent, request, response, writeJSONResponse)

})

// ********************************************************************// ********************************************************************
// *** requete cedrik cedrik cedrik cedrik cedrik cedrik cedrik cedrik 
// ********************************************************************// ********************************************************************

app.get('/getsession', function (request, response) {
  getAllSession(request, response, writeJSONResponse)
})

app.post('/getsessionbyid', function (req, res) {
  const idsession = req.body.idsession
  console.log("CEDRIK GETSESSION BY ID" + idsession)
  getSessionById(idsession, req, res, writeJSONResponse)
});

app.post('/addsession', function (req, res) {
  const name = req.body.namesession
  const year = req.body.yearsession
  const datestart = req.body.datestartsession
  const dateend = req.body.dateendsession
  const isactive = req.body.isactive
  insertSession(name, year, datestart, dateend, isactive)
});

app.post('/updatesession', function (req, res) {
  console.log()
  const idsession = req.body.idsession
  const namesession = req.body.namesession
  const yearsession = req.body.yearsession
  const datestartsession = req.body.datestartsession
  const dateendsession = req.body.dateendsession
  const isactive = req.body.isactive
  console.log("VALUE TEST UPDATE" + idsession, namesession, yearsession, datestartsession, dateendsession, isactive)
  updateSession(idsession, namesession, yearsession, datestartsession, dateendsession, isactive)
});

app.post('/updateactivesession', function (req, res) {
  const idsession = req.body.idsession
  const isactive = req.body.isactive
  console.log("updateactivesession" + idsession, isactive)
  updateActiveSession(idsession, isactive)
});

app.get('/getprogram', function (request, response) {
  getAllProgram(request, response, writeJSONResponse)
})

app.post('/getprogrambyid', function (request, response) {
  const idprogram = request.body.idprogram
  getProgramById(idprogram, request, response, writeJSONResponse)
})

app.post('/addprogram', function (req, res) {
  const titleprogram = req.body.titleprogram
  const sigle = req.body.sigle
  const totalduration = req.body.totalduration
  const intershipduration = req.body.intershipduration
  const level = req.body.level
  const price = req.body.price
  const hasintership = req.body.hasintership
  const isactive = req.body.isactive
  const conditionofaccecptance = req.body.conditionofaccecptance
  const typeoftraining = req.body.typeoftraining
  const timestartprogram = req.body.timestartprogram
  const timeendprogram = req.body.timeendprogram
  const academicstatus = req.body.academicstatus
  console.log("titleprogram, sigle, totalduration, intershipduration, level, price, hasintership, isactive, conditionofaccecptance, typeoftraining, timestartprogram, timeendprogram, academicstatus")
  console.log("CEDRIK ADD PROGRAMM // " + titleprogram, sigle, totalduration, intershipduration, level, price, hasintership, isactive, conditionofaccecptance, typeoftraining, timestartprogram, timeendprogram, academicstatus)
  insertProgram(titleprogram, sigle, totalduration, intershipduration, level, price, hasintership, isactive, conditionofaccecptance, typeoftraining, timestartprogram, timeendprogram, academicstatus)
});

app.post('/updateprogram', function (req, res) {
  const idprogram = req.body.idprogram
  const titleprogram = req.body.titleprogram
  const sigle = req.body.sigle
  const totalduration = req.body.totalduration
  const intershipduration = req.body.intershipduration
  const level = req.body.level
  const price = req.body.price
  const hasintership = req.body.hasintership
  const isactive = req.body.isactive
  const conditionofaccecptance = req.body.conditionofaccecptance
  const typeoftraining = req.body.typeoftraining
  const timestartprogram = req.body.timestartprogram
  const timeendprogram = req.body.timeendprogram
  const academicstatus = req.body.academicstatus
  console.log(" idprogram, titleprogram, sigle, totalduration, intershipduration, level, price, hasintership, isactive, conditionofaccecptance, typeoftraining, timestartprogram, timeendprogram, academicstatus")
  console.log("CEDRIK UPDATE PROGRAMM // " + idprogram, titleprogram, sigle, totalduration, intershipduration, level, price, hasintership, isactive, conditionofaccecptance, typeoftraining, timestartprogram, timeendprogram, academicstatus)
  updateProgram(idprogram, titleprogram, sigle, totalduration, intershipduration, level, price, hasintership, isactive, conditionofaccecptance, typeoftraining, timestartprogram, timeendprogram, academicstatus)
});

app.post('/deleteprogram', function (req, res) {
  const idprogram = req.body.idprogram
  deleteProgram(idprogram)
});


//*************************************************************// ********************************************************************
// MOUSSA MOUSSA MOUSSA MOUSSA MOUSSA MOUSSA MOUSSA MOUSSA 
//**************************************************************// ********************************************************************

app.post('/testlogin', function (request, response) {
  const username = request.body.username
  const password = request.body.password
  console.log("TEST LOGIN // " + username, password)
  testLogin(username, password, request, response, writeJSONResponse);
});

app.post('/createuser', function (request, response) {
  const username = request.body.username
  const password = request.body.password
  const isadmin = request.body.isadmin
  console.log("MOUSSA CREATE USER // " + username, password, isadmin)
  createUser(username, password, isadmin);
});



//*************************************************************// ********************************************************************
// LULU LULU LULU LULU LULU LULU LULU LULU LULU LULU LULU LULU
//**************************************************************// ********************************************************************

app.post('/addurl', function (req, res) {
  const url = req.body.url
  const studentid = req.body.studentid
  const name = req.body.name
  insertUrl(url, studentid, name);
});

app.post('/geturlbyid', function (req, res) {
  const studentid = req.body.studentid
  getUrlById(studentid, req, res, writeJSONResponse)

});


/* ne pas enlever, ce nest pas un simple console.log, le app.listen
 effecture une action de verification lecoute du port du serveur */
app.listen(PORT, function () {
  console.log('Server listening on: http://localhost:%s', PORT)
})

function writeJSONResponse(request, response, result) {
  //console.log('ID:   ', request.params.id ? request.params.id : '')
  //console.log('BODY: ', request.body)
  response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
  response.end(JSON.stringify(result, null, 2))
}

// lulu 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  if (req.method === 'OPTIONS') {
    res.write(':)')
    res.header('Access-Control-Allow-Methods', 'GET')
    res.end()
    return res.status(200).json({})
  } else next()
})

// lulu



// **********************
// FONCTION BD, seront dans un fichier include par la suite egalement
// **********************



// **** FONCTION MARC ANDRE

function getCommentByIdStudent(idstudent, request, response, writeJSONResponse) {
  con.query("SELECT* FROM comment WHERE studentid = '" + idstudent + "'", function (err, result, fields) {
    if (err) throw err;
    console.log("MARC ANDRE KHOULOUD // getCommentByIdStudent ", JSON.stringify(result))
    COMMENT = result
    writeJSONResponse(request, response, COMMENT)
  });
}

function getAllProgramForForm(request, response, writeJSONResponse) {
  con.query("SELECT idprogram as value, titleprogram as label FROM program order by titleprogram ASC", function (err, result, fields) {
    if (err) throw err;
    console.log("MARC ANDRE // getAllProgramForForm ", JSON.stringify(result))
    PROGRAMFORM = result
    writeJSONResponse(request, response, PROGRAMFORM)
  });

}

function getStudentTest(request, response, writeJSONResponse) {
  con.query("SELECT * FROM student where idstudent=12;", function (err, result, fields) {
    if (err) throw err;
    console.log("MARC ANDRE // getStudentTest", JSON.stringify(result))
    RESPONSE_SQL = result
    writeJSONResponse(request, response, RESPONSE_SQL)
  });

}

function getSessionForSelect(req, res, writeJSONResponse) {
  con.query("SELECT concat(namesession,' ', yearsession) as label, idsession as value FROM session", function (err, result, fields) {
    if (err) throw err;
    console.log("MARC ANDRE // getSessionForSelect", JSON.stringify(result))
    SESSIONFORSELECT = result
    writeJSONResponse(req, res, SESSIONFORSELECT)
  });

}

function createStudent(firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, verdictid, statutid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, isfactured, isbillpaid, email, telephone) {
  const sql = "INSERT INTO student (firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, verdictid, statutid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, isfactured, isbillpaid, email, telephone) VALUES ?";
  const values = [[firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, verdictid, statutid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, isfactured, isbillpaid, email, telephone]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function updateStudent(idstudent, firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, verdictid, statutid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, isfactured, isbillpaid, email, telephone) {
  const sql = "UPDATE student SET firstname = '" + firstname + "', lastname= '" + lastname + "', birthday= '" + birthday + "', idnumber= '" + idnumber + "', hasCAQorMIDI= '" + hasCAQorMIDI + "', province= '" + province + "', programid= '" + programid + "', sessionid= '" + sessionid + "', verdictid= '" + verdictid + "', statutid= '" + statutid + "',  isfeesprepaid= '" + isfeesprepaid + "', isexchangestudent= '" + isexchangestudent + "', streetname= '" + streetname + "', streetno= '" + streetno + "', apt= '" + apt + "', city= '" + city + "', country= '" + country + "', postalcode= '" + postalcode + "', pobox= '" + pobox + "', isfactured= '" + isfactured + "', isbillpaid= '" + isbillpaid + "', email= '" + email + "', telephone= '" + telephone + "' WHERE idstudent = '" + idstudent + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}


// p 
function updateStudent2(idstudent, firstname, lastname, birthday, idnumber, hasCAQorMIDI, programid, sessionid, isfeesprepaid, isexchangestudent, streetname, streetno, apt, city, country, province, postalcode, pobox, email, telephone) {
  const sql = "UPDATE student SET firstname = '" + firstname + "', lastname= '" + lastname + "', birthday= '" + birthday + "', idnumber= '" + idnumber + "', hasCAQorMIDI= '" + hasCAQorMIDI + "', province= '" + province + "', programid= '" + programid + "', sessionid= '" + sessionid + "',  isfeesprepaid= '" + isfeesprepaid + "', isexchangestudent= '" + isexchangestudent + "', streetname= '" + streetname + "', streetno= '" + streetno + "', apt= '" + apt + "', city= '" + city + "', country= '" + country + "', postalcode= '" + postalcode + "', pobox= '" + pobox + "', email= '" + email + "', telephone= '" + telephone + "' WHERE idstudent = '" + idstudent + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function updateStudent3(idstudent, isfactured, isbillpaid, verdictid, statutid, ) {
  const sql = "UPDATE student SET  verdictid= '" + verdictid + "', statutid= '" + statutid + "', isfactured= '" + isfactured + "', isbillpaid= '" + isbillpaid + "' WHERE idstudent = '" + idstudent + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record updated");
  });
}


// **** FONCTION CEDRIK

// select session all
function getAllSession(request, response, writeJSONResponse) {
  con.query("SELECT* FROM session order by yearsession, namesession ASC", function (err, result, fields) {
    if (err) throw err;
    SESSIONS = result
    console.log("CEDRIK // getAllSession" + SESSIONS)
    writeJSONResponse(request, response, SESSIONS)
    SESSIONS = []
  });
}

function getSessionById(idsession, request, response, writeJSONResponse) {
  con.query("SELECT* FROM session  WHERE idsession = '" + idsession + "'", function (err, result, fields) {
    if (err) throw err;
    SESSIONS = result
    console.log("CEDRIK // getAllSessionBYID" + SESSIONS)
    writeJSONResponse(request, response, SESSIONS)
    SESSIONS = []
  });
}



// insert session 
function insertSession(name, year, datestart, dateend, isactive) {
  console.log(name, year, datestart, dateend, isactive)
  const sql = "INSERT INTO session (namesession, yearsession, datestartsession, dateendsession, isactive) VALUES ?";
  const values = [[name, year, datestart, dateend, isactive]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}
// edit session
function updateSession(idsession, name, year, datestart, dateend, isactive) {
  console.log("CEDRIK UPDATE SESSION")
  const sql = "UPDATE session SET namesession = '" + name + "', yearsession= '" + year + "', datestartsession= '" + datestart + "', dateendsession= '" + dateend + "', isactive= '" + isactive + "' WHERE idsession = '" + idsession + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}
// delete session (update valeur active) 
function updateActiveSession(idsession, isactive) {
  const sql = "UPDATE session SET isactive = '" + isactive + "' WHERE idsession = '" + idsession + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records set Inactive: " + result.affectedRows);
  });
}



// select program all
function getAllProgram(request, response, writeJSONResponse) {
  con.query("SELECT * FROM program p join typetraining as t on p.typeoftraining = t.idtypetraining join academicstatus as a on p.academicstatus = a.idacademicstatus", function (err, result, fields) {
    if (err) throw err;
    console.log("CEDRIK // getAllProgram", JSON.stringify(result))
    PROGRAMS = result
    writeJSONResponse(request, response, PROGRAMS)
  });





}
// get programById
function getProgramById(idprogram, request, response, writeJSONResponse) {
  con.query("SELECT* FROM program WHERE idprogram='" + idprogram + "'", function (err, result, fields) {
    if (err) throw err;
    console.log("CEDRIK // getAllProgramBYID", JSON.stringify(result))
    PROGRAMS = result
    writeJSONResponse(request, response, PROGRAMS)
  });
}


// insert program
function insertProgram(titleprogram, sigle, totalduration, intershipduration, level, price, hasintership, isactive, conditionofaccecptance, typeoftraining, timestartprogram, timeendprogram, academicstatus) {
  const sql = "INSERT INTO program (titleprogram, sigle, totalduration, intershipduration, level, price, hasintership,  isactive,conditionofaccecptance,typeoftraining,timestartprogram,timeendprogram,academicstatus) VALUES ?";
  const values = [[titleprogram, sigle, totalduration, intershipduration, level, price, hasintership, isactive, conditionofaccecptance, typeoftraining, timestartprogram, timeendprogram, academicstatus]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}
// edit program
function updateProgram(idprogram, titleprogram, sigle, totalduration, intershipduration, level, price, hasintership, isactive, conditionofaccecptance, typeoftraining, timestartprogram, timeendprogram, academicstatus) {
  const sql = "UPDATE program SET titleprogram= '" + titleprogram + "',sigle= '" + sigle + "', totalduration= '" + totalduration + "',intershipduration= '" + intershipduration + "',hasintership =  '" + hasintership + "',level =  '" + level + "',hasintership =  '" + hasintership + "',price =  '" + price + "',conditionofaccecptance =  '" + conditionofaccecptance + "',typeoftraining =  '" + typeoftraining + "',timeendprogram =  '" + timeendprogram + "',timestartprogram =  '" + timestartprogram + "', isactive= '" + isactive + "' , academicstatus = '" + academicstatus + "' WHERE idprogram = '" + idprogram + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}
// delete program (update valeur active) 
function deleteProgram(idprogram) {
  const sql = "UPDATE program SET isactive = '0' WHERE idsession = '" + idprogram + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}





// **** FONCTION KHOULOUD

function addComment(studentid, nameuser, text) {
  const sql = "INSERT INTO comment (studentid, nameuser, text) VALUES ?";
  const values = [[studentid, nameuser, text]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function getStudentWithParamsById(idstudent, request, response, writeJSONResponse) {
  con.query("select* from student st join program p on p.idprogram=st.programid join session s on st.sessionid=s.idsession join verdict v on v.idverdict=st.verdictid join statut sta on sta.idstatut=st.statutid where idstudent = '" + idstudent + "'", function (err, result, fields) {
    if (err) throw err;
    console.log("KHOULOUD // getStudentWithParamsById", JSON.stringify(result))
    STUDENTFILTRE = result
    writeJSONResponse(request, response, STUDENTFILTRE)
  });
}

// select all status 
function getAllStatut(request, response, writeJSONResponse) {
  con.query("SELECT idstatut as value, namestatut as label FROM statut", function (err, result, fields) {
    if (err) throw err;
    console.log("KHOULOUD // getAllStatut", JSON.stringify(result))
    STATUTS = result
    writeJSONResponse(request, response, STATUTS)
  });

}
// select all verdict
function getAllVerdict(request, response, writeJSONResponse) {
  con.query("SELECT idverdict as value, nameverdict as label FROM verdict", function (err, result, fields) {
    if (err) throw err;
    console.log("KHOULOUD // getAllVerdict", JSON.stringify(result))
    VERDICTS = result
    writeJSONResponse(request, response, VERDICTS)
  });

}
// select student all
function getAllStudent(request, response, writeJSONResponse) {
  con.query("SELECT * FROM student s  left join verdict as t on s.verdictid = t.idverdict left join statut as st on st.idstatut = s.statutid left join program as p on p.idprogram = s.programid order by s.lastname ASC;", function (err, result, fields) {
    if (err) throw err;
    console.log("KHOULOUD // getAllStudent", JSON.stringify(result))
    STUDENTS = result
    writeJSONResponse(request, response, STUDENTS)
  });

}

// select student by idStudent
function getAllStudentByIdStudent(idstudent, request, response, writeJSONResponse) {
  con.query("SELECT * FROM student as st join program as p on st.programid = p.idprogram WHERE idstudent='" + idstudent + "' ", function (err, result, fields) {
    if (err) throw err;
    console.log(" ALEX // getAllStudentById", JSON.stringify(result))
    STUDENTFILTRE = result
    writeJSONResponse(request, response, STUDENTFILTRE)
  });
}

// select student by idNumber
function getAllStudentByIdNumber(idnumber, request, response, writeJSONResponse) {
  con.query("SELECT* FROM student WHERE idnumber='" + idnumber + "' ", function (err, result, fields) {
    if (err) throw err;
    console.log("KHOULOUD  // getAllStudentById", JSON.stringify(result))
    STUDENTFILTRE = result
    writeJSONResponse(request, response, STUDENTFILTRE)
  });
}
// select student by idNumber2
function getAllStudentByIdNumber2(idnumber, request, response, writeJSONResponse) {
  con.query("SELECT* FROM student WHERE idnumber='" + idnumber + "'", function (err, result, fields) {
    if (err) throw err;
    console.log("MARCANDRE  // getAllStudentByIdNumber", JSON.stringify(result))
    if (result[0]) {
      STUDENTFILTRE2 = true;
    } else {
      STUDENTFILTRE2 = false;
    }
    console.log("RESPONSE STUDENTFILTRE 2 " + STUDENTFILTRE2)
    writeJSONResponse(request, response, STUDENTFILTRE2)
  });
}

// select student by name
function getAllStudentByName(namestudent, request, response, writeJSONResponse) {
  con.query("SELECT* FROM student WHERE lastname like'%" + namestudent + "%' OR firstname like'%" + namestudent + "%' ", function (err, result, fields) {
    if (err) throw err;
    console.log("KHOULOUD // getAllStudentbyName", JSON.stringify(result))
    STUDENTFILTRE = result
    writeJSONResponse(request, response, STUDENTFILTRE)
  });

}

// select student by statut
function getAllStudentByStatut(statutid, request, response, writeJSONResponse) {
  con.query("SELECT* FROM student WHERE statutid='" + statutid + "' ", function (err, result, fields) {
    if (err) throw err;
    console.log("KHOULOUD // getAllStudentByStatut", JSON.stringify(result))
    STUDENTFILTRE = result
    writeJSONResponse(request, response, STUDENTFILTRE)
  });

}

// select student by verdict
function getAllStudentByVerdict(verdictid, request, response, writeJSONResponse) {
  con.query("SELECT* FROM student WHERE verdictid='" + verdictid + "' ", function (err, result, fields) {
    if (err) throw err;
    console.log("KHOULOUD // getAllStudentByVerdict", JSON.stringify(result))
    STUDENTFILTRE = result
    writeJSONResponse(request, response, STUDENTFILTRE)
  });

}

function getAllStudentByVerdictAndStatut(verdict, statut, request, response, writeJSONResponse) {
  con.query("SELECT* FROM student WHERE verdictid='" + verdict + "' AND statutid='" + statut + "' ", function (err, result, fields) {
    if (err) throw err;
    console.log("KHOULOUD // getAllStudentByVerdictAndStatut", JSON.stringify(result))
    STUDENTFILTRE = result
    writeJSONResponse(request, response, STUDENTFILTRE)
  });
}

function saveChanges(idstudent, statut, verdict, isfactured, isbillpaid) {
  const sql = "UPDATE student SET statutid = '" + statut + "', verdictid= '" + verdict + "', isfactured= '" + isfactured + "', isbillpaid= '" + isbillpaid + "' WHERE idstudent = '" + idstudent + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}


// **** FONCTION MOUSSA

function testLogin(username, password, req, res, writeJSONResponse) {
  con.query("SELECT* FROM user WHERE username = '" + username + "' AND password = '" + password + "'", function (err, result, fields) {
    if (err) throw err;
    console.log("MOUSSA // testLogin ", JSON.stringify(result))
    if (result[0] == undefined) {
      console.log("LOGIN NON TROUVER")
      LOGIN = 0;
    }
    else {
      if (result[0].isadmin === 1) {
        LOGIN = 2;
      } else if (result[0].isadmin === 0) {
        LOGIN = 1;
      }
    }
    console.log(LOGIN)
    writeJSONResponse(req, res, LOGIN)
  });
}

function createUser(username, password, isadmin) {
  const sql = "INSERT INTO user (username,password,isadmin) VALUES ?";
  const values = [[username, password, isadmin]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}


// **** FONCTION LULU

// insert url
function insertUrl(url, studentid, name) {
  const sql = "INSERT INTO  (url,studentid,name) VALUES ?";
  const values = [[url, studentid, name]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

// get url by id
function getUrlById(studentid, req, res, writeJSONResponse) {
  con.query("SELECT* FROM file WHERE studentid='" + studentid + "' ", function (err, result, fields) {
    if (err) throw err;
    console.log("LULU // getUrlById ", JSON.stringify(result))
    URL = result
    writeJSONResponse(req, res, URL)
  });
}





// ******************************************************************************
// SERVEUR DOCUMENTS-IMAGES SERVEUR DOCUMENTS-IMAGES SERVEUR DOCUMENTS-IMAGES 
// ******************************************************************************

//* *********************
//  MULTER CONFIGURATION
//* *********************

// configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    const newFilename = `${uuidv4()}.${path.basename(file.mimetype)}`
    cb(null, newFilename)
  }
})

// instanciate multer to upload files
const upload = multer({ storage: storage })




//* **********************
//  FUNCTIONS
//* **********************

// insert files to the DB
function insertFiles(filename, path, idstudent) {
  const sql = 'INSERT INTO `file` (`filename`, `path`, `studentid`) VALUES ?'
  const values = [[filename, path, idstudent]]
  con.query(sql, [values], function (err, result) {
    if (err) throw err
    console.log('1 record inserted')
  })
}









// UPLOAD DU FICHIER 

app.post('/', upload.any(), (req, res) => {
  console.log("LULU UPLOAD")
  req.files.forEach(file => {
    insertFiles(file.filename, file.path, '9')
  })
})

// AFFICHER FILES

app.get('/files', function (request, response) {
  console.log("LULU AFFICHER LES PATH BY ID")
  const idstudent = 9
  const sql = `SELECT * FROM file WHERE studentid= ${idstudent}`
  con.query(sql, idstudent, function (err, result) {
    if (err) throw err
    console.log(result)
    response.send(result)
  })
})

// DOWNLOAD DU FICHIER 


app.get('/downloads', (req, resp) => {
  console.log("LULU DOWNLOAD")
  let file
  let filename = req.query.test
  const path = __dirname + `/uploads/${filename}`

  new P((resolve, reject) => {
    file = fs.readFileSync(path, function (err, data) {
      if (err) {
        reject(err)
      } else {
        console.log(data)
        resolve(data)
      }
    })
  })
  resp.send(file)
})


// DELETE

app.get('/deletes', (req, resp) => {
  console.log("LULU DELETE PATH")
  const filename = req.query.delete
  const path = __dirname + `/uploads/${filename}`
  const sql = 'delete from file where filename=?'
  new P((resolve, reject) => {
    fse
      .remove(path)
      .then(() => {
        console.log('success!')
        con.query(sql, filename, function (err, result) {
          if (err) throw err
          console.log('1 record deleted')
        })
      })
      .catch(err => {
        console.error(err)
      })
  })
})
