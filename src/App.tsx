import Post from "./components/Post";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://down-br.img.susercontent.com/file/c4a70d8df3199b124a3942dcb95fb11a">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
