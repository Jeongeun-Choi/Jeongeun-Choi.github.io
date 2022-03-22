import styled from "@emotion/styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IconButton from "components/Common/IconButton";
import React, {
  FormEvent,
  FunctionComponent,
  useCallback,
  useMemo,
  useRef,
} from "react";

type SearchBar = {
  //   searchText: string;
  //   setSearchText: Dispatch<SetStateAction<string>>;
};

const SearchBar: FunctionComponent<SearchBar> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const SearchButtonStyle = useMemo(() => {
    return {
      fontSize: "18px",
      border: "none",
      position: "absolute",
      top: 12,
      left: 15,
    };
  }, []);

  const handleSearch = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  }, []);

  return (
    <InputForm onSubmit={handleSearch}>
      <Input ref={inputRef} placeholder={"게시글 제목을 입력하세요."} />
      <IconButton icon={faMagnifyingGlass} style={SearchButtonStyle} />
    </InputForm>
  );
};

export default SearchBar;

const InputForm = styled.form`
  width: 768px;
  margin-top: 40px;
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #3d405b;
  padding: 20px 20px 20px 40px;
  font-size: 16px;
`;
