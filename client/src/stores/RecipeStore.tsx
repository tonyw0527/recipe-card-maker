import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

// class RecipeStore {
//   name: string;

//   constructor() {
//     this.name = "test";
//   }

//   setName(newName: string) {
//     this.name = newName;
//   }
// }

type RecipeContextType = {
  name: string;
  img: string;
  ingredients: string;
  utensils: string;
  howto: Array<string>;
  desc: string;

  setName: Dispatch<SetStateAction<string>>;
  setImg: Dispatch<SetStateAction<string>>;
  setIngredients: Dispatch<SetStateAction<string>>;
  setUtensils: Dispatch<SetStateAction<string>>;
  setHowto: Dispatch<SetStateAction<Array<string>>>;
  setDesc: Dispatch<SetStateAction<string>>;
};

const defaultValue = {
  name: "",
  img: "",
  ingredients: "",
  utensils: "",
  howto: [],
  desc: "",

  setName: () => {},
  setImg: () => {},
  setIngredients: () => {},
  setUtensils: () => {},
  setHowto: () => {},
  setDesc: () => {},
};

const RecipeContext = createContext<RecipeContextType>(defaultValue);

type RecipeProviderProps = {
  children: React.ReactNode;
};

// Provider - for index.js
export const RecipeProvider = ({ children }: RecipeProviderProps) => {
  const [name, setName] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [utensils, setUtensils] = useState<string>("");
  const [howto, setHowto] = useState<Array<string>>([]);
  const [desc, setDesc] = useState<string>("");

  return (
    <RecipeContext.Provider
      value={{
        name,
        img,
        ingredients,
        utensils,
        howto,
        desc,
        setName,
        setImg,
        setIngredients,
        setUtensils,
        setHowto,
        setDesc,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

// useStore - for componenets
export const useRecipeStore = () => useContext(RecipeContext);
