import * as React from "react";
import { FlatList } from "react-native";

import { metrics } from "~/styles";

import { ISlider } from "~/components/PromotionalSlider/data";
import C from "./styles";

const { width } = metrics;

export const Slider = ({
  radius,
  galleryRef,
  sliderImages,
  changeSliderIndex,
}: ISlider) => (
  <FlatList
    testID={"PromotionalSlider:Slider"}
    horizontal
    pagingEnabled
    ref={galleryRef}
    data={sliderImages}
    initialScrollIndex={60}
    extraData={sliderImages}
    keyExtractor={(_, index) => index.toString()}
    showsHorizontalScrollIndicator={false}
    onMomentumScrollEnd={(event) => changeSliderIndex(event)}
    style={{
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      overflow: "hidden",
    }}
    renderItem={({ item }) => (
      <C.Image
        testID={"PromotionalSlider:Slider.Item"}
        resizeMode="stretch"
        source={{
          uri: item.uri,
        }}
      />
    )}
    getItemLayout={(_, index) => ({
      length: width,
      offset: width * index,
      index,
    })}
  />
);
