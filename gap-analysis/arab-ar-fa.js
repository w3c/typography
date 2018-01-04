var doctitle = "Arabic &amp; Persian for HTML/CSS (Draft)"

var compilers = "r12a"

var report = {

'encoding': { 'status':'ok', "comments": `` },
'fontstyle': { 'status':'advanced', "comments": `<p>There should be means available to control the direction in which 'italicised' or 'oblique' text slants, since in some schools of Arabic script typography, text in these styles need to slant to the left.</p>` },
'glyphs': { 'status':'advanced', "comments": `<p>For advanced typographic purposes, the fixed position of diacritical marks relative to base letter or baseline and the logical stacking behvaior of them might not be sufficient. Therefore, it should be possible to adjust the positioning and combining order and changes to the individual marks when combining. Fonts and other systems may implement the logic needed to result in an optimal presentation of diacritical mark clusters by default.</p>` },
'cursive': { 'status':'basic', "comments": `<p>Various changes in styling currently break cursive connections. This should not happen. (Add details)</p>` },
'boundaries': { 'status':'ok', "comments": `` },
'quotations': { 'status':'basic', "comments": `<p>In HTML and CSS the styling applied to nested multilingual quotations when using the q element chooses quotation marks based on the language of the text inside the quotation, rather than outside.</p>` },
'numbers': { 'status':'basic', "comments": `<p>Internationalization software libraries identify Arabic-Indic numerals as the correct set of numerals which should be used with text in Arabic language. This excludes few Arabic-speaking countries of North and Northwest Africa which should use Arabic (ASCII) numerals. Surveys of publications, monetary and governmental documents, and manuscripts confirm these precedences. However, there are instances of usage on the web which diverge from the said recommendations. This discrepency is potentially disadvantageous to the quality of digital typography.</p>` },
'transforms': { 'status':'na', "comments": `<p></p>` },
'spacing': { 'status':'basic', "comments": `<p>It is very common in Arabic script to stretch words or phrases to a particular width (eg. to match a Latin translation or transcription above or below). This is achieved by lengthening the connections between letters, and to some extent by use of wide glyph variants, etc. The rules for which part of the text to stretch and how far are complicated - this is not the even spacing that usually occurs in tracked Latin text. There are currently no mechanisms for managing this process effectively in HTML/CSS.</p>` },
'ruby': { 'status':'na', "comments": `<p></p>` },
'textdecoration': { 'status':'basic', "comments": `<p>It must be possible to position under- and overlines further away from the baseline than for Latin text. There is not currently a way to achieve effective underlining in a way that works with the Arabic script.</p>` },
'emphasis': { 'status':'ok', "comments": `<p></p>` },
'bidi': { 'status':'basic', "comments": `<p>Edge still doesn't support directional isolation.</p>
<p>There are questions about how to transmit information about the expected directional behaviour of certain strings.</p>
<p>RLI, LRI, etc are still not well supported.</p>
<p>....</p>` },
'otherinline': { 'status':'', "comments": `<p></p>` },

'linebreak': { 'status':'ok', "comments": `<p></p>` },
'hyphenation': { 'status':'na', "comments": `<p>No hyphenation is used for Arabic when used with Arabic and Persian languages.</p>` },
'justification': { 'status':'advanced', "comments": `<p>For justification of Arabic script text, there are various common strategies available. These could be categorized in two major groups; strategies based on adjusting inter-word or inter-character whitespace and strategies based on adjusting the letterforms. A basic implementation must provide at least one of these strategies for adequate  justification results. Advanced implementations should provide users with the necessary means to control the selection of strategies, adjustment of their attributes, and the priority with which they are being applied. Currently, CSS specifications does not provide these advanced features, but recommends the implementations to select the justification strategy appropriated to the text.</p>` },
'counters': { 'status':'basic', "comments": `<p>Arabic script text uses local counter styles. While some of these are supported by some browsers, the set of symbols used and their order varies by language. Custom counter styles can be created using Firefox only. The CSS spec needs to become a Rec and more browsers need to support it.</p>` },
'initialletter': { 'status':'advanced', "comments": `<p>Although initial letter styling is not an innate feature of the Arabic script, there have been occurences of its usage noted. However, the specifications and guidelines for composition of these decorative elements are undefined or insubstantial; for example, which of the joining forms of letters is to be used or how the joining behaviour is treated accross the boundary between the styled initial letter and rest of the paragraph.</p>` },
'baselines': { 'status':'ok', "comments": `<p></p>` },
'whitespace': { 'status':'na', "comments": `<p></p>` },
'otherpara': { 'status':'', "comments": `<p></p>` },

'bidilayout': { 'status':'basic', "comments": `<p>There needs to be wider adoption of logical keywords such as start and end, rather than left and right.</p>` },
'vertical': { 'status':'na', "comments": `<p>[We need to clarify whether there is a particular requirement for handling arabic text specially in vertical lines, such as upright glyphs.] [We are also waiting on implementation of sideways values of writing-modes in order to be able to effectively use arabic text in vertical arrangements (such as book spines, table headings, etc), but that is not a problem specific to arabic.]</p>` },
'notes': { 'status':'', "comments": `<p></p>` },
'pageheaders': { 'status':'', "comments": `<p></p>` },
'otherpage': { 'status':'', "comments": `<p></p>` },

'culture': { 'status':'', "comments": `<p></p>` },
'other': { 'status':'', "comments": `<p></p>` },

}
