import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";
function Home() {
  const sentences = [
    {
      id: "01",
      en: "By time, indeed mankind is in loss.",
      dr: "سوگند به زمان، که انسان در زیان است.",
      ps: "قسم په زمان، بېشکه انسان په تاوان کې دی.",
      author: "Quran - Surah Al-Asr"
    },
    {
      id: "02",
      en: "And We made from water every living thing.",
      dr: "و هر موجود زنده‌ای را از آب آفریدیم.",
      ps: "او موږ هر ژوندی شی له اوبو پیدا کړ.",
      author: "Quran - Surah Al-Anbiya"
    },
    {
      id: "03",
      en: "Take advantage of five before five: your youth before your old age.",
      dr: "پنج چیز را پیش از پنج چیز غنیمت شمار؛ جوانی‌ات را پیش از پیری.",
      ps: "پنځه شیان د پنځو نه مخکې غنیمت وګڼه؛ ځواني دې له زړښت مخکې.",
      author: "Prophet Muhammad ﷺ"
    },
    {
      id: "04",
      en: "Time is what we want most, but what we use worst.",
      dr: "زمان چیزی است که بیشتر از همه می‌خواهیم اما بدتر از همه استفاده می‌کنیم.",
      ps: "وخت هغه څه دي چې ډېر یې غواړو خو تر ټولو بد یې کاروو.",
      author: "William Penn"
    },
    {
      id: "05",
      en: "Lost time is never found again.",
      dr: "زمان از دست رفته هرگز دوباره پیدا نمی‌شود.",
      ps: "له لاسه تللی وخت بیا نه موندل کېږي.",
      author: "Benjamin Franklin"
    },
    {
      id: "06",
      en: "The future depends on what you do today.",
      dr: "آینده به آنچه امروز انجام می‌دهی بستگی دارد.",
      ps: "راتلونکی په هغه څه پورې تړلی چې نن یې کوې.",
      author: "Mahatma Gandhi"
    },
    {
      id: "07",
      en: "Time is the wisest counselor of all.",
      dr: "زمان خردمندترین مشاور است.",
      ps: "وخت تر ټولو هوښیار سلاکار دی.",
      author: "Pericles"
    },
    {
      id: "08",
      en: "The key is in not spending time, but in investing it.",
      dr: "راز موفقیت در خرج کردن زمان نیست، بلکه در سرمایه‌گذاری آن است.",
      ps: "راز په وخت لګولو کې نه، بلکې په پانګونه کې دی.",
      author: "Stephen R. Covey"
    },
    {
      id: "09",
      en: "An inch of time is an inch of gold.",
      dr: "یک لحظه زمان برابر با یک تکه طلا است.",
      ps: "یو شیبه وخت د سرو زرو له یوې ټوټې سره برابره ده.",
      author: "Chinese Proverb"
    }
  ];

  return (
    <>
      {/* Hero Slider */}
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade shadow-lg"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/asest/4.jpg"
              className="d-block w-100"
              alt="Watch 1"
              style={{ height: "600px", objectFit: "cover" }}
            />

          </div>

          <div className="carousel-item">
            <img
              src="/asest/1.jpg"
              className="d-block w-100"
              alt="Watch 2"
              style={{ height: "600px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/asest/2.jpg"
              className="d-block w-100"
              alt="Watch 3"
              style={{ height: "600px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/asest/3.jpg"
              className="d-block w-100"
              alt="Watch 4"
              style={{ height: "600px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/asest/5.avif"
              className="d-block w-100"
              alt="Watch 5"
              style={{ height: "600px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/asest/6.jpg"
              className="d-block w-100"
              alt="Watch 6"
              style={{ height: "600px", objectFit: "cover" }}
            />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Quotes Section */}

      <section
        className="text-light py-5"
        style={{
          background:
            "linear-gradient(to bottom, #0a0a0a, #1a1a1a, #0a0a0a)",
        }}
      >
        <div className="container">

          {/* Heading */}
          <div className="text-center mb-5">
            <h1 className="display-6 fw-bold" style={{ fontFamily: "serif" }}>بسم تعالی</h1>
            <h1
              className="display-3 fw-bold"
              style={{
                color: "#d4af37",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Time & Life
            </h1>

            <p className="lead text-light opacity-75">
              مجموعه سخنان گران‌بها درباره ارزش زمان
            </p>

            <div
              className="mx-auto"
              style={{
                width: "120px",
                height: "4px",
                background: "#d4af37",
                borderRadius: "10px",
              }}
            ></div>

          </div>

          {/* Cards */}
          <div className="row g-4">

            {sentences.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>

                <div
                  className="card h-100 border-0 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a1a1a, #2c2c2c)",
                    borderRadius: "20px",
                  }}
                >

                  {/* Header */}
                  <div
                    className="card-header text-center fw-bold"
                    style={{
                      background: "#d4af37",
                      color: "#000",
                      letterSpacing: "1px",
                    }}
                  >
                    Quote {item.id}
                  </div>

                  {/* Body */}
                  <div className="card-body text-center p-4">

                    <h1
                      className="mb-4"
                      style={{
                        fontSize: "3rem",
                        color: "#d4af37",
                      }}
                    >
                      ⌚
                    </h1>

                    <p
                      className="fw-bold mb-4"
                      style={{
                        color: "#d4af37",
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        fontStyle: "italic",
                      }}
                    >
                      "{item.en}"
                    </p>

                    <hr className="text-warning" />

                    <div className="mb-4">

                      <span className="badge rounded-pill bg-warning text-dark px-3 py-2">
                        دری
                      </span>

                      <p className="mt-3 text-light">
                        {item.dr}
                      </p>

                    </div>

                    <div>

                      <span className="badge rounded-pill bg-light text-dark px-3 py-2">
                        پشتو
                      </span>

                      <p className="mt-3 text-light">
                        {item.ps}
                      </p>

                    </div>

                  </div>

                  {/* Footer */}
                  <div
                    className="card-footer text-center border-0"
                    style={{
                      background: "#111",
                      color: "#d4af37",
                      fontWeight: "bold",
                    }}
                  >
                    {item.author}
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <div className="row p-4 bg-dark">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-warning">
             Contact & Information
          </h2>

          <p className="text-secondary">
            برای معلومات بیشتر با ما در ارتباط شوید
          </p>
        </div>

         {/* Name */}
      <div className="col-md-4 ">
        <div className="p-4 bg-dark text-light rounded shadow-lg h-100">
          <h3><img src="/asest/sultan.jpg" alt="not " style={{width:"50%",height:"50%",borderRadius:"50%"}}/></h3>
          <h5 className="text-warning mt-3">Engineer</h5>
           <p> <b className="text-primary">Mohammad Hamed Sultan Big</b></p>
          <p className="mb-0"><b>محمد حامد سلطانی بیگ</b></p>
         
        </div>
      </div>

        {/* Phone */}
      <div className="col-md-4">
        <div className="p-4 bg-dark text-lightrounded shadow-lg h-100">
          <h3 className="text-light"><FaPhone/></h3>
          <h5 className="text-warning mt-3">Phone</h5>
          <p className="mb-0 text-light">0701032301</p>
        </div>
      </div>

      
      {/* WhatsApp */}
      <div className="col-md-4">
        <div className="p-4 bg-dark text-light rounded shadow-lg h-100">
          <h3><FaWhatsapp/></h3>
          <h5 className="text-warning mt-3">WhatsApp</h5>
          <a
            href="https://wa.me/93701032301"
            target="_blank"
            rel="noreferrer"
            className="btn btn-success mt-2"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Instagram */}
      <div className="col-md-4">
        <div className="p-4 bg-dark text-light rounded shadow-lg h-100">
          <h3><FaInstagram/></h3>
          <h5 className="text-warning mt-3">Instagram</h5>
          <a
            href="https://www.instagram.com/sultan_big_01?igsh=OGRrMDZkdTh1NHox"
            target="_blank"
            rel="noreferrer"
            className="btn btn-danger show1 mt-2"
          >
            Visit Instagram
          </a>
        </div>
      </div>

      {/* Facebook */}
      <div className="col-md-4">
        <div className="p-4 bg-dark text-light rounded shadow-lg h-100">
          <h3><FaFacebook/></h3>
          <h5 className="text-warning mt-3">Facebook</h5>
          <a
            href="https://www.facebook.com/share/1DDB4mM6Qc/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-2"
          >
            Visit Facebook
          </a>
        </div>
      </div>

          <div className="col-md-4">
        <div className="p-4 bg-dark text-light rounded shadow-lg h-100">
          <h3 ><FaYoutube/></h3>
          <h5 className="text-warning mt-3">YouTube</h5>
          <a
            href="https://youtube.com/@mohamedsultani-o3l5k?si=-fJUfLy5e_q85rI"
            target="_blank"
            rel="noreferrer"
            className="btn btn-danger mt-2 "
          >
          Visit Yotube
          </a>
        </div>
      </div>
      </div>

    </>
  );
}

export default Home;