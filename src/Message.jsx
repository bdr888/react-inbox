import React from 'react';

const Message = ({selected, labels, read, starred, subject, toggleSelected, toggleStarred}) => {
  return (
  <div className={`
      row
      message
      ${read ? "read" : "unread"}
      ${selected ? "selected" : null}
    `} >
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" onChange={toggleSelected} checked={selected}/>
      </div>
      <div className="col-xs-2">
        <i name="star" className={`star fa ${starred ? "fa-star" : "fa-star-o"}`} onClick={toggleStarred}> </i>
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