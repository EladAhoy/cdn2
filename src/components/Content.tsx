import { useEffect, useState, useReducer } from "react";
import "./Content.css";
import BusinessCard from "./BusinessCard";
import ToastWithBackdrop from "./ToastWithBackdrop";
import Backdrop from "./Backdrop";
import { initialState, reducer } from "./reducer";
import MyContext from "./context";
import { SchemaService } from "../services/schemaService";
import { GifService } from "../services/gifService";
import { store } from "../configure-store";
import { Provider } from "react-redux";
import React from "react";
import { FixMeLater } from "../types/general";

function chunkArray(array: FixMeLater, chunkSize: number) {
  const chunks = [];
  let i = 0;

  while (i < array.length) {
    chunks.push(array.slice(i, i + chunkSize));
    i += chunkSize;
  }

  return chunks;
}

function renderSections({ gifsData }: FixMeLater) {
  const cardsSchema = SchemaService.getCardsSchema;
  const maxNumberOfCardsInRow = 4;
  const chunkedArray = chunkArray(cardsSchema, maxNumberOfCardsInRow);
  const sections = chunkedArray.map((item, index) => (
    <section key={index} className="cards">
      {renderCardsFromArr({ gifsData, item })}
    </section>
  ));
  return <article className="cards-container">{sections}</article>;
}

function renderCardsFromArr({ gifsData, item }: FixMeLater) {
  if (!gifsData || !gifsData?.gifs) return;
  const {
    gifs: { data },
  } = gifsData;
  const cards = item?.map((item: FixMeLater, index: number) => (
    <BusinessCard key={index} item={item} gifData={data[index]} />
  ));
  return cards;
}

// function renderCards({ gifsData }: FixMeLater) {
//   if (!gifsData || !gifsData?.gifs) return;
//   const {
//     gifs: { data },
//   } = gifsData;
//   const cardsSchema = SchemaService.getCardsSchema;
//   const cards = cardsSchema?.map((item, index) => (
//     <BusinessCard key={index} item={item} gifData={data[index]} />
//   ));
//   return cards;
// }

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

  useEffect(() => {
    const timer = setTimeout(() => setshowToast(false), 8800);
    return () => clearTimeout(timer);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchGifs() {
      // const hello = await GifService.getHello();
      // console.log({ hello });
      const getGifsData = await GifService.getGifsData();
      console.log({ getGifsData });
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

  return (
    <Provider store={store}>
      <main className="content">
        <ToastWithBackdrop show={showToast} />
        <MyContext.Provider value={{ state, dispatch }}>
          <Backdrop
            customComponent={state?.customComponent || "funFacts"}
            noButton={true}
          ></Backdrop>
          {renderSections({ gifsData })}
        </MyContext.Provider>
      </main>
    </Provider>
  );
}
