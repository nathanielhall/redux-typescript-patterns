/**
 *  PRESENTATIONAL COMPONENT
 *  Concerned with how things look
 *  Should not specify how data is loaded or how data is mutated
 *  Should recieve data and callbacks exclusively via props
 * @see {https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0}
 */

import React, {FC} from "react";
import styles from "./todo-list-style.scss";
import {ITodo} from "../model";

interface IProps {
  items: ReadonlyArray<ITodo>;
  onDelete: (id: number) => void;
}

export const TodoList: FC<IProps> = ({items, onDelete}) => {
  return (
    <div className={styles.listContainer}>
      <ul style={{listStyle: "none"}} className={styles.list}>
        {items.map(item => (
          <li key={item._id}>
            <button
              onClick={() => onDelete(item._id)}
              type="button"
              className="btn-small btn-danger"
            >
              Delete
            </button>{" "}
            &nbsp;&nbsp;
            <span>{item.action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
