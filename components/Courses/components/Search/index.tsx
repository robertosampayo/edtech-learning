import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PillBoxButton from "../../../PillBoxButton";

import {
  InputSearch,
  InputSearchWrapper,
  SearchButtonWrapper,
  SearchIcon,
} from "./Search.styles";
import { debounce } from "lodash";
import { motion } from "framer-motion";

interface ISearchProps {
  onSearch: (text: string) => void;
}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const [text, setText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const debounceSearch = useMemo(() => {
    // set text in state after delay
    return debounce(handleInput, 400);
  }, []);

  const focus = (event) => {
    event.preventDefault();
    setText("");

    setTimeout(() => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.value = "";
        inputRef?.current?.focus();
      }
    }, 0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.value = "";
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    props.onSearch(text);
  }, [text]);

  useEffect(() => {
    return () => {
      //cancel debounce when unmount
      debounceSearch.cancel();
    };
  }, []);

  return (
    <>
      <InputSearchWrapper>
        <SearchButtonWrapper>
          <PillBoxButton
            ariaLevel={"search-icon"}
            onClick={focus}
            icon={<SearchIcon size="1.5rem" />}
          />
        </SearchButtonWrapper>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            default: {
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
        >
          <InputSearch
            onClick={focus}
            data-testid="search-input"
            ref={inputRef}
            placeholder="Type a course name ..."
            onChange={debounceSearch}
          />
        </motion.div>
      </InputSearchWrapper>
    </>
  );
};

export default React.memo(Search);
