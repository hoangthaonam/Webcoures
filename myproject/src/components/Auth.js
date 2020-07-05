class Auth {
    constructor() {
      this.authenticated = false;
      if(JSON.parse(localStorage.getItem('auth'))){
        this.authenticated = true;
      }
      // this.authenticated = JSON.parse(localStorage.getItem('auth'));
      // let auth = localStorage.getItem('auth');
    }
  
    login(cb,id) {
      this.authenticated = true;
      localStorage.setItem('auth',JSON.stringify(id));
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      // localStorage.setItem('auth',JSON.stringify(false));
      localStorage.removeItem('auth');
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();