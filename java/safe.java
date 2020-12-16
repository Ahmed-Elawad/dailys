/**
 * The safe will extend the Account class.
 * Naturally, every bank user needs protection. This class provides
 * methods for setting a username and password on the inital setup.
 * After the fact, all transactions into the checking, and savings account
 * will be authenticated with the stored information in the safe before 
 * allowing the transaction.
 * @methods:
 * setPassword, updatePassword, setUsername, uodateUsername, authenticatePassword,
 * authenticateUsername 
 */

public class Safe extends Account {

    private String userName;
    private String password;
    private Boolean usernameIsSet = false;
    private Boolean passwordisSet = false;
    private Int numOf
    // authenticat if the password input is the same as the current password stored.
    // return 0 if no password is set
    // return -1 if the wrong password was entered
    // return 1 if the password passes the test
    public Int authenticatePassword(String password) {
        if (!this.passwordisSet) return 0;
        for (int i = 0; i < password.length; i++) {
            char letter = password[i]
            if (this.password[i] != letter) return -1; 
        }

        return 1;
    }

    public String getUsername() {
        // if no usernmae has been set
            // return "No username set. Please set your username again. IDK what happned."

        // return the username stored in this class
    }

    public String setUsername(String username) {
        // set the username in this instance to the passed in argument
        // return the username with a confirmation string
    }

    public Boolean setPassword(String newPassword) {
        // if the password is set
            // return 'authenticate'
        // set the password
        // return 'Password set to arg '
    }

    public static void main(String[] args) {
        // instantiate the class instance by setting a password and 
        // username from the arguemnts passeed in during set up
    }
}