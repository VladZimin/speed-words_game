import React from 'react';

export const Result = ({stats, onClickStart}) => {
  let resultObj = {
    icon: '',
    label: ''
  }

  if (stats.sec >= 10) {
    resultObj = {
      icon: '😓',
      label: 'Неплохо! '
    }
  } else {
    resultObj = {
      icon: '😊',
      label: 'Отлично! '
    }
  }
  return (
    <div class="flex result">
      <>
        <div className="result__top-icon">{resultObj.icon}</div>
        <p className="result__phrase">
          {resultObj.label} За <b>{stats.sec} секунд</b>, ты ввел:
        </p>
      </>
      <div class="result__number-of-words">{stats.wordsCount} слова</div>
      <button onClick={onClickStart} class="button">🤔 Попробовать снова?</button>
    </div>
  );
};
