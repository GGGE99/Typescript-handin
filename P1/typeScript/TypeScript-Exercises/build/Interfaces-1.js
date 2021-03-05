"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _title, _author, _pages, _published;
Object.defineProperty(exports, "__esModule", { value: true });
const test = (book) => {
    console.log(`title: ${book.title}, author: ${book.author}, pages: ${book.pages}, published:${book.published}`);
};
test({ title: 'Hej', author: 'mig', pages: 100, published: new Date() });
test({ title: 'Hej', author: 'mig', published: new Date() });
test({ title: 'Hej', author: 'mig', pages: 100 });
class Book {
    constructor(title, author, pages, published) {
        _title.set(this, void 0);
        _author.set(this, void 0);
        _pages.set(this, void 0);
        _published.set(this, void 0);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _author, author);
        __classPrivateFieldSet(this, _pages, pages);
        __classPrivateFieldSet(this, _published, published);
    }
    get title() { return __classPrivateFieldGet(this, _title); }
    set title(title) { __classPrivateFieldSet(this, _title, title); }
    get author() { return __classPrivateFieldGet(this, _author); }
    get pages() { return __classPrivateFieldGet(this, _pages); }
    set pages(pages) { __classPrivateFieldSet(this, _pages, pages); }
    get published() { return __classPrivateFieldGet(this, _published); }
    set published(published) { __classPrivateFieldSet(this, _published, published); }
    toString() { return `title: ${__classPrivateFieldGet(this, _title)}, author: ${__classPrivateFieldGet(this, _author)}, pages: ${__classPrivateFieldGet(this, _pages)}, published:${__classPrivateFieldGet(this, _published)}`; }
}
_title = new WeakMap(), _author = new WeakMap(), _pages = new WeakMap(), _published = new WeakMap();
const b = new Book("hej", "dig", 123, new Date());
console.log(b.toString());
//# sourceMappingURL=Interfaces-1.js.map