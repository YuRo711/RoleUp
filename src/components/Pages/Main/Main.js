import Hero from "../../Hero/Hero";
import "./Main.css";

export default function Main(props) {
  const { texts, images } = props;

  return (
    <main className="main">
      <Hero texts={texts}/>
      <section className="main__section main_section_info">
        <h2 className="main__title">{texts.about}</h2>
        <div className="main__faq">
          {
            texts.questions.map((q, i) => 
              <div className="main__question" key={`question-${i}`}>
                <h3 className="main__question-title">{q.question}</h3>
                <p className="main__answer">{q.answer}</p>
              </div>
            )
          }
        </div>
      </section>
      <section className="main__photos">
        {
          images.map((image, i) => 
            <div className="main__image-container" key={`image-${i}`}>
              <img className="main__image"
                src={image}
              />
            </div>
          )
        }
      </section>
      <section className="main__section main_section_info">
        <h2 className="main__title">{texts.dnd}</h2>
        <div className="main__faq">
          {
            texts.dndQuestions.map((q, i) => 
              <div className="main__question" key={`dnd-${i}`}>
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