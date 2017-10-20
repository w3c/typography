var doctitle = "Arabic &amp; Persian for HTML/CSS (Draft)"

var compilers = "r12a"

var report = {

'encoding': { 'status':'ok', "comments": `<p></p>` },
'fontstyle': { 'status':'ok', "comments": `<p></p>` },
'glyphs': { 'status':'na', "comments": `<p></p>` },
'cursive': { 'status':'na', "comments": `<p></p>` },
'boundaries': { 'status':'basic', "comments": `<p>Double-clicking highlights too much text.</p>` },
'quotations': { 'status':'baoksic', "comments": `<p></p>` },
'numbers': { 'status':'ok', "comments": `<p></p>` },
'transforms': { 'status':'', "comments": `<p></p>` },
'spacing': { 'status':'na', "comments": `<p>.</p>` },
'ruby': { 'status':'na', "comments": `<p></p>` },
'textdecoration': { 'status':'na', "comments": `<p></p>` },
'emphasis': { 'status':'ok', "comments": `<p></p>` },
'bidi': { 'status':'na', "comments": `<p></p>` },
'otherinline': { 'status':'', "comments": `<p></p>` },

'linebreak': { 'status':'broken', "comments": `<p>Browsers don't wrap text. Wrapping needs to occur at orthographic syllable boundaries, which are not delimited by punctuation or spaces. Unlike Thai, which uses dictionary lookup to wrap word-by-word, the basic break points in Javanese can be calculated using a grammar for syllables. (There are likely to be additional considerations to check related to punctuation, digits, etc.)</p>` },
'hyphenation': { 'status':'na', "comments": `<p>There is a feature in use in print sometimes were when a line starts with ◌ꦺ [U+A9BA JAVANESE VOWEL SIGN TALING​] another one is put at the end of the previous line. However, it is not felt that this is an important feature to enable at this time.</p>` },
'justification': { 'status':'', "comments": `<p>Currently no stretching is applied to a line in order to justify both edges, but it's not clear whether that is a requirement for Javanese anyway.</p>` },
'counters': { 'status':'', "comments": `<p></p>` },
'initialletter': { 'status':'', "comments": `<p></p>` },
'baselines': { 'status':'ok', "comments": `<p></p>` },
'whitespace': { 'status':'na', "comments": `<p></p>` },
'otherpara': { 'status':'', "comments": `<p></p>` },

'bidilayout': { 'status':'na', "comments": `<p></p>` },
'vertical': { 'status':'na', "comments": `<p></p>` },
'notes': { 'status':'', "comments": `<p></p>` },
'pageheaders': { 'status':'', "comments": `<p></p>` },
'otherpage': { 'status':'', "comments": `<p></p>` },

'culture': { 'status':'', "comments": `<p></p>` },
'other': { 'status':'', "comments": `<p></p>` },

}