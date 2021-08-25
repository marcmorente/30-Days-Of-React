const languages = [
    { lang: 'English', count: 91 },
    { lang: 'French', count: 45 },
    { lang: 'Arabic', count: 25 },
    { lang: 'Spanish', count: 24 },
    { lang: 'Russian', count: 9 },
    { lang: 'Portuguese', count: 9 },
    { lang: 'Dutch', count: 8 },
    { lang: 'German', count: 7 },
    { lang: 'Chinese', count: 5 },
    { lang: 'Swahili', count: 4 },
    { lang: 'Serbian', count: 4 },
]

for (const {lang, count} of languages) {
    console.log(`The ${lang} is spoken in ${count} countries`)
}