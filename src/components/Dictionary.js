import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWord, removeWord } from "../redux/dictionarySlice";

const Dictionary = () => {
  const words = useSelector((state) => state.dictionary.words);
  const dispatch = useDispatch();

  const [spanish, setSpanish] = useState("");
  const [english, setEnglish] = useState("");
  const [portuguese, setPortuguese] = useState("");
  const [deleteWord, setDeleteWord] = useState("");
  const [translateWord, setTranslateWord] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Ingles");
  const [translationResult, setTranslationResult] = useState("");

  
  const handleAdd = () => {
    if (spanish && english && portuguese) {
      dispatch(addWord({ spanish, english, portuguese }));
      setSpanish("");
      setEnglish("");
      setPortuguese("");
    }
  };

 
  const handleRemove = () => {
    dispatch(removeWord(deleteWord));
    setDeleteWord("");
  };

 
  const handleTranslate = () => {
    const wordObj = words.find(
      (w) =>
        w.spanish.toLowerCase() === translateWord.toLowerCase() ||
        w.english.toLowerCase() === translateWord.toLowerCase() ||
        w.portuguese.toLowerCase() === translateWord.toLowerCase()
    );

    if (wordObj) {
      if (selectedLanguage === "Ingles") setTranslationResult(wordObj.english);
      if (selectedLanguage === "Portugues") setTranslationResult(wordObj.portuguese);
      if (selectedLanguage === "Espanol") setTranslationResult(wordObj.spanish);
    } else {
      setTranslationResult("No encontrado");
    }
  };

  return (
    <div style={styles.container}>
      {/* Sección para agregar palabras */}
      <div style={styles.block}>
        <h2>Agregar Palabra</h2>
        <label>Español:</label>
        <input type="text" value={spanish} onChange={(e) => setSpanish(e.target.value)} />
        
        <label>Inglés:</label>
        <input type="text" value={english} onChange={(e) => setEnglish(e.target.value)} />
        
        <label>Portugués:</label>
        <input type="text" value={portuguese} onChange={(e) => setPortuguese(e.target.value)} />
        
        <button onClick={handleAdd}>Agregar</button>
      </div>

      {/* Sección para eliminar palabras */}
      <div style={styles.block}>
        <h2>Eliminar Palabra</h2>
        <label>Palabra a eliminar:</label>
        <input type="text" value={deleteWord} onChange={(e) => setDeleteWord(e.target.value)} />
        <button onClick={handleRemove}>Eliminar</button>
      </div>

      {/* Sección para traducir palabras */}
      <div style={styles.block}>
        <h2>Traducir Palabra</h2>
        <label>Palabra a traducir:</label>
        <input type="text" value={translateWord} onChange={(e) => setTranslateWord(e.target.value)} />
        
        <label>Idioma de traducción:</label>
        <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
          <option value="Ingles">Inglés</option>
          <option value="Portugues">Portugués</option>
          <option value="Espanol">Español</option>
        </select>
        
        <button onClick={handleTranslate}>Traducir</button>
        <p><strong>Traducción:</strong> {translationResult}</p>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    backgroundColor: "#1E3A5F",
    minHeight: "100vh",
    color: "white",
    flexWrap: "wrap",
  },
  block: {
    backgroundColor: "#2C4A74",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
  },
  input: {
    marginBottom: "10px",
    padding: "5px",
    width: "80%",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Dictionary;
