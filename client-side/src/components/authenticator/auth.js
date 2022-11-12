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
                    console.log("Authenticated");
                    cb();
                }
            });
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}
export default new Auth();