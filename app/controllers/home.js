/**
 * This example only renders the view for the home page.
 * 
 * @param {Object} application object
 * @param {Object} req request object
 * @param {Object} res response object
 */
module.exports.index = function (application, req, res) {
	res.render("home/index");
};

