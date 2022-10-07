import styled from 'styled-components';

export const Container = styled.div`
  table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 27px;
  }

  .table > thead > tr > th,
  .table > tbody > tr > th,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > tbody > tr > td,
  .table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.6875;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  .table-params td {
    padding: 11px 18px !important;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #e5e5e5;
  }

  .table-params tr > td:first-child {
    border-left: 0;
    width: 30%;
    color: ${(props) => props.theme.mainColor};
  }
  .sizes-row {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .sizes-row li {
    min-width: 70px;
    display: inline-block;
    text-align: center;
  }
`;
