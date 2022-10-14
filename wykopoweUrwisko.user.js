// ==UserScript==
// @name              Wykopowe Urwisko Mod
// @author            Sebastian Ciupinski (sebastian.ciupinski+losowywykop@gmail.com)
// @version           1.0
// @include           https://*.wykop.pl/*
// ==/UserScript==

function wykopoweUrwisko() {

    try {
        document.evaluate("//*[text()='Mikroblog']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText = "Mirkoblog";
    } catch (err) {}

    try {
        document.evaluate("//*[text()='wykopowe urwisko']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText = "wykopowe kurwisko";
    } catch (err) {}

}

document.onload = wykopoweUrwisko();
