let controller = require('../controllers/controller.js');

module.exports = (app) => {
    app.post('/api/login', controller.createUser);
    app.get('/api/dashboard', controller.getUserInfo);
    app.post('/api/submitquest', controller.createQuestion);
    app.get('/api/questionlist', controller.getQuestions);
    app.delete('/api/question/:question_id', controller.deleteQuestion);
    app.get('/api/findquestion/:question_id', controller.findQuestion);
    app.put('/api/upvote1/:question_id', controller.upVote1comp);
    app.put('/api/upvote2/:question_id', controller.upVote2comp);
    app.put('/api/upvote3/:question_id', controller.upVote3comp);
    app.put('/api/upvote4/:question_id', controller.upVote4comp);
    
}
