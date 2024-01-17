import "./App.css";

function App() {
  const [title,setTitle] = useState("");
  const [thumbnail,setThumbnail] = useState();

  const onLoadFile = (e) => {
    console.log(e.target.files[0]);


  }; 
  const createTodo = () => {
    axios.post


  }

<div>

  <form>
    <input 
    type="text"
    value={title} 
    onChange={(e) => setTitle (e.target.value)}
    />

    <input type="file" onChange={onLoadFile}/>
    <button onClick={createTodo}>생성</button>
  </form>
  <ul>
    <li>
      <input type="checkbox" />
      <img src=" alt=thumbnail" />
      <span> 할 일</span>
      <button>삭제</button>
    </li>
  </ul>
</div>

);

}