import React from 'react';
import styled from 'styled-components';

const HeatMap = () => {
  //https://bitsofco.de/github-contribution-graph-css-grid/
  const squares = document.querySelector('.squares');
  for (var i = 1; i < 365; i++) {
    const level = Math.floor(Math.random() * 3);
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
  }

  return (
    <StyledContainer>
      <div className="graph">
        <ul className="months">
          <li>Jan</li>
          <li>Feb</li>
          <li>Mar</li>
          <li>Apr</li>
          <li>May</li>
          <li>Jun</li>
          <li>Jul</li>
          <li>Aug</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>Dec</li>
        </ul>
        <ul className="days">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="squares">{/* added via javascript */}</ul>
      </div>
    </StyledContainer>
  );
};

export default HeatMap;

const StyledContainer = styled.div`
  /* Article - https://bitsofco.de/github-contribution-graph-css-grid/ */

  /* Grid-related CSS */

  :root {
    --square-size: 15px;
    --square-gap: 5px;
    --week-width: calc(var(--square-size) + var(--square-gap));
  }

  .months {
    grid-area: months;
  }
  .days {
    grid-area: days;
  }
  .squares {
    grid-area: squares;
  }

  .graph {
    display: inline-grid;
    grid-template-areas:
      'empty months'
      'days squares';
    grid-template-columns: auto 1fr;
    grid-gap: 10px;
  }

  .months {
    display: grid;
    grid-template-columns:
      calc(var(--week-width) * 4) /* Jan */
      calc(var(--week-width) * 4) /* Feb */
      calc(var(--week-width) * 4) /* Mar */
      calc(var(--week-width) * 5) /* Apr */
      calc(var(--week-width) * 4) /* May */
      calc(var(--week-width) * 4) /* Jun */
      calc(var(--week-width) * 5) /* Jul */
      calc(var(--week-width) * 4) /* Aug */
      calc(var(--week-width) * 4) /* Sep */
      calc(var(--week-width) * 5) /* Oct */
      calc(var(--week-width) * 4) /* Nov */
      calc(var(--week-width) * 5) /* Dec */;
  }

  .days,
  .squares {
    display: grid;
    grid-gap: var(--square-gap);
    grid-template-rows: repeat(7, var(--square-size));
  }

  .squares {
    grid-auto-flow: column;
    grid-auto-columns: var(--square-size);
  }

  /* Other styling */

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 12px;
  }

  .graph {
    padding: 20px;
    border: 1px #e1e4e8 solid;
    margin: 20px;
  }

  .days li:nth-child(odd) {
    visibility: hidden;
  }

  .squares li {
    background-color: #ebedf0;
  }

  .squares li[data-level='1'] {
    background-color: #c6e48b;
  }

  .squares li[data-level='2'] {
    background-color: #7bc96f;
  }

  .squares li[data-level='3'] {
    background-color: #196127;
  }
`;
