console.log("Hello World!");
import { Map } from "immutable";

const book = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());
