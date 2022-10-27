import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form action="">
        <input data-testid="name-input" type="text" name="" id="" />
        <textarea
          data-testid="description-input"
          name=""
          id=""
          cols="30"
          rows="10"
        />
        <input data-testid="attr1-input" type="number" name="" id="" />
        <input data-testid="attr2-input" type="number" name="" id="" />
        <input data-testid="attr3-input" type="number" name="" id="" />
        <input data-testid="image-input" type="text" name="" id="" />
        <select data-testid="rare-input" name="" id="">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input data-testid="trunfo-input" type="checkbox" name="" id="" />
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
