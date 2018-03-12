import React from 'react';

const Message = ({selected, labels, read, starred, subject, toggleSelected}) => {
  return (
  <div className={`
      row
      message
      ${read ? "read" : "undread"}
      ${selected ? "selected" : null}
    `} >
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" onClick={toggleSelected} />
      </div>
      <div className="col-xs-2">
        <i className={`star fa ${starred ? "fa-star-o" : "fa-star"}`}> </i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    {labels.map( (label, index) => (
      <span className="label label-warning" key={index} >{label}</span>
    ))}
    <a href="#">{subject}</a>
  </div>
</div>
);
}

export default Message;