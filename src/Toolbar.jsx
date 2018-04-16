import React from 'react';

const Toolbar = ({ addLabel, removeLabel, toggleRead }) => (
  <div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">2</span>
        unread messages
      </p>

      <button className="btn btn-default">
        <i className="fa fa-check-square-o" />
      </button>

      <button className="btn btn-default" onClick={() => toggleRead(true)}>
        Mark As Read
      </button>

      <button className="btn btn-default" onClick={() => toggleRead(false)}>
        Mark As Unread
      </button>

      <select
        className="form-control label-select"
        onChange={event => addLabel(event)}
      >
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select
        className="form-control label-select"
        onChange={e => removeLabel(e.target.value)}
      >
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button className="btn btn-default">
        <i className="fa fa-trash-o" />
      </button>
    </div>
  </div>
);

export default Toolbar;
