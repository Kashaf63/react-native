import { useState } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestrauntInfo } from "../components/restraunt-info.component";
import { SafeArea } from "../../../components/safe-area.component";
import styled from "styled-components/native";
const SearchWrapper = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledSearchBar = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export function RestrauntScreen() {
  const [search, setSearch] = useState("");

  console.log(search);
  const handleChange = (e) => {
    setSearch(e);
  };

  return (
    <>
      <SearchWrapper>
        <StyledSearchBar
          placeholder="Search"
          onChangeText={handleChange}
          value={search}
        />
      </SearchWrapper>

      {/* <List> */}
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => <RestrauntInfo />}
        keyExtractor={(item) => item.name}
      />
      {/* <RestrauntInfo /> */}
      {/* </List> */}
    </>
  );
}
