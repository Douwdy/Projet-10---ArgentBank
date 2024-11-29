import { useState } from 'react';

const Operation = ({ AccountOperations }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };
    return (
        <section className="operation">
            {AccountOperations.map((operation) => (
                <div className="operation-item" key={operation.id}>
                    <div className="operation-item_quick">
                        <p className="operation-item_quick_date">{operation.date}</p>
                        <p className="operation-item_quick_desc">{operation.description}</p>
                        <p className="operation-item_quick_amount">${operation.amount}</p>
                        <p className="operation-item_quick_bal">${operation.balance}</p>
                        <button className="operation-item_quick_btn" onClick={() => toggleDropdown(operation.id)}>
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

export default Operation;