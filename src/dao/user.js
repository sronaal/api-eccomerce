import user from "../models/user.js";

class UserDao {
  constructor() {}

  create(userData) {
    return user.create(userData);
  }

  findById(id) {
    return user.findOne({ id });
  }

  findByEmail(email){

    return user.findOne({email})
  }
  findAll() {
    return user.find().sort({createUp: -1});
  }

  update(id, userData) {
    return user.findByIdAndUpdate({ id }, userData);
  }

  delete(id) {
    return user.findByIdAndDelete({ id });
  }
}



export default UserDao