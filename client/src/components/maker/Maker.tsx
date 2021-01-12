import { useState } from "react";
import { useRecipeStore } from "../../stores/RecipeStore";
import html2canvas from "html2canvas";
import styled from "styled-components";

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  margin: 1rem;
  width: 300px;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.3rem;
  font-size: 1rem;
`;

const HowtoBox = styled.div`
  margin-bottom: 0.5rem;
`;

const Ol = styled.ol`
  list-style: none;
`;
const Li = styled.li`
  margin-bottom: 0.5rem;
`;

type HowtoItemProps = {
  item: string;
  index: number;
};

function HowtoItem({ item, index }: HowtoItemProps) {
  const recipeStore = useRecipeStore();
  return (
    <Li>
      <span>
        {index + 1} {item}{" "}
      </span>
      <button
        type="button"
        onClick={() => {
          recipeStore.setHowto((prevState) =>
            prevState.filter((i) => i !== item)
          );
          console.log(recipeStore.howto);
        }}
      >
        X
      </button>
    </Li>
  );
}

export default function Maker() {
  const recipeStore = useRecipeStore();
  const [howto, setHowto] = useState<string>("");

  const renderHowto = () => {
    return recipeStore.howto.map((item, index) => {
      return <HowtoItem item={item} index={index} />;
    });
  };

  return (
    <Wrapper>
      <H1>레시피 카드 만들기</H1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          type="text"
          placeholder="요리명"
          maxLength={11}
          value={recipeStore?.name}
          onChange={(e) => {
            recipeStore.setName(e.target.value);
          }}
        />
        <Input
          type="file"
          accept="image/*"
          placeholder="이미지"
          onChange={(e) => {
            recipeStore.setImg(e.target.value);
            if (e.target.files && e.target.files[0]) {
              const reader = new FileReader();
              reader.onload = (e) => {
                const img = document.getElementById("food_img");
                if (e.target) {
                  img?.setAttribute("src", e.target.result!.toString());
                }
              };
              reader.readAsDataURL(e.target.files[0]);
            }
          }}
        />
        <Input
          type="text"
          placeholder="재료"
          value={recipeStore?.ingredients}
          onChange={(e) => {
            recipeStore.setIngredients(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="기구"
          value={recipeStore?.utensils}
          onChange={(e) => {
            recipeStore.setUtensils(e.target.value);
          }}
        />
        <Input
          placeholder="만드는 법(Enter를 눌러 순서대로 추가하세요.)"
          value={howto}
          onChange={(e) => {
            setHowto(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              recipeStore.setHowto((prevState) => [...prevState, howto]);
              setHowto("");
            }
          }}
        />
        <HowtoBox>
          <Ol>{renderHowto()}</Ol>
        </HowtoBox>

        <Input
          type="text"
          placeholder="설명"
          value={recipeStore?.desc}
          onChange={(e) => {
            recipeStore.setDesc(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            html2canvas(
              document.querySelector("#capture") ??
                document.createElement("div")
            ).then((canvas) => {
              const anchor = document.getElementById(
                "target"
              ) as HTMLAnchorElement;
              anchor.href = canvas.toDataURL("image/jpeg");
              anchor.download = `${recipeStore.name}.jpg`;
              anchor.click();
            });
          }}
        >
          레시피카드 저장
        </button>
        <a href="#" id="target" style={{ display: "none" }}></a>
      </Form>
    </Wrapper>
  );
}
