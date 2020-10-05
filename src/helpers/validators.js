

// Validator is just a function that takes in the value of your input

export const isValidImage = value => {
    if(!value){
        return true
    }
    if (typeof value !== 'string'){
        return false
    }
    
    const validFormats = ['png', 'jpeg', 'jpg', 'svg']
    const extension = value.split('.').pop()

    // "value.split()" delar upp värdet i en array allt som är före och efter det värde som jag har angett i min split. 
    //I mitt fall så vill jag kolla huruvida value är ett godkänt bildformat. Exempelvis: value = mattias.blabla.bla
    // Så resulterar det i arrayen ['mattias', 'blabla', 'bla']
    // Jag avslutar min split med att "poppa" värdet vilket är det sista värdet i arrayen

    return validFormats.includes(extension)

    // Jag avslutar min function med att undersöka om ett av mina värden i validformats matchar värdet som jag "poppar"
    // Om det gör det så returnerar jag true, om inte, false. 
}

export const isValidUrl = value => {
    if(!value) return true
    if (typeof value !== 'string') return false

    const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    const regex = new RegExp(expression)

    return value.match(regex) ? true : false
}

export const sameAs = (getValues, field) => value => {
    if(!value) return true
    if (typeof value !== 'string') return false

    const compareToValue = getValues()[field]
    return compareToValue === value
}
