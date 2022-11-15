class Auth {
    constructor() {
        this.authenticated = false;
        this.getinToken = localStorage.getItem("getInToken");
        this.currentUser = localStorage.getItem("userAccount");
    }

    login(cb) {
        fetch("/protected", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.getinToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.email === this.currentUser) {
                    this.authenticated = true;
                    cb();
                }
            });
        cb();
    }

    logout(cb) {
        this.currentUser = null;
        this.getinToken = null;
        localStorage.removeItem("getInToken");
        localStorage.removeItem("userAccount");
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}
export default new Auth();