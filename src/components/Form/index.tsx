import React, { useEffect, useState } from "react";
import { useRef } from "react";
import SubHeader from "../Headers/SubHeader";
import Card from "./Card";
import FormButton from "../Form/Button";
import FormDropdown from "./Dropdown/Dropdown";
import "./index.css";

const Form = () => {
  const input = useRef<string>("");
  const [cards, setCards] = useState<Array<any>>(() => {
    const saved = localStorage?.getItem("data");
    const initalValue = JSON.parse(String(saved));

    return initalValue || [];
  });
  const selectedOption = useRef<string>("text-davinci-002");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(cards));
  }, [cards]);
  const changed = (e: any) => {
    selectedOption.current = e.target.value;
  };

  const onSubmit = async () => {
    if (input.current) {
      const textArea = document.getElementById("prompt");

      const submitButton = document.getElementById("Submit");

      submitButton!.innerText = "Loading..";
      textArea?.classList.remove("error");
      const data = {
        prompt: input.current,
        max_tokens: 64,
      };
      await fetch(
        `https://api.openai.com/v1/engines/${selectedOption.current}/completions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => {
          const promise = res.json();

          promise.then((res) => {
            setCards([
              {
                input: input.current,
                output: res.choices[0].text,
                option: selectedOption.current,
              },
              ...cards,
            ]);
          });

          submitButton!.innerText = "Submit";
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const textArea = document.getElementById("prompt");

      textArea?.classList.add("error");
      console.log("No input");
    }
  };

  const clear = () => {
    setCards([]);
  };

  const chooseColor = (type: string) => {
    switch (type) {
      case "text-davinci-002":
        return "text-davinci-002";
      case "text-curie-001":
        return "text-curie-001";
      case "text-babbage-001":
        return "text-babbage-001";
      case "text-ada-001":
        return "text-ada-001";
    }
  };

  const displayCards = () => {
    return cards.map((card, index) => {
      return (
        <div>
          <Card
            key={index}
            type={card.option}
            prompt={card.input}
            response={card.output}
            badgeColor={chooseColor(card.option)}
          />
        </div>
      );
    });
  };

  return (
    <div className="text-center w-6/12 mt-10">
      <div className="flex flex-row justify-center mb-10">
        <SubHeader title="Engine:" />
        <FormDropdown
          change={changed}
          list={[
            "text-davinci-002",
            "text-curie-001",
            "text-babbage-001",
            "text-ada-001",
          ]}
        />
      </div>

      <SubHeader title="Prompt" />

      <div>
        <textarea
          placeholder="Type here"
          className="textarea w-9/12 h-60 border-2 focus:border-blue-400 text-[black]"
          onChange={(e) => (input.current = e.target.value)}
          id="prompt"
        ></textarea>
      </div>

      <FormButton onSubmit={onSubmit} title="Submit" />

      <div className="flex flex-row mt-20 text-left">
        <div className="w-6/12">
          <SubHeader title="Responses" />
        </div>

        <div className="w-full">
          <div className="float-right">
            <FormButton onSubmit={clear} title="clear list" />
          </div>
        </div>
      </div>
      {displayCards()}
    </div>
  );
};

export default Form;
