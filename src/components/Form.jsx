import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    const onSubmit = (submit) => {
      submit.preventDefault();
    };
    return (
      <form
        onSubmit={ onSubmit }
      >
        <input
          data-testid="name-input"
          type="text"
          name=""
          id=""
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          data-testid="description-input"
          name=""
          id=""
          cols="30"
          rows="10"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr1-input"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr2-input"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr3-input"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <input
          data-testid="image-input"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          name=""
          id=""
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name=""
          id=""
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
