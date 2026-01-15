// import api from "./api";

// // signup 
// export const signup = (data) => api.post("/auth/register", data);


// // login 
// export const login = (data) => api.post("/auth/login", data);


// // get current user 
// export const getMe = () => api.get("/auth/me");


// // logout 
// export const logout = () => api.post("/auth/logout");





// // create a gig 
// export const createGig = (data) => api.post("/gigs", data);

// // fetch all open gigs 
// export const getOpenGigs = (search) => api.get(`/gigs${search ? `?search=${search}` : ""}`);

// export const getGigById = (gigId) => api.get(`/gigs/${gigId}`);

// // fetch assigned/hired gigs 
// export const getAssignedGigs = () => api.get("/gigs/assigned");


// export const reopenGig = (gigId) => api.put(`/gigs/reopen/${gigId}`);

// // delete gigs
// export const deleteGig = (gigId) => api.delete(`/gigs/${gigId}`);




// //submit bids
// export const submitBid = (data) => api.post("/bids", data);


// //get the bids for gigs
// export const getBidsForGig = (gigId) => api.get(`/bids/${gigId}`);


// //hire bids
// export const hireBid = (bidId) => api.patch(`/bids/${bidId}/hire`);

// // fetch all bids submitted by logged-in user 
// export const getUserSubmittedBids = () => api.get("/bids/applied-jobs");






import api from "./api";

// signup
export const signup = (data) => api.post("/api/auth/register", data);

// login
export const login = (data) => api.post("/api/auth/login", data);

// get current user
export const getMe = () => api.get("/api/auth/me");

// logout
export const logout = () => api.post("/api/auth/logout");



// create a gig
export const createGig = (data) => api.post("/api/gigs", data);

// fetch all open gigs
export const getOpenGigs = (search) =>
  api.get(`/api/gigs${search ? `?search=${search}` : ""}`);

export const getGigById = (gigId) =>
  api.get(`/api/gigs/${gigId}`);

// fetch assigned/hired gigs
export const getAssignedGigs = () =>
  api.get("/api/gigs/assigned");

export const reopenGig = (gigId) =>
  api.put(`/api/gigs/reopen/${gigId}`);

// delete gig
export const deleteGig = (gigId) =>
  api.delete(`/api/gigs/${gigId}`);



// submit bid
export const submitBid = (data) =>
  api.post("/api/bids", data);

// get bids for a gig
export const getBidsForGig = (gigId) =>
  api.get(`/api/bids/${gigId}`);

// hire bid
export const hireBid = (bidId) =>
  api.patch(`/api/bids/${bidId}/hire`);

// fetch all bids submitted by logged-in user
export const getUserSubmittedBids = () =>
  api.get("/api/bids/applied-jobs");






