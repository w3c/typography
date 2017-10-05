var doctitle = "Dutch (Latin script) for HTML/CSS (Draft)"

var compilers = "Bert Bos"

var report = {

'encoding': { 'status':'ok', "comments": `<p>Unicode recently introduced case for Cherokee, so character coverage is ok.</p>` },
'fonts': { 'status':'ok', "comments": `<p></p>` },
'fontstyle': { 'status':'ok', "comments": `<p></p>` },
'glyphs': { 'status':'na', "comments": `<p></p>` },
'cursive': { 'status':'na', "comments": `<p></p>` },
'boundaries': { 'status':'ok', "comments": `<p>You might expect double click to select a word including any apostrophes ('s, 't, dia's). Some software does, some doesn't. Ditto for words with dashes (ex-voetballer, vice-voorzitter), but no software on or off the Web seems to do so.</p>` },
'quotations': { 'status':'basic', "comments": `<p>In HTML and CSS the styling applied to nested multilingual quotations when using the q element chooses quotation marks based on the language of the text inside the quotation, rather than outside.</p>` },
'numbers': { 'status':'na', "comments": `<p></p>` },
'transforms': { 'status':'basic', "comments": `<p>Capitalisation doesn't convert ij at the start of a word to IJ in most browsers, even if the text is labelled as Dutch. See test results at <a href="https://www.w3.org/International/tests/repo/results/text-transform#dutch_tailoring">https://www.w3.org/International/tests/repo/results/text-transform#dutch_tailoring</a></p>
 <p>See also the section on <a href="#initial_letter">initial letter styling</a>.</p>` },
'spacing': { 'status':'basic', "comments": `<p>Current implementations put the letter spacing after a letter even when it is at the end of a line, which makes the line look misaligned in justified or right-justified text.</p>` },
'ruby': { 'status':'na', "comments": `<p></p>` },
'textdecoration': { 'status':'ok', "comments": `<p></p>` },
'emphasis': { 'status':'ok', "comments": `<p></p>` },
'bidi': { 'status':'na', "comments": `<p></p>` },
'otherinline': { 'status':'na', "comments": `<p></p>` },

'linebreak': { 'status':'ok', "comments": `<p>But see <a href="#hyphenation">hyphenation</a> below.</p>` },
'hyphenation': { 'status':'basic', "comments": `<p>Few browsers so far support hyphenation. When they do, they break correctly in most cases (better on Debian Linux than on Mac OS X, it seems), but they do not use the break opportunities where breaking would cause letters to change (cafeetje &rarr; café-tje, autootje &rarr; auto-tje) or they do it wrong (skiërs &rarr; ski-ers, <em>not</em> ski-ërs).</p>` },
'justification': { 'status':'advanced', "comments": `<p>The (rarely used) hanging punctuation is not supported. Some newspapers allow letter spacing to help with justification, which is not supported either.</p>` },
'counters': { 'status':'ok', "comments": `<p></p>` },
'initialletter': { 'status':'basic', "comments": `<p>Despite the CSS specification specifically mentioning that the IJ combination should be treated as a single letter, browser don't seem to support this.</p>` },
'baselines': { 'status':'ok', "comments": `<p>[Not sure what to answer. Baseline alignment within Dutch works fine. But I don't know if it works between Dutch and non-latin scripts.]</p>` },
'whitespace': { 'status':'ok', "comments": `<p></p>` },
'otherpara': { 'status':'ok', "comments": `<p></p>` },

'bidilayout': { 'status':'na', "comments": `<p></p>` },
'vertical': { 'status':'advanced', "comments": `<p>Vertical text may occur for special effects (the spine of a book, table column headings). Typographically, it is simply horizontal text that is rotated. The ‘writing-modes: sideways-lr/rl’  CSS feature should solve that, but isn't supported yet.</p>` },
'notes': { 'status':'', "comments": `<p>Some software supports the (experimental) features of CSS for footnotes, but none of the browsers do. Those features would still need to be enhanced for some advanced applications, in particular to support multiple footnote streams, such as in some critical editions.</p>` },
'pageheaders': { 'status':'', "comments": `<p>Although there exist software that supports page numbers and running headers, none of the browsers do. Complex running headers (containing math, tables or other complex content) are not supported anywhere.</p>` },
'otherpage': { 'status':'ok', "comments": `<p></p>` },

'culture': { 'status':'', "comments": `<p></p>` },
'other': { 'status':'', "comments": `<p>The ‘ij’ is for some purposes a single letter, the 25th letter of the alphabet. The ‘y’, called ‘Griekse ij’ (Greek y), is not in the alphabet that children learn, although there are many (imported) words and names that use it. In handwriting and in some children's books, the ‘ij’ is a single glyph. (Never written as ÿ, but looking like a ü with the tail of a j or a sans-serif g. Children quickly learn that the ij is written as i+j in books and on the computer, but most people continue to write a single glyph when they write by hand. Dictionaries and alphabetical indexes usually sort ij with i, but some put ij after x. But when capitalizing a word that begins wih ij, both letters are always capitalized: <span lang=nl>ijs</span> &rarr; <span lang=nl>IJs</span> (meaning ‘ice’).
<p>The special <a href="#hyphenation">hyphenation rules</a> are explained above.
<p>Some other characteristics of Dutch (none of which pose problems on the Web):
<ul>
<li>There are official rules for formatting postal codes in addresses (<span style="white-space: nowrap">‘1000&nbsp;AA&emsp;AMSTERDAM’</span>).
<li>There is a traditional way to layout (business) letters.
<li>The rules for quotation marks and their nesting are similar to British English. (But punctuation and quotation marks may swap place compared to American English.)
<li>Text is typically slightly longer than equivalent English text and words are slightly longer on average, too.
<li>Pronunciation is usually easy to guess from the spelling. (The other way round is not so easy, because many combinations sound the same: au = ou, dt = t, ei = ij, <span lang=nl>heetten</span> = <span lang=nl>heten</span>, etc.).
<li>Certain words (mostly names and words derived from names) are capitalized.
<li>Numbers use a dot between thousands and a comma before the decimals. The ‘0’ before the comma cannot be omitted (‘0,5’ but not ‘,5’).
<li>Negative numbers start with a minus or dash.
<li>The currency symbol precedes the amount (€10).
<li>Ordinal numbers consist of digits followed by either an ‘e’ or one of ‘de’/‘ste’, in the same size and style as the digits: 1e, 2e, 100e or: 1ste, 2de, 100ste.
<li>There is no space before punctuation (‘<span lang=nl>dan,</span>’, ‘<span lang=nl>zei:</span>’, ‘<span lang=nl>goed!</span>’).
<li>There is a simple space after the full stop at the end of a sentence.
<li>The page numbered 1 in a book is a right hand page.
<li>When text on the spine of a book is rotated, it is always in such a way that the book can lie with the front cover on top (i.e., like in English but different from French).
<li>Some diacritics are used: diaeresis to indicate otherwise ambiguous syllable breaks (‘<span lang=nl>geërft</span>’, two syllables vs ‘<span lang=nl>geeft</span>’, one syllable), acute and grave accents for emphasis or French loan words (‘<span lang=nl>hé!</span>’ ‘<span lang=nl>één</span>’, ‘<span lang=nl>café</span>‘), cedilla for loan words (<span lang=nl>Curaçao</span>, <span lang=nl>reçu</span>).
</ul>` },

}