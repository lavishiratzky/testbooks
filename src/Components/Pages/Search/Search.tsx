import { useEffect, useState } from "react";
import "./Search.css";
import{Item, Root} from "../../../Models/BooksModel"
import axios from "axios";
import BookCard from "../BookCard/BookCard";
function Search(): JSX.Element {
    const[books,setBooks] = useState<Item[]>([])
    const [query ,setQuery] =useState<string>("")
    useEffect(()=>{
       
		axios.get<Root>('https://www.googleapis.com/books/v1/volumes?q='+query)
        .then(res =>{setBooks(res.data.items)})
        .catch(err => {console.log(err)})
    },[query])
    return (
        <div className="Search">
			<h1>Search here...</h1>
            <h1><input type ="text" placeholder="Type a name of a book" onChange={event=>{setQuery(event.target.value)}}/></h1>
            {books.map(b=><BookCard key={'book' + b.id} book={b}/>)}
        
        </div>
    );
}


export default Search;
