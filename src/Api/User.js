class User {
  async createAccount(data) {
    const result = await fetch("http://localhost:5000/api/user/signup", {
      credentials: "include",
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await result.json();
    return res;
  }
  async loginUser(data) {
    try {
      const result = await fetch("http://localhost:5000/api/user/login", {
        credentials: "include",
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await result.json();
      return res;
    } catch (e) {
      return e;
    }
  }

  async checkLogin() {
    const result = await fetch("http://localhost:5050/api/admin/confirm", {
      credentials: "include",
      method: "POST",
      headers: { "content-Type": "application/json" },
    });
    const res = await result.json();
    return res;
  }

  async userLogout() {
    const result = await fetch("http://localhost:5050/api/admin/logout", {
      credentials: "include",
      method: "POST",
      headers: { "content-Type": "application/json" },
    });
    const res = await result.json();
    return res;
  }
}

let user = new User();

export default user;
