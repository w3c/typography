var doctitle = "Cherokee for HTML/CSS (Draft)"

var compilers = "r12a"

var report = {

'encoding': { 'status':'ok', "comments": `<p>Unicode recently introduced case for Cherokee, so character coverage is ok.</p>` },
'fonts': { 'status':'basic', "comments": `<p>Fonts that existed prior to Unicode 8.0 need updating to support lowercase characters.</p>` },
'fontstyle': { 'status':'ok', "comments": `<p>Assumed same as for Latin.</p>` },
'glyphs': { 'status':'na', "comments": `<p>No diacritics or special glyph issues.</p>` },
'cursive': { 'status':'na', "comments": `<p></p>` },
'boundaries': { 'status':'ok', "comments": `<p></p>` },
'quotations': { 'status':'ok', "comments": `<p></p>` },
'numbers': { 'status':'na', "comments": `<p></p>` },
'transforms': { 'status':'basic', "comments": `<p>CSS text transforms (uppercase, lowercase, capitalize) don't work on Safari or Edge. See the tests:</p>
<ul>
  <li><a href="https://www.w3.org/International/tests/repo/results/text-transform#cherokee_ul">upper/lowercase transforms</a></li>
  <li><a href="https://www.w3.org/International/tests/repo/results/text-transform#cherokee_cap">capitalization</a></li>
</ul>` },
'spacing': { 'status':'', "comments": `<p>.</p>` },
'ruby': { 'status':'na', "comments": `<p></p>` },
'textdecoration': { 'status':'ok', "comments": `<p>Assumed same as for Latin.</p>` },
'emphasis': { 'status':'ok', "comments": `<p>Assumed same as for Latin.</p>` },
'bidi': { 'status':'na', "comments": `<p></p>` },
'otherinline': { 'status':'', "comments": `<p></p>` },

'linebreak': { 'status':'ok', "comments": `<p></p>` },
'hyphenation': { 'status':'', "comments": `<p></p>` },
'justification': { 'status':'', "comments": `<p>Not clear whether same rules apply as for English.</p>` },
'counters': { 'status':'ok', "comments": `<p></p>` },
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