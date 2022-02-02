import { Container } from "./styles";

/*
  {
    header:"text",
    img:"url",
    altText:text,
  }
*/

export const Component = ({ header, img, altText }) => {
  return (
    <Container>
      <h1>{header}</h1>
      <img src={img} alt={altText} />
    </Container>
  );
};
