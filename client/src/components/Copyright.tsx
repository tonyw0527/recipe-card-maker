import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  color: #d89216;
  font-size: 0.7rem;

  background: none;
`;

const A = styled.a`
  color: #d89216;
`;

export default function Copyright() {
  return (
    <Container>
      {"Copyright © "}
      <A href="https://tonyw.tistory.com/">Tony West</A>{" "}
      {new Date().getFullYear()}
      {"."}
    </Container>
  );
}
