import { useReducer } from "react";
import { FC } from "react";
import { UIContext, UIReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UIInitialState: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(UIReducer, UIInitialState);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };
  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "UI - Set Is Adding Entry", payload: isAdding });
  };

  const startDragging = () => {
    dispatch({ type: "UI - Start Dragging" });
  };

  const endDragging = () => {
    dispatch({ type: "UI - End Dragging" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
