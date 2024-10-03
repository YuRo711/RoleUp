import GameCard from "../../GameCard/GameCard";
import "./Events.css";

export default function Events(props) {
  const { texts, gameCards, dndCards, events, cardTexts, lang } = props;

  return (
    <main className="events">
      <h1 className="main__title">{texts.title}</h1>
      <div className="events__cards">
      {
        events.map((event, i) => (
          <div className="events__event" key={`event-${i}`}>
            <h2 className="events__date">{event.date}
            <span className="events__city">{event.city[lang]}</span>
            </h2>
            <GameCard
              card={
                event.isDnd ? dndCards[event.index] : gameCards[event.index]
              }
              texts={cardTexts}
              eventLink={event.link}
            />
          </div>
        ))
      }
      </div>
    </main>
  );
}