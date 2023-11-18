import "./App.css";
import React from "react";
function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React" || "Ozay"
  );
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Merve Erden",
      yorum_sayisi: 3,
      puan: 4,
      id: 1,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asim Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 2,
    },
    {
      baslik: "Ozay React Ogrenemiyor",
      url: "https://www.youtube.com/watch?v=uDeTc8ee8lc",
      yazar: "Ozay Melih Yildiz",
      yorum_sayisi: 9,
      puan: 10,
      id: 3,
    },
    {
      baslik: "Ozay'in Medium Hesabi",
      url: "https://www.google.com/?hl=tr",
      yazar: "Admin",
      yorum_sayisi: 0,
      puan: 10,
      id: 4,
    },
  ];
  const arananYazilar = yaziListesi.filter(function (yazi) {
    //Bu kodu bulmak hic kolay olmadi
    return (
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
    );
  });

  const handleSearch = (event) => {
    setAramaMetni(event.target.value);
  };

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  return (
    <div>
      <h1>Ozay'in Arama Motoru</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />
      <hr />
      <Liste yazilar={arananYazilar} />
    </div>
  );
}
function Arama({ aramaMetni, onSearch }) {
  return (
    <>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni} />
    </>
  );
}
function Liste({ yazilar }) {
  return (
    <>
      <ul>
        {yazilar.map(function (yazi) {
          return <Yazi key={yazi.id} {...yazi} />;
        })}{" "}
      </ul>
    </>
  );
}
function Yazi({ url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayisi:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}
export default App;
