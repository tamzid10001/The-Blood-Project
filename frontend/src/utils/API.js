export const getTodos = async (error, callback) => {
 return await fetch("/api/v1/todo", {
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
 return await fetch("/api/v1/todo", {
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
 return await fetch("/api/v1/todo/" + id, {
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
 return await fetch("/api/v1/todo/" + id, {
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
 return await fetch("/api/v1/todo/status/" + id, {
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
 return await fetch("/api/v1/user/signup", {
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
 return await fetch("/api/v1/user/login", {
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
 return await fetch("/api/v1/user/verify", {
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
 return await fetch("/api/v1/user", {
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
 return await fetch("/api/v1/user/forgot-password", {
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
 return await fetch(`/api/v1/user/reset-password/${data.token}`, {
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

export const getInventory = async (error, callback) => {
 return await fetch("/api/v1/inventory", {
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

export const getInventoryByDate = async (from, to, error, callback) => {
 return await fetch(`/api/v1/inventory/byDate`, {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("LlkhJHKGheft")}`,
  },
  body: JSON.stringify({
   from,
   to,
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

export const addInventory = async (data, error, callback) => {
 return await fetch(`/api/v1/inventory/create`, {
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

export const changeIsSold = async (id, status, error, callback) => {
 return await fetch(`/api/v1/inventory/${status ? "" : "un"}sold/${id}`, {
  method: "PUT",
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

export const deleteInventory = async (id, error, callback) => {
 return await fetch(`/api/v1/inventory/delete/${id}`, {
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

export const getQuantityByBloodGroup = async (error, callback) => {
 return await fetch(`/api/v1/inventory/quantity`, {
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
