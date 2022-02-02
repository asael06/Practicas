import { Container } from "./styles";

export const Component2 = ({ text = "ola mundo" }) => {
  return (
    <Container>
      <table border={1}>
        <thead>
          <th>column1</th>
          <th>column2</th>
          <th>column3</th>
        </thead>
        <tbody>
          <tr>
            <td>data column 1</td>
            <td>data column 2</td>
            <td>data column 3</td>
          </tr>
          <tr>
            <td>data column 1 row 2</td>
            <td>data column 2 row 2</td>
            <td>data column 3 row 2</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
