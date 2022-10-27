import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  };

  trumpCardValidation = (cardTrunfo) => {
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  };

  handleSaveButton = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state; // strings
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state; // integer
    const { cardTrunfo } = this.state; // boolean
    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
    }));
    this.trumpCardValidation(cardTrunfo);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  handleDisabledButton = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);

    const hasValidStrings = cardName && cardDescription && cardImage && cardRare;
    const maxAttrTotalBudget = 210;
    const maxAttrBudget = 90;
    const attrTotal = attr1 + attr2 + attr3;
    const hasValidTotalBudget = attrTotal <= maxAttrTotalBudget;
    const attr1BudgetCheck = (cardAttr1 <= maxAttrBudget) && (cardAttr1 >= 0);
    const attr2BudgetCheck = (cardAttr2 <= maxAttrBudget) && (cardAttr2 >= 0);
    const attr3BudgetCheck = (cardAttr3 <= maxAttrBudget) && (cardAttr3 >= 0);
    const hasValidBudget = attr1BudgetCheck && attr2BudgetCheck && attr3BudgetCheck;
    const isValid = hasValidStrings && hasValidTotalBudget && hasValidBudget;

    if (isValid) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    const { name, checked, type, value } = target;
    const state = type === 'checkbox' ? checked : value;
    this.setState(
      {
        [name]: state,
      },
      this.handleDisabledButton,
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.handleSaveButton }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        {savedCards.map((card) => (<Card
          key={ card.cardName }
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
        />))}
      </div>
    );
  }
}

export default App;
