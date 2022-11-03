db.createUser({
  user: "admin",
  pwd: "adminpassword",
  roles: [
    {
      role: "readWrite",
      db: "webOAuthProject",
    },
  ],
});

// mongosh -u <your username> -p <your password> --authenticationDatabase <your database name>
