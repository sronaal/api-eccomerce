import user from "../models/user.js";

class userDao {
  constructor() {}

  create(userData) {
    return user.create(userData);
  }

  findById(id) {
    return user.findOne({ id });
  }

  findAll() {
    return user.find();
  }

  update(id, userData) {
    return user.findByIdAndUpdate({ id }, userData);
  }

  delete(id) {
    return user.findByIdAndDelete({ id });
  }
}
