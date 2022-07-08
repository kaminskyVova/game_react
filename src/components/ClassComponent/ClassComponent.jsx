import React from 'react';
import style from './ClassComponent.module.css';

import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'Результат',
      userNumber: '',
      randomNumber:
        Math.floor(Math.random() * this.props.max - this.props.min) +
        this.props.max,
      restart: false,
      count: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // this.setState((state) => ({
    //   count: state.count + 1,
    // }));

    this.setState((state) => {
      if (!this.state.userNumber) {
        return {
          result: `Введите число!`,
        };
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного`,
          userNumber: '',
          count: state.count + 1,
        };
      } else if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`,
          userNumber: '',
          count: state.count + 1,
        };
      } else if ((state.userNumber = state.randomNumber)) {
        return {
          result: `Вы угадали загаданное число ${state.userNumber}
          попыток было: ${this.state.count + 1}`,
          userNumber: '',
          restart: true,
          count: state.count + 1,
        };
      }
    });
  };

  handleChange = (e) => {
    this.setState(() => ({
      userNumber: e.target.value,
    }));
  };

  handleClickBtn = () => {
    this.setState(() => ({
      result: 'Результат',
      userNumber: '',
      randomNumber:
        Math.floor(Math.random() * this.props.max - this.props.min) +
        this.props.max,
      restart: false,
      count: 0,
    }));
  };

  render() {
    console.log(this.state.randomNumber);
    console.log(this.state.count);
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor="user_number">
            Угадай число
          </label>
          <input
            className={style.input}
            type="number"
            id="user_number"
            onChange={this.handleChange}
            value={this.state.userNumber}
          />
          {!this.state.restart ? (
            <button className={style.btn}>Угадать</button>
          ) : (
            <button onClick={this.handleClickBtn} className={style.btn}>
              Заново
            </button>
          )}
        </form>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
