import { Text, View } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import styled, { css } from "styled-components/native";
import * as Svg from "react-native-svg";
import { SvgXml } from "react-native-svg";

const Title = styled(Text)`
  /* padding-top: ${(props) => props.theme.space[2]}; */
  font-family: ${(props) => props.theme.fonts.title};
  margin-bottom: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const RestrauntCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  elevation: 4;
`;

const RestrauntCardCover = styled(Card.Cover)`
  border-bottom-left-radius: ${(props) => props.theme.space[0]};
  border-bottom-right-radius: ${(props) => props.theme.space[0]};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-top: ${(props) => props.theme.space[1]};
`;

const Wrapper = styled(View)`
  padding: 18px;
  /* gap: 10px; */
`;

const StarWrapper = styled(View)`
  flex-direction: row;
`;

const StarsOpenWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OpenText = styled(Text)`
  background-color: ${(props) => props.theme.colors.text.success};
  padding-right: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.bg.primary};
`;
const CloseText = styled(Text)`
  background-color: ${(props) => props.theme.colors.text.error};
  padding-right: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestrauntInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restraunt",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    address = "100 some random street",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingStars = Array.from({ length: rating }, (_, index) => {
    console.log(index);
    return (
      <SvgXml
        xml={`
           <svg
              xmlns="http://www.w3.org/2000/svg"
             fill="#f59e0b"
                 viewBox="0 0 24 24"
                   stroke-width="1.5"
                stroke="currentColor"
             class="w-6 h-6"
           >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
      </svg>
    `}
        width={20}
        height={20}
        key={index}
      />
    );
  });

  return (
    <RestrauntCard style={{ margin: 10 }}>
      {/* <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
      />
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content> */}
      <RestrauntCardCover source={{ uri: photos[0] }} />
      {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
      <Wrapper>
        <Title>{name}</Title>
        <StarsOpenWrapper>
          <StarWrapper>{ratingStars}</StarWrapper>
          {isOpenNow ? (
            <OpenText>Open Now</OpenText>
          ) : (
            <CloseText>Closed Temporarily</CloseText>
          )}
        </StarsOpenWrapper>
        <Address>{address}</Address>
      </Wrapper>
    </RestrauntCard>
  );
};

