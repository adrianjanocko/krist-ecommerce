"use client";

import { makeStore } from "@/lib/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface StoreProviderProps {
  children: ReactNode;
}

const { store, persistor } = makeStore();

export default function StoreProvider({ children }: StoreProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
