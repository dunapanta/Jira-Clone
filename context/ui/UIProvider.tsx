import { useReducer } from "react";
import { FC } from "react";
import { UIContext, UIReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface UIState {
  sideMenuOpen: boolean;
}

const UIInitialState: UIState = {
  sideMenuOpen: false,
};

export const UIProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(UIReducer, UIInitialState);

  return (
    <UIContext.Provider value={{ sideMenuOpen: false }}>
      {children}
    </UIContext.Provider>
  );
};
