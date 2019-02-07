import React from "react";

const TableCommentComponent = ({ comments }) => (
  <div className="border border-info">
    {
      comments.map((row, key) =>
        <div key={key}>
          <h3 className="text-info">{row.nameuser}</h3>
          <p>{row.datesend}</p>
          <p>{row.text}</p>
          <ul/>
        </div>

      )}
  </div >

);

export default TableCommentComponent;
