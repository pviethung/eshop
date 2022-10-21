import { animated, useTransition } from '@react-spring/web';
import { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import styled, { useTheme } from 'styled-components';
import { colors, transition } from '../GlobalStyle';

const Container = styled.div``;
const ChangeButton = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #fff;
  cursor: pointer;
  position: fixed;
  z-index: 1;
  top: calc(50% + 40px);
  right: 0;
  transform: translateY(-50%);
  svg {
    transition: ${transition};
  }
  &:hover {
    svg {
      transform: rotate(80deg);
    }
  }
`;
const ColorScheme = styled(animated.div)`
  position: fixed;
  z-index: 1;
  right: 15px;
  top: 50%;
  box-shadow: rgb(99 115 129 / 36%) 0px 5px 20px -5px;
  padding: 10px;
  padding-top: 30px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  > a {
    cursor: pointer;
    position: absolute;
    top: -20px;
    right: -20px;
    path {
      stroke: #777;
    }
  }
  > div {
    border: 1px solid #e5e5e5;
    margin: 5px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    > div {
      width: 20px;
      height: 20px;
      transition: ${transition};
    }

    &:hover,
    &.active {
      > div {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

const ChangeColorScheme = () => {
  const { changeTheme, mainColor } = useTheme();
  const [showScheme, setShowScheme] = useState(false);
  const handleShow = () => {
    setShowScheme((prev) => !prev);
  };
  const transitions = useTransition(showScheme, {
    from: { opacity: 0, x: 50 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 50 },
  });

  return (
    <Container>
      {transitions((style, item) => (
        <>
          {!item && (
            <ChangeButton style={style}>
              <AiOutlineSetting
                onClick={(e) => handleShow()}
                color={mainColor}
                fontSize={40}
              />
            </ChangeButton>
          )}
          {item && (
            <ColorScheme style={style}>
              {colors.map((color) => (
                <div
                  className={`${mainColor === color ? 'active' : ''}`}
                  key={color}
                  onClick={(e) => changeTheme(false, color)}
                >
                  <div style={{ backgroundColor: color }}></div>
                </div>
              ))}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleShow();
                }}
              >
                <GrFormClose fontSize={40} />
              </a>
            </ColorScheme>
          )}
        </>
      ))}
    </Container>
  );
};
export default ChangeColorScheme;
