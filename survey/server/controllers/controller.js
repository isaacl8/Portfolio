let mongoose = require('mongoose');
let Question = mongoose.model('Question')
let User = mongoose.model('User')
// CRUD verbNoun
module.exports = {

    createUser: (req,res) => {
        let newUser = new User ({name: req.body.name});
        newUser.save((err,newUser) => {
            if (err) {
                console.log('did not create a new user');
            }else {
                console.log('Successful creation')
                req.session.user_id = newUser._id;
                res.json(newUser);
                console.log(newUser)
            }
        })
    },
    getUserInfo: (req,res) => {
        if(!req.session.user_id){
        res.sendStatus(401)
    } else {
        return res.json(req.session.user_id)
      }
  },

    createQuestion: (req,res) => {
        if(!req.session.user_id){
            console.log('createQuestion session')
            return res.sendStatus(401);
        } else {
            let question = new Question(req.body);
            question.vote1 = 0;
            question.vote2 = 0;
            question.vote3 = 0;
            question.vote4 = 0;
            console.log(question)
            question._user = req.session.user_id;
            question.save((err, question) => {
                if(err){
                    errors = []
                    for(var x in err.errors){
                        errors.push(err.errors[x].message)
                    }
                    console.log(errors)
                } else {
                    console.log(question)
                    res.json(question)

                }
            })
        }
    },

     getQuestions: (req,res) => {
         console.log('this is before the run')
         if(!req.session.user_id){
             console.log('loggedout of session')
             return res.sendStatus(401);
         } else {
            Question.find({}).populate('_user').exec((err, questions) => {
                if(err){
                    console.log('question._user.name');
                } else {
                    res.json(questions);
                    console.log('Successful getting all questions')
             }
             })
         }

     },

    deleteQuestion: (req,res) => {
        if(!req.session.user_id){
            res.sendStatus(401)
         } else {
             Question.deleteOne({_id: req.params.question_id}, (err, data) => {
                 if(err){
                     console.log('Delete was unsuccessful')
                 } else {
                     console.log('data')
                     return res.json(data)
                 }
             })
         }

    },

    findQuestion: (req,res)=> {
        if(!req.session.user_id){
            res.sendStatus(401)
         } else {
             console.log(req.params.question_id)
             Question.findOne({ _id: req.params.question_id}, (err,data) => {
                 if(err){
                     console.log('wrong')
                 } else {
                     console.log(data)
                     return res.json(data)
                 }
             })
         }
     },

     upVote1comp: (req,res) => {
         console.log('hello from upvote',req.params.question_id, req.body)
         if(!req.session.user_id){
             res.sendStatus(401)
          } else {
              Question.findOne({ _id: req.params.question_id}, (err, question) => {
                  if(err){
                       console.log(req.params.question_id)
                    return  console.log('did not find the vote')
                  } else {
                      console.log(question)
                       console.log(req.params.question_id)
                      question.vote1+= 1
                      question.save((err, vote) => {
                          if (err) {
                              console.log('the vote did not save')
                          } else {
                              return res.json(vote)
                          }
                      })
                  }
              })
          }
      },

      upVote2comp: (req,res) => {
          console.log('hello from upvote',req.params.question_id, req.body)
          if(!req.session.user_id){
              res.sendStatus(401)
           } else {
               Question.findOne({ _id: req.params.question_id}, (err, question) => {
                   if(err){
                        console.log(req.params.question_id)
                     return  console.log('did not find the vote')
                   } else {
                       console.log(question)
                        console.log(req.params.question_id)
                       question.vote2+= 1
                       question.save((err, vote) => {
                           if (err) {
                               console.log('the vote did not save')
                           } else {
                               return res.json(vote)
                           }
                       })
                   }
               })
           }
       },
       upVote3comp: (req,res) => {
           console.log('hello from upvote',req.params.question_id, req.body)
           if(!req.session.user_id){
               res.sendStatus(401)
            } else {
                Question.findOne({ _id: req.params.question_id}, (err, question) => {
                    if(err){
                         console.log(req.params.question_id)
                      return  console.log('did not find the vote')
                    } else {
                        console.log(question)
                         console.log(req.params.question_id)
                        question.vote3+= 1
                        question.save((err, vote) => {
                            if (err) {
                                console.log('the vote did not save')
                            } else {
                                return res.json(vote)
                            }
                        })
                    }
                })
            }
        },

        upVote4comp: (req,res) => {
            console.log('hello from upvote',req.params.question_id, req.body)
            if(!req.session.user_id){
                res.sendStatus(401)
             } else {
                 Question.findOne({ _id: req.params.question_id}, (err, question) => {
                     if(err){
                          console.log(req.params.question_id)
                       return  console.log('did not find the vote')
                     } else {
                         console.log(question)
                          console.log(req.params.question_id)
                         question.vote4+= 1
                         question.save((err, vote) => {
                             if (err) {
                                 console.log('the vote did not save')
                             } else {
                                 return res.json(vote)
                             }
                         })
                     }
                 })
             }
         },
}
