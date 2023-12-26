import React from 'react';

function Buttons({ data, activeTab, setActiveTab }) {
  return (
    <div className="button-container">
      {data.map((item) => {
        {
          console.log(item.id, activeTab);
        }
        return (
          <button
            className={
              activeTab === item.id ? 'active-button button' : 'button'
            }
            key={item.id}
            onClick={() => setActiveTab(item.id)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
