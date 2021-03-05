import { title } from "process";

interface IBook {
    title: String,
    readonly author: String,
    pages?: number,
    published?: Date
}

const test = (book: IBook) => {
    console.log(`title: ${book.title}, author: ${book.author}, pages: ${book.pages}, published:${book.published}`)
}

test({ title: 'Hej', author: 'mig', pages: 100, published: new Date() })
test({ title: 'Hej', author: 'mig', published: new Date() })
test({ title: 'Hej', author: 'mig', pages: 100 })


class Book implements IBook {

    #title: String
    #author: String
    #pages?: number
    #published?: Date
    constructor(title: String, author: String, pages?: number, published?: Date) {
        this.#title = title
        this.#author = author
        this.#pages = pages
        this.#published = published
    }
    get title():String {return this.#title}
    set title (title:String) {this.#title= title}
    get author():String {return this.#author}
    get pages():number| undefined {return this.#pages}
    set pages (pages:number | undefined ) {this.#pages= pages}
    get published():Date | undefined  {return this.#published}
    set published (published:Date | undefined ) {this.#published= published}
    toString():string {return `title: ${this.#title}, author: ${this.#author}, pages: ${this.#pages}, published:${this.#published}`}
}

const b = new Book("hej", "dig", 123, new Date())
console.log(b.toString())
