import Hero from "../Hero/Hero";
import "./Main.css";

export default function Main(props) {
  const { texts } = props;

  return (
    <main className="main">
      <Hero texts={texts}/>
      <section className="main__info">
        <h2 className="main__title">{texts.about}</h2>
        <div className="main__faq">
          {
            texts.questions.map((q) => 
              <div className="main__question">
                <h3 className="main__question-title">{q.question}</h3>
                <p className="main__answer">{q.answer}</p>
              </div>
            )
          }
        </div>
      </section>
    </main>
  )
}