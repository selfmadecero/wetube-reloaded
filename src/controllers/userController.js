export const join = (req, res) => res.send("Join");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("LogIn");
export const logout = (req, res) => res.send("LogOut");
export const see = (req, res) => {
  console.log(req.params);
  return res.send("see User");
};
