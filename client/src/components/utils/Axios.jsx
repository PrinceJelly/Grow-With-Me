import axios from "axios";

const API = "http://localhost:5000";
const goalsRoute = "/goals";
const expensesRoute = "/expenses";
const savingsRoute = "/savings";

const goalsAPI = `${API}${goalsRoute}`;
const expensesAPI = `${API}${expensesRoute}`;
const savingsAPI = `${API}${savingsRoute}`;

/********************************** Goals Requests *********************************/

export const getallGoals = () => {
  return axios
    .get(goalsAPI)
    .then((res) => res.data)
    .catch((err) => console.log(err, "Cannot get goals"));
};
export const postNewGoal = () => {
  return axios
    .post(goalsAPI)
    .then((res) => res.data)
    .catch((err) => console.log(err, "Cannot post goals"));
};

export const getGoalById = (id) => {
  return axios
    .get(`${goalsAPI}/${id}`)
    .then((res) => res.data)
    .catch((err) =>
      console.log(err, "ID not found, please provide a vaild ID")
    );
};

export const deleteGoalByID = (id) => {
  return axios
    .delete(`${goalsAPI}/${id}`)
    .then((res) => res.data)
    .catch((err) =>
      console.log(
        err,
        "Unable to delete. ID not found, please provide a vaild ID."
      )
    );
};

/****************************** Savings Requests *********************************/

export const getallSavings = () => {
  return axios
    .get(savingsAPI)
    .then((res) => res.data)
    .catch((err) => console.log(err, "Cannot get savings"));
};

export const postNewSavings = () => {
  return axios
    .post(savingsAPI)
    .then((res) => res.data)
    .catch((err) => console.log(err, "Cannot post savings"));
};

export const getSavingsById = (id) => {
  return axios
    .get(`${savingsAPI}/${id}`)
    .then((res) => res.data)
    .catch((err) =>
      console.log(err, "ID not found, please provide a vaild ID")
    );
};

export const patchSavingsById = (id) => {
  return axios
    .patch(`${savingsAPI}/${id}`)
    .then((res) => res.data)
    .catch((err) =>
      console.log(
        err,
        "Unable to patch. ID not found, please provide a vaild ID"
      )
    );
};

export const deleteSavingsByID = (id) => {
  return axios
    .delete(`${savingsAPI}/${id}`)
    .then((res) => res.data)
    .catch((err) =>
      console.log(
        err,
        "Unable to delete. ID not found, please provide a vaild ID."
      )
    );
};

/***************************** Expenses Requests *********************************/

export const getallExpenses = () => {
  return axios
    .get(expensesAPI)
    .then((res) => res.data)
    .catch((err) => console.log(err, "Cannot get Expeneses"));
};

export const postNewExpenses = () => {
  return axios
    .post(expensesAPI)
    .then((res) => res.data)
    .catch((err) => console.log(err, "Cannot post Expenses"));
};

export const getExpensesById = (id) => {
  return axios
    .get(`${expensesAPI}/${id}`)
    .then((res) => res.data)
    .catch((err) =>
      console.log(err, "ID not found, please provide a vaild ID")
    );
};

export const patchExpensesById = (id) => {
  return axios
    .patch(`${expensesAPI}/${id}`)
    .then((res) => res.data)
    .catch((err) =>
      console.log(
        err,
        "Unable to patch. ID not found, please provide a vaild ID"
      )
    );
};

export const deleteExpenesesByID = (id) => {
  return axios
    .delete(`${expensesAPI}/${id}`)
    .then((res) => res.data)
    .catch((err) =>
      console.log(
        err,
        "Unable to delete. ID not found, please provide a vaild ID."
      )
    );
};
