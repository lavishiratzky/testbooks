import moment from 'moment';
import "./BookCard.css";
import { Item, Root } from "../../../Models/BooksModel"
interface BooksCardProps {
    book: Item  
}



function BookCard(Props:BooksCardProps): JSX.Element {
    return (
        <div className="BookCard">
	{Props.book.volumeInfo.title? <p>Title: {Props.book.volumeInfo.title}</p>:<p>No Title found</p>}
    {Props.book.volumeInfo.publishedDate? <p>Publish date: {Props.book.volumeInfo.publishedDate}</p>:<p>No publish date found</p>}
    {Props.book.volumeInfo.authors? <p>Title: {Props.book.volumeInfo.authors}</p>:<p>No authors found</p>}
    {  Props.book.volumeInfo.imageLinks?.thumbnail? <img src={  Props.book.volumeInfo.imageLinks?.thumbnail } alt="image not found" />:<p>No image found!!!!</p>}
        </div>
    );
}
{/* <p>Today's date  is : { moment(new Date()).format('DD/MM/YYYY T: hh/mm')} </p> */}
export default BookCard;
