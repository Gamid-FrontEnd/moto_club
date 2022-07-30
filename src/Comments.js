import React, {useState, useRef, useEffect} from 'react';
import './Comments.css';


const Comments = () => {
  const commentName = useRef();
  const commentInput = useRef();

  const [commentReady, setCommentReady] = useState([
                 {name: "Dima", text: "Hi!"},
                 {name: "Alex", text: "It`s beautiful!"},
                 {name: "Vika", text: "I`m here!"},
                 {name: "Nikita", text: "Let`s smile!"},
                ]);
  const [count, setCount] = useState(100);


  let butfunc = (e) => {
    if (commentName.current.value.trim()==="" || commentInput.current.value.trim()==="") {
      alert('Please enter correct data!')
    } else {
      setCount(100);
      setCommentReady(commentReady.concat({name: commentName.current.value, text: commentInput.current.value}));

      commentName.current.value = "";
      commentInput.current.value = "";
    }

    e.preventDefault();
  }

  let counte = (e) => {
    if ((count === 100 && (e.key === "Delete" || e.key === "Backspace")) || (count === 0 &&  e.key !== "Backspace")) {
      console.log("nothing");
    } else if (count !== 100 && (e.key === "Delete" || e.key === "Backspace")) {
      setCount(100 - commentInput.current.value.length + 1);
    } else {
      setCount(100 - commentInput.current.value.length - 1);
    }
  }


    var commentNames = commentReady.slice(-4);
    const list = commentNames.map((com)=><ul key={commentNames.indexOf(com)} className="ulcomment">
                                            <li className="name">{com.name}</li>
                                            <li className="text">{com.text}</li>
                                          </ul>);


    useEffect(() => {

    });

    return(
      <div className='container'>
        <section className='sect-1'>
          <div className='column-1 comments-text'>
            <div>{list}</div>
          </div>

          <div className='column-2 comments-input'>
            <form>
              <label htmlFor="commentName">Write your name here:</label>
              <div>
                <input className="commentEntry" id="commentName" type="text"
                       ref={commentName}
                       placeholder="example: Dima"/>
              </div>
              <label htmlFor="commentInput">Write your comment here:</label>
              <div>
                <textarea className="commentEntry textarea1" cols="40" rows="4" maxLength="100" name="comment" id="commentInput"
                          ref={commentInput}
                          onKeyDown ={((e) => counte(e))}
                          placeholder="example: I love it!">
                </textarea>
              </div>
              <div className="subm">
                <button className="btnPost" onClick={butfunc}>Post</button>
                <div>Осталось символов: <span>{count}</span></div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }


export default Comments;
