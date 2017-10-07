var doctitle = "Hungarian (Latin script) for HTML/CSS (Draft)"

var compilers = "Ivan Herman"

var report = {

    'encoding': { 'status': 'ok', "comments": `<p>The presence of a Hungarian specific diacritic (") means that ISO-8859-1 cannot be used; instead, ISO-8859-2 must be used (or UTF-8). In the early days of the Web this was not really well handled on Hungarian Web sites, and they usually used, for example, 'õ' instead of 'ő', even for texts like online newspapers. The problem seems to have disappeared by now with UTF-8 coming to the fore, although I still found a <a href="http://www.magyarora.com/magyar/grammar.html">page</a> doing that (oh irony! it is a page on Hungarian Grammar:-)</p>` },
    'fonts': { 'status': 'ok', "comments": `<p></p>` },
    'fontstyle': { 'status': 'ok', "comments": `<p></p>` },
    'glyphs': { 'status': 'na', "comments": `<p></p>` },
    'cursive': { 'status': 'na', "comments": `<p></p>` },
    'boundaries': { 'status': 'ok', "comments": `<p></p>` },
    'quotations': { 'status': 'basic', "comments": `<p>Hungarian uses the German-style quotations marks, e.g., „Jónapot”. When using the &lt;q&gt; element some browsers do it right (e.g., Chrome, Safari) but, e.g., Mozilla does not.</p>` },
    'numbers': { 'status': 'na', "comments": `<p></p>` },
    'transforms': {'status': 'ok', "comments": `<p>Hungarian has a number of digraphs, like 'gy', 'ty', 'sz', that refer to distinct, different sounds. However, the typography rules do not follow this: capitalization is "Gyomor", instead of "GYomor". Ie, they are not considered, typographically, as single letters (in contrast to the Dutch "ij"). Consequently the usual transformations work.</p>` },
    'spacing': { 'status': 'ok', "comments": `<p></p>` },
    'ruby': { 'status': 'na', "comments": `<p></p>` },
    'textdecoration': { 'status': 'ok', "comments": `<p></p>` },
    'emphasis': { 'status': 'ok', "comments": `<p></p>` },
    'bidi': { 'status': 'na', "comments": `<p></p>` },
    'otherinline': { 'status': 'na', "comments": `<p></p>` },

    'linebreak': { 'status': 'ok', "comments": `<p></p>` },
    'hyphenation': { 'status': 'advanced', "comments": `<p>Few browsers so far support hyphenation. It works on FF (yay!) but it does not work on Chrome or Safari.</p><p>Hyphenation has some more complex rules (handling compound words, digraphs, rules on repeated letters expressing emphasis-like longer sounds, etc.). It would need a more systematic test to decide whether everything is fine on FF but, at first glance, it seems to be working fine. It does not use the break opportunities when digraphs are duplicated. E.g., in "Összeg" the "ssz" is a shortened form for "szsz", i.e., a double "sz" digraph; when hyphenating, one could do a "Ösz-szeg" which FF doesn't do. That being said, it is a bit of an edge case and people often do what FF does. I.e., I guess an "ok" status is fine <em>for FF</em>. But the non-existent hyphenation in other browsers means that the feature is still "advanced".</p>` },
    'justification': { 'status': 'ok', "comments": `<p></p>` },
    'counters': { 'status': 'ok', "comments": `<p></p>` },
    'initialletter': { 'status': 'ok', "comments": `<p>Just as for capitalization, Hungarian would use, e.g., dropcaps for the first character only even in the case of digraphs. I.e., the usual behaviour is fine.</p>` },
    'baselines': { 'status': 'ok', "comments": `<p></p>` },
    'whitespace': { 'status': 'ok', "comments": `<p></p>` },
    'otherpara': { 'status': 'ok', "comments": `<p></p>` },

    'bidilayout': { 'status': 'na', "comments": `<p></p>` },
    'vertical': { 'status': 'advanced', "comments": `<p>Vertical text may occur for special effects (the spine of a book, table column headings). Typographically, it is simply horizontal text that is rotated. The ‘writing-modes: sideways-lr/rl’  CSS feature should solve that, but isn't supported yet.</p>` },
    'notes': { 'status': '', "comments": `<p>Some software support the (experimental) features of CSS for footnotes, but none of the browsers do. Those features would still need to be enhanced for some advanced applications, in particular to support multiple footnote streams, such as in some critical editions.</p>` },
    'pageheaders': { 'status': '', "comments": `<p>Although there exist software that supports page numbers and running headers, none of the browsers do. Complex running headers (containing math, tables or other complex content) are not supported anywhere.</p>` },
    'otherpage': { 'status': 'ok', "comments": `<p></p>` },

    'culture': { 'status': '', "comments": `<p></p>` },
    'other': {
        'status': '', "comments": `<p>Some other characteristics of Hungarian (none of which pose problems on the Web):
<ul>
<li>The rules for quotation marks and their nesting are similar to British English. However, punctuation is different: whereas in English one would put the full stop before the bracket like in "(A bracketed text.)", Hungarian does it the other way round like "(Zárójeles szöveg)."
<li>Text is typically way longer than equivalent English text and words are often much longer on average, too.
<li>Pronunciation is mostly easy to guess from the spelling. The other way round may be more complicated, because there are cases when the same sound can be written in different ways (e.g., "ly" and "j"), or because today's pronounciation tends to be less careful. This may be relevant for text-to-speech.
<li>Numbers use a space between thousands and a comma before the decimals. The ‘0’ before the comma cannot be omitted (‘0,5’ but not ‘,5’).
<li>Negative numbers start with a minus or dash.
<li>The currency symbol is used after the amount (10Ft).
<li>There is no space before punctuation ("<span lang=hu>akkor,</span>", "<span lang=hu>mondta:</span>", "<span lang=ok>rendben van!</span>").
<li>There is a simple space after the full stop at the end of a sentence.
<li>When text on the spine of a book is rotated, it is always in such a way that the book can lie with the back cover on top (i.e., like in French but different from English).
<li>The language uses a fair number of diacritics; one of those, used on the letters 'o' and 'u', is, afaik, specific to Hungarian: 'ő' and 'ű' (and their capitalized counterpart). Diacritics are important for the meaning of the words, and cannot be ommitted or replaced even when capitalized (in contrast to French which usually drops diacritics for capital letters): e.g., "Álom" means "Dream", whereas "Alom" means "Litter". 
<li>An i18n issue for Hungarian is the fact that Hungarian names are in reverse order compared to all other European languages: it is family name followed by surname. I.e., it is "Herman Iván", and not "Iván Herman". (This is the same as for a number of Asian languages, afaik.) This means that Web forms using the term "first name" and "last name" are the source of endless confusions for Hungarians.
<li>Although I presume this is more a matter for Unicode, for the sorting order digraphs are considered to be different letters; in the order of letters, the digraph immediately follows the first letter. I.e., "c"  is followed by "cs" and is before the "d" in the ABC, and the word “cukor” (sugar) precedes the word “csupor” (mug) in a dictionary, because "cs" is a digraph.
</ul>` },

}
