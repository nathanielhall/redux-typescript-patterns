/** CONTAINER COMPONENT
 *  Concerned with how things work  
 *  Provide the data and behavior to presentational or other container components
 *  Often stateful, as they tend to serve data sources

 *  BENEFITS:
 *  Better separation of concerns.
 *  
 *  Better reusibility. The presentational
 *  component can be used with completely different data sources. 
 * 
 *  Presentational components are separated from the logic, therefore the designer
 *  can tweak the look without being distracted by logic. Having only the presentation
 *  to work with could be a great advantage for designers.
 * @see {https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0}
 */

import React, {Component} from "react";
import {connect} from "react-redux";
import * as fromActions from "../redux/actions";
import {getTodos} from "../redux/selectors";
import TodoList from "../todo-list";

// TIP: This approach will ensure mapStateToProps type definitions stay in sync!
type TodoListContainerProps = ReturnType<typeof mapStateToProps> & {
  onDelete: (id: number) => void;
  fetchTodoItems: () => void;
};

const {deleteTodo, fetchTodoItems} = fromActions.Actions;

class TodoListContainer extends Component<TodoListContainerProps> {
  componentDidMount() {
    this.props.fetchTodoItems();
  }

  render() {
    const {items, onDelete} = this.props;

    return <TodoList items={items} onDelete={onDelete} />;
  }
}

const mapStateToProps = (state: StoreState) => ({
  items: getTodos(state)
});

export default connect(
  mapStateToProps,
  {
    onDelete: deleteTodo,
    fetchTodoItems: fetchTodoItems
  }
)(TodoListContainer);
