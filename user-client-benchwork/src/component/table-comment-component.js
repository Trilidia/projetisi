import React from "react";

const TableCommentComponent = ({ comments }) => (
  <div className="border border-danger">
    {
      comments.map((row, key) =>
        <div key={key}>
          <h3 className="text-danger">{row.nameuser}</h3>
          <p>{row.datesend.substring(0,10)}</p>
          <p>{row.text}</p>
          <ul/>
        </div>

      )}
  </div >

);

export default TableCommentComponent;
