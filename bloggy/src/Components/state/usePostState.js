import React, { useReducer, createContext, useContext } from "react";

//Create an initial state

const initialState = {
  posts: {
    datas: [],
    status: null,
    testvalue: "cdsc",
  },
};

// Create or importing reducer here

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_POSTS": {
      return {
        ...state,
        posts: {
          datas: payload.datas,
          status: payload.status,
        },
      };
    }
  }
};

//create a context

const PostStateContext = createContext(initialState);

const usePostState = () => useContext(PostStateContext);

// Create a post provider

const PostStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const logoColor = "green";
  const ValueProvider = {
    PostState: state,
    PostDispatch: dispatch,
    logoColor,
  };

  return (
    <PostStateContext.Provider value={ValueProvider}>
      {children}
    </PostStateContext.Provider>
  );
};

// const usePostState = () => {
//   const context = useContext(PostStateProvider);
//   if (context === undefined) {
//     throw new Error("invalid context");
//   }
//   return context;
// };

export { PostStateProvider, usePostState };
