import React from "react";

import "./styles.css";

export default function Search() {
  return (
    <div class="input-group mb-2">
      <input
        type="text"
        class="form-control"
        id="inlineFormInputGroup"
        placeholder="GitUser"
      />
      <div class="input-group-prepend">
        <button class="btn btn-primary">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
