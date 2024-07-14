import firstimg from "./assets/firstimg.svg";
import palma from "./assets/palma.png";
import net from "./assets/net.png";
import location from "./assets/location.png";
import logop from "./assets/logop.svg";
import img1 from "./assets/img1.svg";
import img2 from "./assets/img2.svg";
import img3 from "./assets/img3.svg";
import img4 from "./assets/img4.svg";
import img5 from "./assets/img5.svg";
import imgtabiat from "./assets/imgtabiat.png";
import imgtabiat2 from "./assets/imgtabiat2.png";
import xitoyimg from "./assets/xitoyimg.png";
import glob from "./assets/glob.svg";

import "./App.css";
import "./main.css";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="nav">
            <span className="logos">
              <h2>
                <img src={logop} className="logop" alt="" />
                Destinize
              </h2>

              <input
                className="input"
                type="text"
                placeholder="Cari apapun disini..."
              />
            </span>
            <span className="netselect">
              <img src={net} className="net" alt="" />
              <select className="netsel" name=" Bahasa Indonesia" id="">
                <option value=""> Bahasa Indonesia</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </span>
            <span className="locationselect">
              <img src={location} className="location" alt="" />
              <select className="locationsel" name="" id="">
                <option value="">Indonesia, Yogyakarta</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </span>
          </div>
        </div>
        <div className="container">
          <div className="hederbuton">
            <div className="allselect">
              <select className="selects" name="" id="">
                <option value="">Gunung</option>
                <option value=""></option>
                <option value="">Romantis</option>
              </select>
              <select className="selects" name="" id="">
                <option value="">Pantai</option>
                <option value="">Gunung</option>
                <option value="">Romantis</option>
              </select>
              <select className="selects" name="" id="">
                <option value="">Kuliner</option>
                <option value="">Romantis</option>
                <option value="">Gunung</option>
              </select>
              <select className="selects" name="" id="">
                <option value="">Outbond</option>
                <option value="">Romantis</option>
                <option value="">Gunung</option>
              </select>
              <select className="selects" name="" id="">
                <option value="">Sejarah</option>
                <option value="">Romantis</option>
                <option value="">Gunung</option>
              </select>
              <select className="selects" name="" id="">
                <option value="">Edukasi</option>
                <option value="">Gunung</option>
                <option value="">Romantis</option>
              </select>
              <select className="selects" name="" id="">
                <option value="">Romantis</option>
                <option value="">Gunung</option>
                <option value="">Sejarah</option>
              </select>
              <select className="selects" name="" id="">
                <option value="">Alam</option>
                <option value="">Romantis</option>
                <option value="">Alam</option>
              </select>
            </div>
            <div className="iconcts">
              <p className="trash">
                <i class="fa-solid fa-trash-can"></i>
              </p>
              <p className="user">
                <i class="fa-regular fa-user"></i>
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <h3 className="h3">✈ • Explore the wonderful indonesia!</h3>
          <div className="allmain">
            <div className="left">
              <h1>
                Liburan & nikmati <span className="panrang">tempatbaru</span> di
                indonesia ️ <img src={palma} className="palma" alt="" />
              </h1>
              <p>
                Destinize membuat kamu selalu update terkait tempat liburan
                <br /> baru di Indonesia dengan mengikuti perkembangan para
                <br />
                influencer di sosial media ✨
              </p>
              <b className="btnsss">
                <button>Mulai sekarang →</button>
                <h3>
                  <i id="play" class="fa-solid fa-play"></i>
                  Putar Demo
                </h3>
              </b>
            </div>
            <img src={firstimg} className="logop" alt="" />
          </div>
        </div>
        <section>
          <div className="container">
            <div className="imgscsection">
              <i>
                <img src={img1} className="imgx" alt="" />
              </i>
              <i>
                <img src={img2} className="imgx" alt="" />
              </i>
              <i>
                <img src={img3} className="imgx" alt="" />
              </i>
              <i>
                <img src={img4} className="imgx" alt="" />
              </i>
              <i>
                <img src={img5} className="imgx" alt="" />
              </i>
            </div>
          </div>
        </section>
        <section className="sectiontabiat container">
          <h3 className="h333">DESTINASI FAVORIT</h3>
          <span className="imgspan">
            <h2>✈ • Temukan Destinasi Favoritmu </h2>
            <button>Lihat semua →</button>
          </span>
          <div className="playseimgs">
            <img src={imgtabiat} className="imgtabiat" alt="" />
            <img src={imgtabiat2} className="imgtabiat2" alt="" />
            <img src={imgtabiat} className="imgtabiat" alt="" />
            <img src={imgtabiat2} className="imgtabiat2" alt="" />
          </div>
        </section>
        <section>
          <div className="container">
            <h3 className="h333">RESERVASI TEMPAT</h3>
            <div className="allxitoydiv">
              <div className="leftdiv">
                <h2>
                  Gak mau ngantri? <br /> reservasi aja! 🤙🏻
                </h2>
                <span className="leftdive">
                  <i id="pencel" class="fa-solid fa-magnifying-glass"></i>
                  <p>
                    Cari tempat yang kamu mau <br />
                    Temukan destinasi selanjutnya yang akan kamu <br /> kunjungi
                    dengan Destinize
                  </p>
                </span>
                <span className="leftdive">
                  <i id="pencel" class="fa-solid fa-pencil"></i>
                  <p>
                    Isi data dan konfirmasi pembayaran <br />
                    Tulis dan lengkapi data kamu untuk keperluan <br /> data
                    booking
                  </p>
                </span>
                <span className="leftdive">
                  <i id="pencel">😍</i>
                  <p>
                    Tinggal masuk dan enjoy!
                    <br />
                    Kamu bisa langsung masuk dan enjoy liburan <br />
                    kamu tanpa hambatan
                  </p>
                </span>
              </div>
              <div className="rightdiv">
                <div className="box">
                  <img src={xitoyimg} className="xitoyimg" alt="" />
                  <h3>Liburan ke Bali 🚗 </h3>
                  <p>14-29 Juni | by Shandika</p>
                  <span className="boxinfo">
                    <i class="fa-solid fa-leaf"></i>
                    <i class="fa-solid fa-location-dot"></i>
                    <i class="fa-brands fa-telegram"></i>
                  </span>
                  <p>12 Orang pergi bersama</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="glob">
              <p>CARI TEMPAT WISATA</p>
              <h2>🗺•Cari Tempat Wisata Didekatmu</h2>
              <p>
                Fitur ini memungkinkan kamu untuk mencari tempat wisata atau
                tempat yang sedang populer di <br /> daerah kamu dengan begitu
                kamu akan selalu update dan gak kudet lagi 👍🏻
              </p>
              <img src={glob} alt="" />
            </div>
            <div className="parts">
              <div>
                <i id="iconcs" class="fa-solid fa-location-dot"></i>
                <span>

                <h3>Populer di dekatmu</h3>
                <p>
                  Tempat pariwisata yang populer <br /> dan pasti dikenal semua
                  orang didekatmu
                </p>
                </span>
              </div>
              <div>
                <div>
                  <i id="iconcs" class="fa-solid fa-heart"></i>
                  <span>

                  <h3>Favorit di dekatmu</h3>
                  <p>
                    Tempat favorit dan disukai semua <br /> orang orang di
                    sekitar daerah kamu
                  </p>
                  </span>
                </div>
              </div>
              <div>
                <i id="iconcs" class="fa-solid fa-users"></i>
                <span>

                <h3>Ramai di didekatmu</h3>
                <p>
                  Spot yang paling ramai dikunjungi <br /> para warga sekaligus
                  para wisatawan
                </p>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
