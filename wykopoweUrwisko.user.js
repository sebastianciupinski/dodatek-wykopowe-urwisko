// ==UserScript==
// @name              Wykopowe Urwisko Mod
// @author            Sebastian Ciupinski (sebastian.ciupinski+losowywykop@gmail.com)
// @version           1.0
// @include           https://*.wykop.pl/*
// ==/UserScript==


function wykopoweUrwisko()
{
    (document.evaluate("//*[text()='wykopowe urwisko']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).innerText="wykopowe kurwisko";
}

document.onload = wykopoweUrwisko();
