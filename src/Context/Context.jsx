import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { reducer } from "./Reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [apiproducts, setApiProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    filterForCategory();
  }, [apiproducts, currentCategory]);
  const fetchApi = async () => {
    const api = await fetch("https://itproducts.onrender.com/products");
    const data = await api.json();
    setApiProducts(data);
  };

  const initialState = {
    product: [],
    cart: [],
  };
  const filterForCategory = () => {
    if (currentCategory === "All") {
      dispatch({ type: "ADD-DATA", payload: apiproducts });
    } else {
      const productsOfCate = apiproducts.filter((p) =>
        p.category.toLowerCase().includes(currentCategory.toLowerCase())
      );
      dispatch({ type: "ADD-DATA", payload: productsOfCate });
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = {
    state,
    setCurrentCategory,
    apiproducts,
    dispatch,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const CurstonContext = () => useContext(StateContext);
