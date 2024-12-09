// index.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDropdown } from '../../actions';
import store from '../../store';
import { Provider } from 'react-redux';

const Operation = ({ AccountOperations }) => {
  const dispatch = useDispatch();
  const activeDropdown = useSelector((state) => state.activeDropdown);

  return (
    <section className="operation">
      {AccountOperations.map((operation) => (
        <div className="operation-item" key={operation.id}>
          <div className="operation-item_quick">
            <p className="operation-item_quick_date">{operation.date}</p>
            <p className="operation-item_quick_desc">{operation.description}</p>
            <p className="operation-item_quick_amount">${operation.amount}</p>
            <p className="operation-item_quick_bal">${operation.balance}</p>
            <button
              className="operation-item_quick_btn"
              onClick={() => dispatch(toggleDropdown(operation.id))}
            >
              {activeDropdown === operation.id ? '⬆️' : '⬇️'}
            </button>
          </div>
          {activeDropdown === operation.id && (
            <div className="operation-item_dropdown">
              <div className="operation-item_dropdown_content">
                <div className="operation-item_dropdown_content_type">
                  <h2>Transaction type</h2>
                  <p>{operation.type}</p>
                </div>
                <div className="operation-item_dropdown_content_category">
                  <h2>Category</h2>
                  <p>{operation.category}</p>
                  <button className="operation-item_dropdown_content_btn">✏️</button>
                </div>
                <div className="operation-item_dropdown_content_note">
                    <h2>Note</h2>
                    <p>{operation.note}</p>
                    <button className="operation-item_dropdown_content_btn">✏️</button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

const App = ({ AccountOperations }) => (
  <Provider store={store}>
    <Operation AccountOperations={AccountOperations} />
  </Provider>
);

export default App;