import React from 'react';

const urlHaeJuomat = 'https://viski.azurewebsites.net/api/juomat/'
const urlHaeArvostelut = 'https://viski.azurewebsites.net/api/arvosteluts/'
const urlHaeKaikkiKayttajat = 'https://viski.azurewebsites.net/api/kayttajat/'

export function LisaaUusiJuomaApi(juoma) {
    fetch(urlHaeJuomat, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'kategoria': juoma.kategoria, 'nimi': juoma.nimi, 'valmistaja': juoma.valmistaja,
            'hinta': juoma.hinta, 'valmistusmaa': juoma.valmistusmaa, 'valmistusvuosi': juoma.valmistusvuosi,
            'kuvaus': juoma.kuvaus, 'kuva': juoma.kuva
        })
    })
        .then(res => console.log(res))

}

export function LisaaUusiArvosteluApi(arvostelu) {
    fetch(urlHaeArvostelut, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arvostelu)
    })
        .then(res => console.log(res))

}

export function PoistaArvosteluApista(arvostelu_id) {
    fetch(urlHaeArvostelut + arvostelu_id, {
        method: 'DELETE'
    })
        .then(res => res.json())
}

export function PoistaJuomaApista(juoma_id) {
    fetch(urlHaeJuomat + juoma_id, {
        method: 'DELETE'
    })
        .then(res => res.json())
}

export function MuokkaaJuoma(juoma) {
    fetch(urlHaeJuomat + juoma.juoma_id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            juoma_id: juoma.juoma_id, kategoria: juoma.kategoria, nimi: juoma.nimi,
            valmistaja: juoma.valmistaja, hinta: juoma.hinta, valmistusmaa: juoma.valmistusmaa,
            valmistusvuosi: juoma.valmistusvuosi, kuvaus: juoma.kuvaus, kuva: juoma.kuva
        })
    })
        .then(res => console.log(res))
}

export function LisaaKayttajaApi(kayttaja) {
    fetch(urlHaeKaikkiKayttajat, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'nick': kayttaja.nick, 'etunimi': kayttaja.etunimi, 'sukunimi': kayttaja.sukunimi,
            'salasana': kayttaja.salasana, 'kuva': kayttaja.kuva
        })
    })
        .then(res => console.log(res))
}

export function PoistaKayttajaApista(kayttaja_id) {
    fetch(urlHaeKaikkiKayttajat + kayttaja_id, {
        method: 'DELETE'
    })
        .then(res => res.json())
}

