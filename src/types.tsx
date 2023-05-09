import { ReactNode } from "react";

export type TodoItems = {
  title: string;
  color: string;
  time: number;
};

export type TabInfo = {
  title: string;
  component: ReactNode;
  wrapper: string;
};

export type Globals = {
  isRunning: boolean;
  todos: Array<TodoItems>;
};
