export const getTodos = async (error, callback) => {
 return await fetch("/api/todo", {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("LlkhJHKGheft")}`,
  },
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};

export const addTodo = async (data, error, callback) => {
 return await fetch("/api/todo", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("LlkhJHKGheft")}`,
  },
  body: JSON.stringify(data),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};

export const deleteTodo = async (id, error, callback) => {
 return await fetch("/api/todo/" + id, {
  method: "DELETE",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("LlkhJHKGheft")}`,
  },
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};

export const updateTodo = async (id, data, error, callback) => {
 return await fetch("/api/todo/" + id, {
  method: "PUT",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("LlkhJHKGheft")}`,
  },
  body: JSON.stringify(data),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};

export const changeTodoStatus = async (id, status, error, callback) => {
 return await fetch("/api/todo/status/" + id, {
  method: "PUT",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("LlkhJHKGheft")}`,
  },
  body: JSON.stringify({ status }),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};

export const signUp = async (data, error, callback) => {
 return await fetch("/api/user/signup", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify(data),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    localStorage.setItem("LlkhJHKGheft", data.accessToken);
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};

export const logIn = async (data, error, callback) => {
 return await fetch("/api/user/login", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: "Bearer " + localStorage.getItem("LlkhJHKGheft"),
  },
  body: JSON.stringify(data),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    localStorage.setItem("LlkhJHKGheft", data.accessToken);
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};

export const verifyToken = async (error, callback) => {
 return await fetch("/api/user/verify", {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("LlkhJHKGheft")}`,
  },
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error && error) {
    error(data);
   } else if (callback) {
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};

export const getUserData = async (error, callback) => {
 return await fetch("/api/user", {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("LlkhJHKGheft")}`,
  },
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};

export const forgotPassword = async (data, error, callback) => {
 return await fetch("/api/user/forgot-password", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify(data),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};

export const resetPassword = async (data, error, callback) => {
 return await fetch(`/api/user/reset-password/${data.token}`, {
  method: "PATCH",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({
   password: data.password,
  }),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
};
