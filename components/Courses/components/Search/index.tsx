import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PillBoxButton from "../../../PillBoxButton";
import { IoCloseSharp } from "react-icons/io5";
import {
  CloseButtonWrapper,
  InputSearch,
  InputSearchWrapper,
  SearchButtonWrapper,
  SearchIcon,
  InputMask,
} from "./Search.styles";
import { debounce } from "lodash";
import { motion } from "framer-motion";

interface ISearchProps {
  onSearch: (text: string) => void;
}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  const [mantainSearch, setMantainSearch] = useState(false);
  const [hoverIsRemoved, setRemoveHover] = useState(false);
  const [text, setText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const debounceSearch = useMemo(() => {
    // set text in state after delay
    return debounce(handleInput, 800);
  }, []);

  const showSearchInput = () => {
    setText("");
    setShowSearch(true);
    setMantainSearch(true);
    setRemoveHover(true);
    setTimeout(() => inputRef?.current?.focus(), 0);
  };

  const closeSearch = () => {
    setMantainSearch(false);
    setRemoveHover(false);
  };

  const onHoverSearch = () => (hoverIsRemoved ? null : setShowSearch(true));
  const onLeaveSearch = () => {
    setTimeout(() => inputRef?.current?.focus(), 0);
    setShowSearch(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        closeSearch();
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
      <SearchButtonWrapper>
        <PillBoxButton
          ariaLevel={"search-icon"}
          onClick={showSearchInput}
          onHover={onHoverSearch}
          onLeave={onLeaveSearch}
          icon={<SearchIcon size="1.5rem" />}
        />
      </SearchButtonWrapper>

      {showSearch ? (
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
          <InputMask />
        </motion.div>
      ) : null}
      {mantainSearch ? (
        <InputSearchWrapper>
          <CloseButtonWrapper>
            <PillBoxButton
              ariaLevel="close-search"
              onClick={closeSearch}
              icon={<IoCloseSharp size="1.5rem" color="#9c9b9b" />}
            />
          </CloseButtonWrapper>
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
              data-testid="search-input"
              ref={inputRef}
              placeholder="Type a course name ..."
              onChange={debounceSearch}
            />
          </motion.div>
        </InputSearchWrapper>
      ) : null}
    </>
  );
};

export default React.memo(Search);
