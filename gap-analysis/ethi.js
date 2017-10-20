var doctitle = "Ethiopic Script for HTML/CSS (Draft)"

var compilers = "r12a"

var report = {

'encoding': { 'status':'ok', "comments": `<p></p>` },
'fonts': { 'status':'ok', "comments": `<p></p>` },
'fontstyle': { 'status':'ok', "comments": `<p></p>` },
'glyphs': { 'status':'ok', "comments": `<p>Gemination and vowel length marks are typically at a fixed height above the tallest character in printed material, but in handwriting the marks are just above the base character, and therefore at varying heights. It's not clear, however, that a control is needed for ajusting such diacritic heights.</p>` },
'cursive': { 'status':'na', "comments": `<p></p>` },
'boundaries': { 'status':'ok', "comments": `<p>There's a question about whether double-click selection should pick up the wordspace character as well (it does in MS Word, but spaces are not picked up in Firefox for text with normal spaces between words...).</p>` },
'quotations': { 'status':'ok', "comments": `<p></p>` },
'numbers': { 'status':'', "comments": `<p>Digits have lines above and below. Modern practice tends to use discreet lines associated with each characters, however older texts used a single line across the whole set of adjacent digits. This difference is likely due to technology constraints. Presumbaly, a continuous line could be applied using OpenType functionality, but there may be a question about whether a control should allow to switch between one style and the other.</p>` },
'transforms': { 'status':'advanced', "comments": `<p>There should be a way to automatically convert word-space characters to ordinary spaces, and vice versa.</p>` },
'spacing': { 'status':'na', "comments": `<p></p>` },
'ruby': { 'status':'na', "comments": `<p></p>` },
'textdecoration': { 'status':'basic', "comments": `<p>Underlines in Ethiopic text need to be thicker than in English text. Some control is needed over the thickness of the underline. This may be an advanced issue.</p>
<p>When underlining a word followed by an ethiopic wordspace, the punctuation should also receive the underline. This is not currently allowed in the CSS spec. This seems like a basic issue.</p>` },
'emphasis': { 'status':'advanced', "comments": `<p>When highlightin or emphasising a word followed by an ethiopic wordspace, the punctuation should also receive the highlight. This includes underlines, for which there is currently an issue (see above).</p>` },
'bidi': { 'status':'na', "comments": `<p></p>` },
'otherinline': { 'status':'', "comments": `<p></p>` },

'linebreak': { 'status':'basic', "comments": `<p>Need to run a test to check whether the ethiopic characters that shouldn't appear at line end/start behave as expected given the <a href="https://w3c.github.io/elreq/#ethiopic_line_breaking">elreq rules</a>.</p>
<p>And need to test whether lines break between characters. Firefox appears to  allow this, but Chrome and Safari wrap whole words (with wordspace) instead. Marking this, therefore, as basic issue. Need to check what the CSS spec says.</p>` },
'hyphenation': { 'status':'', "comments": `<p>There seems to be a <a href="https://w3c.github.io/elreq/#ethiopic_hyphenation">question</a> about whether hyphenation is useful.</p>` },
'justification': { 'status':'advanced', "comments": `<p>When text uses ethiopic wordspace the wordspace should expand to assist in justification. Need some tests to check whether than happens. This is a basic issue, so if tests fail, we need to change the status of this section.</p>
<p>However, there need to be some rules about how to position the ink within the wordspace character (with the word, or centred), and a control to allow the preferred style of positioning. I'm classifying that as an advanced control. See the <a href="https://w3c.github.io/elreq/#ethiopic_justification">requirements</a>.</p>` },
'counters': { 'status':'basic', "comments": `<p>Ethiopic script text uses local counter styles. While some of these are supported by some browsers, the set of symbols used and their order varies by language. Custom counter styles can be created using Firefox only. The CSS spec needs to become a Rec and more browsers need to support it.</p>
<p>There is also a question (which is probably an advanced issue) about whether counters should align to the left or right.</p>` },
'initialletter': { 'status':'', "comments": `<p></p>` },
'baselines': { 'status':'ok', "comments": `<p></p>` },
'whitespace': { 'status':'na', "comments": `<p></p>` },
'otherpara': { 'status':'ok', "comments": `<p>There are various expectations about whether paragraphs begin with an indented line or not, but i think these can be addressed with current technology.</p>
<p>There is also a question about whether the technology should allow a new paragraph to start on the same line as the last item in a list (with a gap between the two). It is not yet a clear requirement.</p>` },

'bidilayout': { 'status':'na', "comments": `<p></p>` },
'vertical': { 'status':'na', "comments": `<p></p>` },
'notes': { 'status':'ok', "comments": `<p>Appears to be same as for English.</p>` },
'pageheaders': { 'status':'advanced', "comments": `<p>Assumed to be same as for English, in general. However, <a href="https://w3c.github.io/elreq/#h_page_numbering">elreq proposes</a> that users should be able to toggle between European and Ethiopic numerals for the page numbering.</p>` },
'otherpage': { 'status':'', "comments": `<p></p>` },

'culture': { 'status':'', "comments": `<p></p>` },
'other': { 'status':'', "comments": `<p></p>` },

}