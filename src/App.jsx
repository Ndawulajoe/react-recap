// import Quote from "./components/Quote";

// const quotes = [
//   {
//     "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
//     "author": "Thomas Edison, type.fit"
//   },
//   {
//     "text": "You can observe a lot just by watching.",
//     "author": "Yogi Berra, type.fit"
//   },
//   {
//     "text": "A house divided against itself cannot stand.",
//     "author": "Abraham Lincoln, type.fit"
//   },
//   {
//     "text": "Difficulties increase the nearer we get to the goal.",
//     "author": "Johann Wolfgang von Goethe, type.fit"
//   },
//   {
//     "text": "Fate is in your hands and no one elses",
//     "author": "Byron Pulsifer, type.fit"
//   },
//   {
//     "text": "Be the chief but never the lord.",
//     "author": "Lao Tzu, type.fit"
//   },
//   {
//     "text": "Nothing happens unless first we dream.",
//     "author": "Carl Sandburg, type.fit"
//   },
//   {
//     "text": "Well begun is half done.",
//     "author": "Aristotle, type.fit"
//   },
//   {
//     "text": "Life is a learning experience, only if you learn.",
//     "author": "Yogi Berra"
//   },
//   {
//     "text": "Self-complacency is fatal to progress.",
//     "author": "Margaret Sangster, type.fit"
//   },
//   {
//     "text": "Peace comes from within. Do not seek it without.",
//     "author": "Buddha, type.fit"
//   },
//   {
//     "text": "What you give is what you get.",
//     "author": "Byron Pulsifer, type.fit"
//   },
//   {
//     "text": "We can only learn to love by loving.",
//     "author": "Iris Murdoch, type.fit"
//   },
//   {
//     "text": "Life is change. Growth is optional. Choose wisely.",
//     "author": "Karen Clark, type.fit"
//   },
//   {
//     "text": "You'll see it when you believe it.",
//     "author": "Wayne Dyer, type.fit"
//   },
//   {
//     "text": "Today is the tomorrow we worried about yesterday.",
//     "author":  "type.fit"
//   }
// ]
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

function App() {
  const navigate = useNavigate()
  function goToUser(){
    navigate('/git-profile/famba')
  }
  return (
    <>
      {/* <div className="bg-[url('./assets/download.jpg')] bg-no-repeat bg-cover h-screen"> */}
      <div className="h-screen bg-orange-400">
        <h1>App</h1>
        <Button onClick={goToUser} className="bg-teal-600 hover:bg-teal-800">
        Go To User
      </Button>
      </div>
    </>
  );
}

export default App;
