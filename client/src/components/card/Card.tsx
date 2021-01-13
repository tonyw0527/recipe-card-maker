import Copyright from "../Copyright";
import { useRecipeStore } from "../../stores/RecipeStore";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #222831;

  color: #dddddd;
  font-family: "NanumBarunGothic";
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 100%;

  margin: 0;
  padding: 1.5rem 1rem;

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

  color: #fad586;
`;
const CardContentBox = styled.div`
  margin-bottom: 1rem;
`;
const CardContentName = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  padding: 0.5rem;

  font-family: "yg-jalnan";
  text-align: center;
  font-weight: 700;
  font-size: 2.3rem;

  color: white;
`;
const CardContentImg = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 1rem;
  border-radius: 0.5rem;

  object-fit: cover;
`;

const CardBasicBox = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 0.6rem;
  word-break: keep-all;
  line-height: 1.5rem;
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
  font-size: 1.1rem;
`;

export default function Card() {
  const recipe = useRecipeStore();

  const renderHowto = () => {
    return recipe.howto.map((item, index) => {
      return (
        <Li>
          <HowtoSpan>{index + 1} </HowtoSpan> {item}
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
