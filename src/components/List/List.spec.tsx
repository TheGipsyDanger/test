import * as React from "react";
import { List } from "./";
import { render } from "@testing-library/react-native";

const data = [{}, {}, {}, {}, {}];

describe("Render List", () => {
  it("Should be List exist", () => {
    const { getByTestId } = render(
      <List data={data} title="Cardápio" variant="menu" />
    );
    const currentElement = getByTestId(`List`);
    expect(currentElement).toBeTruthy();
  });

  it("Should be List has a correct title", () => {
    const { getByTestId } = render(
      <List data={data} title="Cardápio" variant="menu" />
    );
    const currentElement = getByTestId(`List:Title`);
    expect(currentElement).toBeTruthy();

    expect(currentElement.props.variant).toBe("outback:h8");
    expect(currentElement.props.children).toBe("Cardápio");
  });
});

describe("Render List (Menu)", () => {
  it("Should be List Menu has a correct length", () => {
    const { getAllByTestId } = render(
      <List data={data} title="Cardápio" variant="menu" />
    );
    const listElements = getAllByTestId(`List:Menu.Item`);
    expect(listElements).toBeTruthy();
    expect(listElements).toHaveLength(5);
  });
});

// describe("Render List (BestSellers)", () => {
//   it("Should be List Menu has a correct length", () => {
//     const { getAllByTestId } = render(
//       <List data={data} title="Mais vendidos" variant="bestSellers" />
//     );
//     const listElements = getAllByTestId(`List:Menu.BestSellers`);
//     expect(listElements).toBeTruthy();
//     expect(listElements).toHaveLength(5);
//   });
// });

// describe("Render List (Promotions)", () => {
//   it("Should be List Menu has a correct length", () => {
//     const { getAllByTestId } = render(
//       <List data={data} title="Promoções" variant="promotions" />
//     );
//     const listElements = getAllByTestId(`List:Menu.Promotions`);
//     expect(listElements).toBeTruthy();
//     expect(listElements).toHaveLength(5);
//   });
// });

// describe("Render List (More)", () => {
//   it("Should be List Menu has a correct length", () => {
//     const { getAllByTestId } = render(
//       <List data={data} title="Mais Outback" variant="more" direction="y" />
//     );
//     const listElements = getAllByTestId(`List:Menu.More`);
//     expect(listElements).toBeTruthy();
//     expect(listElements).toHaveLength(5);
//   });
// });
