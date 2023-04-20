import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  /* 모바일 처리 */
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
  }
  width: 412px;
  height: 700px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 30px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
