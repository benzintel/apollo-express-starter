db.createUser(
  {
    user: "benzintel",
    pwd: "password",
    roles: [
      {
        role: "readWrite",
        db: "my_database"
      }
    ]
  })