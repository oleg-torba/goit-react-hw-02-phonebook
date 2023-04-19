export function Contact({ contacts, remove }) {
  return (
    <div className="contactBlock">
      <ul className="contactsList">
        {contacts.map(item => {
          return (
            <>
              <li className="contactsItem" key={item.id}>
                <div className="contact">
                  <span><span className="contactValue">Name:</span> {item.data.name}</span>
                  <span><span className="contactValue">Number:</span> {item.data.number}</span>
                  <button className="contactBtn" type="button" onClick={() => remove(item.id)}>
                Delete
              </button>
                </div>
              </li>
             
            </>
          );
        })}
      </ul>
    </div>
  );
}
