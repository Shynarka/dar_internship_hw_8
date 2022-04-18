import { ReactNode, createContext, useReducer } from "react";
import { Faculty } from "../types";

interface ProviderProps {
  children: ReactNode;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: { faculties: Faculty[] } = {
  faculties: [],
};

export const FacultyContext = createContext({
  state: initialState,
  dispatch: (action: Action) => {},
});

function reducer(state: any, action: Action) {
  switch (action.type) {
    case "GET_FACULTIES":
      return { ...state, faculties: action.payload };
    case "CREATE_FACULTY":
      return {
        ...state,
      };
    case "EDIT_FACULTY":
      return {
        ...state,
      };
    case "DELETE_FACULTY":
      return {
        ...state,
      };
    default:
      return state;
  }
}

export const FacultyProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FacultyContext.Provider value={{ state, dispatch }}>
      {children}
    </FacultyContext.Provider>
  );
};
