const Operation = ({ AccountOperations }) => {
    return (
        <section className="operation">
            {AccountOperations.map((operation) => (
                <div className="operation-item" key={operation.id}>
                    <p>{operation.date}</p>
                    <p>{operation.description}</p>
                    <p>{operation.amount}</p>
                    <p>{operation.balance}</p>
                    <div className="operation-item_dropdown">
                        <i className="fa-solid fa-chevron-down"></i>
                        <div className="operation-item_dropdown_content">
                            <div className="operation-item_dropdown_content_type">
                                <p>Transaction type</p>
                                <p>{operation.type}</p>
                            </div>
                            <div className="operation-item_dropdown_content_category">
                                <p>Category</p>
                                <p>{operation.category}</p>
                                <button className="operation-item_dropdown_content_btn">Edit</button>
                            </div>
                            <div className="operation-item_dropdown_content_note">
                                <p>Note</p>
                                <p>{operation.note}</p>
                                <button className="operation-item_dropdown_content_btn">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Operation;