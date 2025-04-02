import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./Rules.css";

const rulesData = [
  [
    {
      title: "Componentes del Juego",
text: 
  "- Un mazo de 60 cartas.\n" +
  "- Pista de puntuación.\n" +
  "- Fichas de acción especial.\n\n" +
  
  "Cartas numéricas (1-14) en tres colores:\n" +
  "  • Negro (Calaveras)\n" +
  "  • Rojo (Anclas)\n" +
  "  • Azul (Loritos)\n\n" +
  
  "Cartas especiales:\n" +
  "  • 5 Piratas\n" +
  "  • 1 Skull King\n" +
  "  • 1 Sirena\n" +
  "  • 2 Escape (Merienda de Tiburones)\n" +
  "  • 2 Cartas de Fortuna"
    },
    {
      title: "¿Cómo funciona el juego?",
      text: "- El juego se juega en varias rondas, y en cada ronda los jugadores reciben una cantidad creciente de cartas:\n\nRonda	Cartas repartidas\n1	1 carta\n2	2 cartas\n3	3 cartas\n…	…\n10	10 cartas\n\nCada ronda sigue este orden de juego:\n\nApuesta de bazas\nAntes de jugar las cartas, cada jugador debe predecir cuántas bazas (trucos) ganará en la ronda.\nTodos los jugadores levantan los puños y, a la cuenta de '1, 2, 3… ¡Arrr!', muestran con los dedos cuántas bazas creen que ganarán.\n\nJuego de bazas\nUn jugador inicia la baza jugando cualquier carta."
    }
  ],
  [
    {
      title: "Jerarquía de Cartas",
      text: "- Cartas numéricas (de 1 a 14):\n  - Debes seguir el color inicial si es posible.\n  - La carta más alta del color inicial gana a menos que se juegue una carta especial.\n\n- Cartas negras (Calaveras):\n  - Funcionan como triunfo: vencen cualquier carta azul o roja.\n  - Si hay varias cartas negras, gana la de valor más alto.\n\n- Cartas especiales (ordenadas de más débil a más fuerte):\n  -Escape (Merienda de Tiburones): Pierde automáticamente la baza."
    },
    {
      title: "Jerarquía de Cartas (cont.)",
      text: "- Piratas: Vencen cualquier carta numérica, incluidas las negras.\n\n- Sirena: Vence a todos los piratas.\n\n- Skull King: Vence a todas las cartas, excepto la Sirena (la Sirena derrota al Skull King).\n\nRegla especial: Si el Skull King es jugado y hay Piratas en la baza, el Skull King los captura y gana 30 puntos adicionales por cada Pirata en la baza."
    }
  ],
  [
    {
      title: "Puntuación",
      text: "- Resultado	Puntos\n  - Acertar exactamente la apuesta	+20 puntos por cada baza ganada\n  - Fallar la apuesta (por arriba o abajo)	-10 puntos por cada diferencia con la predicción\n  - No ganar ninguna baza y haber apostado 0	+10 puntos por cada ronda jugada (ej: en la ronda 6, ganarías 60 puntos)\n  - Capturar un Pirata con Skull King	+30 puntos por Pirata capturado"
    },
    {
      title: "Resumen",
      text: "El objetivo del juego es ganar más puntos que los demás jugadores a través de apuestas y ganar las bazas. Usa tus cartas especiales sabiamente para sorprender a tus oponentes y ¡buena suerte!"
    }
  ]
];

const Rules = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="rules-page">
      <div className="rules-container">
        <h1>Game Rules</h1>
        <Slider {...settings}>
          {rulesData.map((slide, index) => (
            <div key={index} className="rule-slide">
              <div className="rule-block-container">
                <div className="rule-block">
                  <h2>{slide[0].title}</h2>
                  <p>{slide[0].text.replace(/\\n/g, "\n")}</p>
                </div>
                <div className="rule-block">
                  <h2>{slide[1].title}</h2>
                  <p>{slide[1].text.replace(/\\n/g, "\n")}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Rules;
