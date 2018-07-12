/**
 * A simple model for user entity
 * @param {String} name of the user
 */

function User(name) {
    this.name = name;
}

/**
 * Whether the user is logged in or not.
 * @type {Boolean}
 */
User.prototype.isLoggedIn = false;

module.exports = function() {
    return User
}