
// Middleware to check if the user is authenticated

const isAuthenticatedStudent = (req, res, next) => {
    if (req.session && req.session.studentId) {
        next();
    } else {
        res.status(403).send('Not authenticated as a student');
    }
};
  
  module.exports = isAuthenticatedStudent;
  
