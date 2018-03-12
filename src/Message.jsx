import React from 'react';

const Message = ({labels, read, starred, subject}) => {
  return (
  <div className={read ? "row message read" : "row message unread"}>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className={starred ? "star fa fa-star-o" : "star fa fa-star"}> </i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    {labels.map(({ index, label }) => (
      <span class="label label-warning"key={index}>{label}</span>
    ))}
    <a href="#">{subject}</a>
  </div>
</div>
);
}

export default Message;