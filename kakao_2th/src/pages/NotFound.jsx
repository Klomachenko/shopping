import GlobalTemplate from "../components/templates/global-template/GlobalTemplate";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import PropTypes from "prop-types";

const Styled = {
  Title: styled.h1`
    font-size: 2rem;
    font-weight: 600;
  `,
  Description: styled.h4`
    margin-top: 1rem;
    font-size: 1.2rem;
  `,
  ButtonBox: styled.div`
    margin-top: 1rem;

    button {
      background-color: white;
      color: ${({ theme }) => theme.color.highlight};
    }

    .home {
      margin-right: 1rem;
    }
  `,
};

function NotFound({ title, description }) {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate(routes.home);
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <GlobalTemplate title={title || "404 Not Found"}>
      <Styled.Title>{title || "Not Found"}</Styled.Title>
      <Styled.Description>
        {description || "해당 페이지를 찾을 수 없습니다"}
      </Styled.Description>

      <Styled.ButtonBox>
        <button className="home" onClick={handleHomeButtonClick}>
          홈
        </button>
        <button className="back" onClick={handleBackButtonClick}>
          뒤로 가기
        </button>
      </Styled.ButtonBox>
    </GlobalTemplate>
  );
}

NotFound.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default NotFound;
