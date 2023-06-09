import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AddBlog from './Components/AddBlog';
import AboutUs from './Components/AboutUs';
import Favourites from './Components/Favourites';
import Contacts from './Components/Contacts';

const App = () => {
  const movies= [
    {
      "title": "Spider-Man: No Way Home",
      "image": "https://wallpapercave.com/wp/wp10415289.jpg",
      "description": "Spider-Man: No Way Home is a 2021 American superhero film ",
      "trailer": "https://www.youtube.com/embed/JfVOs4VSpmA",
      "category": "fav",
      "id": 1
    },
    {
      "title": "Captain America: Civil War",
      "image": "https://wallpapercave.com/wp/wp6726695.jpg",
      "description": "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched",
      "trailer": "https://www.youtube.com/embed/dKrVegVI0Us",
      "category": "от 12",
      "id": 2
    },
    {
      "title": "Black Panther Wakanda Forever",
      "image": "https://wallpapercave.com/wp/wp11988251.jpg",
      "description": "T'Challa, king of Wakanda, is dying from an unspecified terminal",
      "trailer": "https://www.youtube.com/embed/_Z3QKkl1WyM",
      "category": "от 12",
      "id": 3
    },
    {
      "title": "Black Widow",
      "image": "https://wallpapercave.com/wp/wp9657305.png",
      "description": "In 1995, super soldier Alexei Shostakov and Black Widow Melina Vostokoff work as Russian undercover",
      "trailer": "https://www.youtube.com/embed/ybji16u608U",
      "category": "fav",
      "id": 4
    },
    {
      "title": "Venom: Let There Be Carnage",
      "image": "https://wallpapercave.com/wp/wp3728049.jpg",
      "description": "In 1996, a young Cletus Kasady watches helplessly as his lover, Frances Barrison, ",
      "trailer": "https://www.youtube.com/embed/-FmWuCgJmxo",
      "category": "fav",
      "id": 5
    },
    {
      "title": "Iron-Man",
      "image": "https://wallpapercave.com/wp/wp3405076.jpg",
      "description": "Tony Stark is a genius inventor and billionaire industrialist, who suits up in his ",
      "trailer": "https://www.youtube.com/embed/8ugaeA-nMTc",
      "category": "от 12",
      "id": 6
    },
    {
      "title": "Ant-Man and the Wasp: Quantumania",
      "image": "https://wallpapercave.com/wp/wp11927952.jpg",
      "description": "During her days of entrapment in the Quantum Realm, Janet van  ",
      "trailer": "https://www.youtube.com/embed/ZlNFpri-Y40",
      "category": "от 18",
      "id": 7
    },
    {
      "title": "Thor: Love and Thunder",
      "image": "https://wallpapercave.com/wp/wp8007067.jpg",
      "description": "Gorr and his daughter, Love, the last of their race, struggle in a barren ",
      "trailer": "https://www.youtube.com/embed/Go8nTmfrQd8",
      "category": "от 18",
      "id": 8
    },
    {
      "title": "Shang-Chi and the Legend of the Ten Rings",
      "image": "https://wallpapercave.com/wp/wp10239965.jpg",
      "description": "Around a thousand years ago, Xu Wenwu discovers the mystical ten ",
      "trailer": "https://www.youtube.com/embed/8YjFbMbfXaQ",
      "category": "fav",
      "id": 9
    },
    {
      "title": "Darika",
      "image": "https://wallpapercave.com/wp/wp10239965.jpg",
      "description": "wertyvgcccccccccccccccccghhhhhhhhhhhh",
      "trailer": "https://youtu.be/8YjFbMbfXaQ",
      "category": "от 16",
      "id": 10
    },
    {
      "title": "Darika",
      "image": "https://wallpapercave.com/wp/wp10239965.jpg",
      "description": "wertyvgcccccccccccccccccghhhhhhhhhhhh",
      "trailer": "https://youtu.be/8YjFbMbfXaQ",
      "category": "от 12",
      "id": 11
    }
  ]

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home movies={movies}/>} />
        <Route path='/addblog' element={<AddBlog/>} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/favourites' element={<Favourites movies={movies}/>} />
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App