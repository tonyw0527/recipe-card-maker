import Copyright from "../Copyright";
import { useRecipeStore } from "../../stores/RecipeStore";
import styled from "styled-components";

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  color: #dddddd;
  background: #222831;

  @font-face {
    font-family: "yg-jalnan";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot");
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix")
        format("embedded-opentype"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff")
        format("woff"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 700;
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot");
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix")
        format("embedded-opentype"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff")
        format("woff"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 300;
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot");
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix")
        format("embedded-opentype"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff")
        format("woff"),
      url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf")
        format("truetype");
  }

  .nanumbarungothic * {
    font-family: "NanumBarunGothic", sans-serif;
  }

  font-family: "NanumBarunGothic";
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 100%;

  margin: 0;
  padding: 0.5rem 1rem;

  background: #222831;
`;

const CardSubTitle = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;

  font-family: "NanumBarunGothic";
  font-weight: 700;
  font-size: 1.1rem;
  text-align: start;

  color: white;
`;
const CardContentBox = styled.div`
  margin-bottom: 1rem;
`;
const CardContentName = styled.span`
  display: block;
  margin-bottom: 0.5rem;

  font-family: "yg-jalnan";
  text-align: center;
  font-weight: 700;
  font-size: 2.3rem;

  color: white;
`;
const CardContentImg = styled.img`
  width: 200px;
  height: 200px;

  object-fit: cover;
`;

const CardBasicBox = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 0.6rem;
`;

const CardIngredientsBox = styled(CardBasicBox)``;

const CardUtensilsBox = styled(CardBasicBox)``;

const CardDescBox = styled(CardBasicBox)`
  line-height: 1.5rem;
`;

const CardHowtoBox = styled(CardBasicBox)``;

const CardHowtoOl = styled.ol`
  list-style: none;
`;
const Li = styled.li`
  margin-bottom: 0.5rem;
`;
const HowtoSpan = styled.span`
  font-weight: 700;
`;

const CardControlBox = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 0.5rem;
`;
const CardControlBtn = styled.button`
  border: 0;
  background: none;

  color: #dddddd;
  font-size: 1.1rem;

  &: hover {
    cursor: pointer;
  }
`;

export default function Card() {
  const recipe = useRecipeStore();

  const renderHowto = () => {
    return recipe.howto.map((item, index) => {
      return (
        <Li>
          <HowtoSpan>{index + 1}</HowtoSpan> {item}
        </Li>
      );
    });
  };

  return (
    <Wrapper>
      <CardBox id="capture">
        <CardContentBox>
          <CardContentName>{recipe.name}</CardContentName>
          <CardContentImg id="food_img" src={recipe.img} alt={recipe.name} />
        </CardContentBox>

        <CardSubTitle>{"재료"}</CardSubTitle>
        <CardIngredientsBox>{recipe.ingredients}</CardIngredientsBox>
        <CardSubTitle>{"도구"}</CardSubTitle>
        <CardUtensilsBox>{recipe.utensils}</CardUtensilsBox>
        <CardSubTitle>{"만드는 법"}</CardSubTitle>
        <CardHowtoBox>
          <CardHowtoOl>{renderHowto()}</CardHowtoOl>
        </CardHowtoBox>
        <CardSubTitle>{"이 요리는"}</CardSubTitle>
        <CardDescBox>{recipe.desc}</CardDescBox>
        <Copyright />
      </CardBox>
    </Wrapper>
  );
}
