import Head from "next/head";
import Link from "next/link";

export default function Home(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={props.description}></meta>
        <title>{props.title}</title>
      </Head>
      <section className="hero home-hero">
        <div className="container">
          <h1 className="heading heading-primary">
            <span className="heading-primary__text">Hi i'm Anoop Singh</span>
            <br />
          </h1>
          <span className="heading-primary__text" style={{ fontSize: "18px" }}>
            2.8+ yr Expreirence
          </span>
          <div className="hero__info home-hero__info">
            <p className="text-primary hero__text-primary">
              Full Stack Developer | React Js | Node js | PHP Laravel | MySQL |
              MongoDB | Redux | GitHub
            </p>
          </div>
          <div className="hero__cta home-hero__cta">
            <Link href="/#about">
              <a className="btn btn--primary hero__btn">About Me</a>
            </Link>
            <Link href="/#projects">
              <a className="btn btn--secondary hero__btn"> My Projects </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <div className="about__main">
            <div className="about__content">
              <div className="about__main-content">
                <h2 className="heading heading-sec section-heading">
                  <span>About Me</span>
                </h2>
                <div className="about__text-content">
                  <p className="text-sec about__text-sec">
                    As a skilled developer with 2.8 years of experience, I
                    specialize in a variety of technologies such as Reactjs,
                    Nodejs, PHP, Laravel, Redux, Docker, and Firebase. I have
                    honed my skills in these areas through various projects,
                    working with different teams and clients, and learning new
                    techniques and best practices along the way.
                  </p>
                  <br />
                  <p className="text-sec about__text-sec">
                    My experience with PHP and Laravel has also been
                    instrumental in my development journey. I have created
                    several custom applications using PHP and Laravel,
                    leveraging the framework's robust features and tools to
                    develop high-performance applications. I am also well-versed
                    in Redux, which has helped me develop complex applications
                    with efficient state management.
                  </p>
                  <br />
                  {/* <p className="text-sec about__text-sec">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores iure ratione inventore in quam vitae quidem mollitia
                    praesentium natus voluptates, explicabo, aliquid illo
                    laborum consectetur iusto, totam optio enim dolorum.
                  </p> */}
                </div>
                <Link href="/#contact">
                  <a className="btn btn--primary"> Contact </a>
                </Link>
              </div>
              <div className="about__visual-content">
                <div className="about__img-cont">
                  <img src="/jpeg/aboutme.jpg" className="about__img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="heading heading-sec section-heading">
            <span>Projects</span>
          </h2>
          <div className="projects-list">
            <Link href="/project-cs">
              <div className="projects-list__project">
                <div className="projects-list__img-cont">
                  <img
                    src="/jpeg/p1.jpg"
                    alt="project image"
                    className="projects-list__img"
                  />
                </div>
                <h3 className="projects-list__heading">
                  IOT Montioring System
                </h3>
                <p className="text-tertiary projects-list__text-tertiary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam assumenda illo enim doloribus nesciunt, cumque rerum
                  nihil, eaque dolorum inventore fuga velit ullam repudiandae
                  sequi eveniet? Explicabo
                </p>

                <a className="btn btn--theme projects-list__btn">Case Study</a>
              </div>
            </Link>
            <Link href="/project-cs">
              <div className="projects-list__project">
                <div className="projects-list__img-cont">
                  <img
                    src="/jpeg/p2.jpg"
                    alt="project image"
                    className="projects-list__img"
                  />
                </div>
                <h3 className="projects-list__heading">Qoute Builder</h3>
                <p className="text-tertiary projects-list__text-tertiary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam assumenda illo enim doloribus nesciunt, cumque rerum
                  nihil, eaque dolorum inventore fuga velit ullam repudiandae
                  sequi eveniet? Explicabo
                </p>

                <a className="btn btn--theme projects-list__btn">Case Study</a>
              </div>
            </Link>
            <Link href="/project-cs">
              <div className="projects-list__project">
                <div className="projects-list__img-cont">
                  <img
                    src="/jpeg/p3.jpg"
                    alt="project image"
                    className="projects-list__img"
                  />
                </div>
                <h3 className="projects-list__heading">Pharmacy Management</h3>
                <p className="text-tertiary projects-list__text-tertiary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam assumenda illo enim doloribus nesciunt, cumque rerum
                  nihil, eaque dolorum inventore fuga velit ullam repudiandae
                  sequi eveniet? Explicabo
                </p>

                <a className="btn btn--theme projects-list__btn">Case Study</a>
              </div>
            </Link>
            <Link href="/project-cs">
              <div className="projects-list__project">
                <div className="projects-list__img-cont">
                  <img
                    src="/jpeg/p4.jpg"
                    alt="project image"
                    className="projects-list__img"
                  />
                </div>
                <h3 className="projects-list__heading">Multiservice Panel</h3>
                <p className="text-tertiary projects-list__text-tertiary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam assumenda illo enim doloribus nesciunt, cumque rerum
                  nihil, eaque dolorum inventore fuga velit ullam repudiandae
                  sequi eveniet? Explicabo
                </p>

                <a className="btn btn--theme projects-list__btn">Case Study</a>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="heading heading-sec section-heading contact__heading">
            <span>Contact</span>
          </h2>
          <div className="contact__form-container">
            <form action="#" className="contact__form">
              <div className="contact__form-field">
                <input
                  placeholder="Name"
                  type="text"
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-field">
                <input
                  placeholder="Email"
                  type="text"
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-field">
                <input
                  placeholder="Phone Number"
                  type="text"
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-field">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="btn btn--primary contact__btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
