const phrases = {
    _parts: {
        subject: ["The gold", "Life", "The dream", "The succes"],
        verb: ["is", "have", "understands", "comprise"],
        article: ["several", "some", "sundry", "many"],
        complement: ["steps", "cycles", "periods", "stages", "phases", "lapses"],
        complement2: ["to succeed", "to achive", "to triumph", "to thrive" ]
    },
    get subject () {
        return this._parts.subject[Math.floor(Math.random() * (this._parts.subject.length - 1))];
    },
    get verb () {
        return this._parts.verb[Math.floor(Math.random() * (this._parts.verb.length - 1))];
    },
    get article () {
        return this._parts.article[Math.floor(Math.random() * (this._parts.article.length - 1))];
    },
    get complement () {
        return this._parts.complement[Math.floor(Math.random() * (this._parts.complement.length - 1))];
    },
    get complement2 () {
        return this._parts.complement2[Math.floor(Math.random() * (this._parts.complement2.length - 1))];
    }
}

const generator = () => {
    const phraseArray = Object.keys(phrases._parts).map(part => phrases[part]);
    return phraseArray.join(" ");
}

console.log(generator());
