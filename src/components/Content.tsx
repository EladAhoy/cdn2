import { useEffect, useState, useReducer } from "react";
import "./Content.css";
import BusinessCard from "./BusinessCard";
import ToastWithBackdrop from "./ToastWithBackdrop";
import Backdrop from "./Backdrop";
import { initialState, reducer } from "./reducer";
import MyContext from "./context";
import { SchemaService } from "../services/schemaService";
import { GifService } from "../services/gifService";
import { DataService } from "../services/dataService";
import { store } from "../configure-store";
import { Provider } from "react-redux";
import React from "react";
import { FixMeLater } from "../types/general";
import "animate.css";

function chunkArray({ array, chunkSize }: FixMeLater) {
  const chunks = [];
  let i = 0;

  while (i < array.length) {
    // @ts-ignore
    chunks.push(array.slice(i, i + chunkSize));
    i += chunkSize;
  }

  return chunks;
}

const replaceNameWithBusinessName = ({
  cardsSchema,
  unknownMerchantsData,
}: FixMeLater) => {
  if (!cardsSchema || !unknownMerchantsData) return cardsSchema;
  const { unknownMerchants } = unknownMerchantsData;
  if (!unknownMerchants) return cardsSchema;
  let newCardsSchema = cardsSchema.map(
    (item: FixMeLater, index: FixMeLater) => {
      item.name = unknownMerchants[index] || "removeItem";
      return item;
    }
  );
  newCardsSchema = newCardsSchema.filter(
    (item: FixMeLater) => item.name !== "removeItem"
  );
  return newCardsSchema;
};

function renderSections({ gifsData, unknownMerchantsData }: FixMeLater) {
  console.log({ gifsData, unknownMerchantsData });
  let cardsSchema = SchemaService.getCardsSchema;
  cardsSchema = replaceNameWithBusinessName({
    cardsSchema,
    unknownMerchantsData,
  });
  const maxNumberOfCardsInRow = 4;
  const chunkedArray = chunkArray({
    array: cardsSchema,
    chunkSize: maxNumberOfCardsInRow,
  });
  console.log({ chunkedArray });
  const sections = chunkedArray.map((item, index) => (
    <section key={index} className="cards">
      {renderCardsFromArr({ gifsData, item, unknownMerchantsData })}
    </section>
  ));
  return <article className="cards-container">{sections}</article>;
}

function renderCardsFromArr({
  gifsData,
  item,
  unknownMerchantsData = [],
}: FixMeLater) {
  if (!gifsData || !gifsData?.gifs) return;
  const {
    gifs: { data },
  } = gifsData;
  const cards = item?.map((item: FixMeLater, index: number) => (
    <BusinessCard key={index} item={item} gifData={data[index]} />
  ));
  return cards;
}

function validateGifsHeight({ gifs }: FixMeLater) {
  if (!gifs || !gifs?.data) return;
  const { data } = gifs;
  const gifsHeight = data.map(
    (item: FixMeLater) => item.images.original.height
  );
  const gifsWidth = data.map((item: FixMeLater) => item.images.original.width);
  const gifsRatio = gifsHeight.map(
    (item: FixMeLater, index: FixMeLater) => item / gifsWidth[index]
  );
  console.log({ gifsRatio });
}

export default function Content() {
  const [showToast, setshowToast] = useState(true);
  const [gifsData, setGifsData] = useState(null);
  const [unknownMerchantsData, setUnknownMerchantsData] = useState(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const fadeOutDuration = isMobile ? 5800 : 8800;
    const timer = setTimeout(() => setshowToast(false), fadeOutDuration);
    return () => clearTimeout(timer);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchGifs() {
      // const getGifsData = await GifService.getGifsData();
      // console.log({ getGifsData });
      const gifs = await GifService.getGifs();
      validateGifsHeight({ gifs });
      //@ts-ignore
      setGifsData({ gifs });
    }
    if (!gifsData) {
      fetchGifs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchUnknownMerchantsData() {
      const unknownMerchants = await DataService.getUnknownMerchantsData();
      console.log({ unknownMerchants });
      //@ts-ignore
      setUnknownMerchantsData({ unknownMerchants });
    }
    if (!unknownMerchantsData) {
      fetchUnknownMerchantsData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <main className="content">
        <ToastWithBackdrop show={showToast} />
        <MyContext.Provider value={{ state, dispatch }}>
          <Backdrop
            customComponent={state?.customComponent || "funFacts"}
            noButton={true}
          ></Backdrop>
          {renderSections({ gifsData, unknownMerchantsData })}
        </MyContext.Provider>
      </main>
    </Provider>
  );
}
