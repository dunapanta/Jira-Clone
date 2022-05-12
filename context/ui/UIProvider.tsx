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

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };
  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
      {children}
    </UIContext.Provider>
  );
};
