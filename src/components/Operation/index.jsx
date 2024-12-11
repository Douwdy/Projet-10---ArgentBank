// index.jsx
import React from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { toggleDropdown } from '../../actions';
import store from '../../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Operation = ({ AccountOperations }) => {
  const dispatch = useDispatch();
  const activeDropdown = useSelector((state) => state.account.activeDropdown);

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
              {activeDropdown === operation.id ? <FontAwesomeIcon icon={faChevronUp} style={{ color: 'white' }}/> : <FontAwesomeIcon icon={faChevronDown} style={{ color: 'white' }}/>}
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
                  <button className="operation-item_dropdown_content_btn"><FontAwesomeIcon icon={faPen} style={{ color: 'white', fontSize:'0.8em' }}/></button>
                </div>
                <div className="operation-item_dropdown_content_note">
                    <h2>Note</h2>
                    <p>{operation.note}</p>
                    <button className="operation-item_dropdown_content_btn"><FontAwesomeIcon icon={faPen} style={{ color: 'white', fontSize:'0.8em' }}/></button>
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